import React from "react";
import { Warehouse } from "./warehouse";
import { IoChevronBack } from "react-icons/io5";

interface BranchDropdownProps {
  open: boolean;
  warehouses: Warehouse[];
  selectedCode?: string;
  onSelect: (code: string) => void;
  onClose: () => void;
}

export const BranchDropdown: React.FC<BranchDropdownProps> = ({
  open,
  warehouses,
  selectedCode,
  onSelect,
  onClose,
}) => {
  if (!open) return null;
  return (
    <div className="absolute left-0 mt-0 w-full bg-neutral-500 border border-neutral-500 z-10 print:hidden">
      {selectedCode && (
        <div
          className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-white hover:text-red-600 cursor-pointer transition print:hidden font-semibold"
          onClick={() => {
            onSelect("back");
            onClose();
          }}
        >
          <IoChevronBack />
          Back to Careers
        </div>
      )}
      {warehouses.map((branch) => (
        <div
          key={branch.code}
          className={`px-4 py-2 text-sm text-white hover:bg-white hover:text-red-600 cursor-pointer transition border-b border-white last:border-b-0 print:hidden ${
            selectedCode === branch.code ? "bg-neutral-700 font-bold" : ""
          }`}
          onClick={() => {
            onSelect(branch.code!);
            onClose();
          }}
        >
          {branch.name}
        </div>
      ))}
      {selectedCode && (
        <div
          className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-white hover:text-red-600 cursor-pointer transition print:hidden font-semibold"
          onClick={() => {
            onSelect("back");
            onClose();
          }}
        >
          <IoChevronBack />
          Back to Careers
        </div>
      )}
    </div>
  );
};