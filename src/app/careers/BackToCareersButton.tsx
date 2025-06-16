import React from "react";
import { IoChevronBack } from "react-icons/io5";

interface Props {
  onClick: () => void;
}

export default function BackToCareersButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center mb-4 px-4 py-2 bg-brand text-white rounded hover:bg-red-700 font-semibold"
    >
      <IoChevronBack className="w-5 h-5 mr-2" />
      Back to Careers
    </button>
  );
}