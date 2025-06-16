import React from "react";
import { Warehouse } from "./warehouse";

interface Props {
  branch: Warehouse;
}

export default function BranchDetails({ branch }: Props) {
  return (
    <div className="bg-white rounded shadow p-6">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{branch.name}</h2>
          {branch.address && (
            <div className="mb-2">
              <span className="font-semibold">Address:</span> {branch.address}
            </div>
          )}
          {branch.phone && (
            <div className="mb-2">
              <span className="font-semibold">Phone:</span> {branch.phone}
            </div>
          )}
          {branch.departments && (
            <div className="mb-2">
              <span className="font-semibold">Departments:</span> {branch.departments}
            </div>
          )}
          {branch.facility_size && (
            <div className="mb-2">
              <span className="font-semibold">Facility:</span> {branch.facility_size}
            </div>
          )}
          {branch.is_accessible && (
            <div className="mb-2">
              <span className="font-semibold">Accessibility:</span> Yes
            </div>
          )}
        </div>
        {branch.image && (
          <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
            <img
              src={branch.image}
              alt={branch.name}
              className="rounded shadow max-h-48 w-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}