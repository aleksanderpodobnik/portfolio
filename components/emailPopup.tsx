"use client";

import { useState, useEffect, useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const MAX_TOTAL_ATTACHMENT_BYTES = 5 * 1024 * 1024;

export default function EmailPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const attachInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 1200);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const { data, error } = await sendEmail(formData);

      if (error) {
        toast.error(error);
        setIsSubmitting(false);
        return;
      }

      toast.success("Email sent successfully!");
      setEmail("");
      setMessage("");
      setAttachedFiles([]);

      if (attachInputRef.current) {
        try {
          const dt = new DataTransfer();
          attachInputRef.current.files = dt.files;
        } catch (e) {
          attachInputRef.current.value = "";
        }
      }

      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
      <div
        className={`
          mb-20
          w-full max-w-md
          bg-white dark:bg-gray-900
          rounded-lg shadow-2xl
          border border-black/[0.1] dark:border-white/[0.1]
          pointer-events-auto
          transform transition-all duration-[1200ms] ease-in-out
          ${isClosing ? "translate-x-[120%] opacity-0 scale-90" : "translate-x-0 opacity-100 scale-100"}
          animate-slide-in
        `}
        style={{
          animation: isClosing ? "none" : "slideIn 1.2s ease-in-out",
        }}
      >
        <div className="relative p-6 max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Do you have a question?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out! I'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="senderEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={500}
                className="w-full px-4 py-3 border border-black/[0.1] dark:border-white/[0.1] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
                placeholder="Your email"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={5000}
                rows={4}
                className="w-full px-4 py-3 border border-black/[0.1] dark:border-white/[0.1] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-950 text-gray-900 dark:text-white resize-none transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
                placeholder="Your message"
              />
            </div>

            <AttachFiles
              inputRef={attachInputRef}
              files={attachedFiles}
              setFiles={setAttachedFiles}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(120%) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function AttachFiles({
  inputRef,
  files,
  setFiles,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}) {
  function openPicker() {
    inputRef.current?.click();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.target.files;
    if (!list) return;
    const newFiles = Array.from(list);
    const merged = [...files, ...newFiles];
    const seen = new Map<string, File>();
    for (const f of merged) {
      const key = `${f.name}-${f.size}-${f.type}`;
      if (!seen.has(key)) seen.set(key, f);
    }
    const unique = Array.from(seen.values());

    const total = unique.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL_ATTACHMENT_BYTES) {
      toast.error(
        `Total attachments exceed ${Math.round(MAX_TOTAL_ATTACHMENT_BYTES / 1024 / 1024)} MB. Remove some files.`
      );
      try {
        if (inputRef.current) inputRef.current.value = "";
      } catch (err) {}
      return;
    }

    try {
      const dt = new DataTransfer();
      unique.forEach((f) => dt.items.add(f));
      if (inputRef.current) inputRef.current.files = dt.files;
    } catch (err) {
      console.warn(
        "DataTransfer not supported; incremental attach may not persist to submission"
      );
    }

    setFiles(unique);
  }

  function removeFile(index: number) {
    const newFiles = files.filter((_, i) => i !== index);
    try {
      const dt = new DataTransfer();
      newFiles.forEach((f) => dt.items.add(f));
      if (inputRef.current) inputRef.current.files = dt.files;
    } catch (err) {
      console.warn(
        "DataTransfer not supported; removal may not persist to submission"
      );
    }
    setFiles(newFiles);
  }

  return (
    <div className="text-left">
      <input
        ref={inputRef}
        type="file"
        name="attachments"
        multiple
        onChange={onChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={openPicker}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 border border-black/[0.1] dark:border-white/[0.1] rounded-md text-sm text-gray-700 dark:text-white transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16V8a4 4 0 118 0v8m-4-4v4"
          />
        </svg>
        Attach files (Optional)
      </button>

      <div className="mt-2 text-sm text-gray-600 dark:text-white/80">
        {files.length === 0 && (
          <div className="py-2 text-sm">No files selected</div>
        )}
        {files.length > 0 && (
          <ul className="space-y-2">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="truncate max-w-[12rem] text-sm font-medium">
                    {f.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {Math.round(f.size / 1024)} KB
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-2 text-lg leading-none text-red-600 hover:text-red-800 dark:text-red-400 font-semibold"
                  aria-label={`Remove ${f.name}`}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
