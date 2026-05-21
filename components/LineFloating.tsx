"use client";

import { useI18n } from "@/lib/i18n";

export default function LineFloating() {
  const { t } = useI18n();
  return (
    <a
      href="https://line.me/R/ti/p/@your-line-id"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#06C755] hover:bg-[#05b04c] text-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2 transition transform hover:scale-105"
      aria-label={t.contact.lineButton}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.7 7.4 8.8 8 .4.1.9.3 1 .6.1.3.1.7 0 1l-.2 1.1c0 .4-.3 1.4 1.2.8 1.5-.6 8-4.7 10.9-8h0c2-2.2 3.3-4.5 3.3-7.5C26.9 5.6 22.4 2 12 2zM7.4 13.2c0 .1-.1.2-.2.2H4.4c-.1 0-.2-.1-.2-.2V8.6c0-.1.1-.2.2-.2h.7c.1 0 .2.1.2.2v3.6h1.9c.1 0 .2.1.2.2v.8zm1.6 0c0 .1-.1.2-.2.2h-.7c-.1 0-.2-.1-.2-.2V8.6c0-.1.1-.2.2-.2h.7c.1 0 .2.1.2.2v4.6zm5.1 0c0 .1-.1.2-.2.2h-.7c0 0-.1 0-.1 0L11 10.5v2.7c0 .1-.1.2-.2.2h-.7c-.1 0-.2-.1-.2-.2V8.6c0-.1.1-.2.2-.2h.7c0 0 .1 0 .1 0L13 11v-2.4c0-.1.1-.2.2-.2h.7c.1 0 .2.1.2.2v4.6zm3.8-3.8c0 .1-.1.2-.2.2h-1.9v.8h1.9c.1 0 .2.1.2.2v.7c0 .1-.1.2-.2.2h-1.9v.8h1.9c.1 0 .2.1.2.2v.7c0 .1-.1.2-.2.2h-2.8c-.1 0-.2-.1-.2-.2V8.6c0-.1.1-.2.2-.2h2.8c.1 0 .2.1.2.2v.8z"/>
      </svg>
      <span className="font-medium text-sm">LINE</span>
    </a>
  );
}
