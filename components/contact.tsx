"use client";

import React, { useRef, useState } from "react";
const MAX_TOTAL_ATTACHMENT_BYTES = 5 * 1024 * 1024;
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsArrowDown } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const attachInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get in Touch</SectionHeading>

      <p className="text-gray-700 -mt-2 dark:text-white/80 font-medium">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:aleksander.podobnik@gmail.com">
          aleksander.podobnik@gmail.com
        </a>{" "}
        or through here.
      </p>
      <BsArrowDown className="mx-auto mt-4 animate-bounce text-xl" />

      <form
        className="mt-4 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");

          setAttachedFiles([]);
          if (attachInputRef.current) {
            try {
              const dt = new DataTransfer();
              attachInputRef.current.files = dt.files;
            } catch (e) {
              attachInputRef.current.value = "";
            }
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack focus:bg-gray-300 dark:bg-white dark:focus:bg-gray-400 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email..."
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:bg-gray-300 dark:bg-white dark:focus:bg-gray-300 transition-all dark:outline-none"
          name="message"
          placeholder="Your message..."
          required
          maxLength={5000}
        />
        {/* Attach files UI */}
        <AttachFiles
          inputRef={attachInputRef}
          files={attachedFiles}
          setFiles={setAttachedFiles}
        />
        <SubmitBtn />
      </form>
    </motion.section>
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
    <div className="mt-3 mb-6 text-left">
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
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 border border-black/5 rounded-md text-sm text-gray-700 dark:text-white transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
          <div className="py-2 text-base">No files selected</div>
        )}
        {files.length > 0 && (
          <ul className="space-y-2">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="truncate max-w-[18rem] text-base sm:text-lg font-medium">
                    {f.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round(f.size / 1024)} KB
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-4 text-2xl leading-none text-red-600 hover:text-red-800 dark:text-red-400 font-semibold"
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
