'use client';

import { HiOutlinePrinter } from "react-icons/hi";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded hover:opacity-80 transition cursor-pointer print:hidden"
    >
      <HiOutlinePrinter className="w-[25px] h-[25px]" />
    </button>
  );
}