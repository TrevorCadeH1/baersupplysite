import React from "react";

interface BranchDropdownProps {
  open: boolean;
  branches: string[];
  onClose: () => void;
}

export const BranchDropdown: React.FC<BranchDropdownProps> = ({ open, branches, onClose }) => {
  if (!open) return null;
  return (
    <div className="absolute left-0 mt-0 w-full bg-neutral-500 border border-neutral-500 z-10 print:hidden">
      {branches.map((branch) => (
        <div
          key={branch}
          className="px-4 py-2 text-sm text-white hover:bg-white hover:text-red-600 cursor-pointer transition border-b border-white last:border-b-0 print:hidden"
          onClick={onClose}
        >
          {branch}
        </div>
      ))}
    </div>
  );
};