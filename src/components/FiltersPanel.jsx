import React from "react";
import QuickFilters from "./QuickFilters";

export default function FiltersPanel(){
  return (
    <div className="bg-[#0f1114] border border-black/20 rounded-2xl p-5">
      <div className="flex items-start gap-6">
        <div className="w-64">
          <div className="space-y-3">
            <div className="text-sm text-muted">Lists</div>
            <div className="bg-[#0b0d10] p-3 rounded">Persona</div>
            <div className="bg-[#0b0d10] p-3 rounded">Email Status</div>
            <div className="bg-[#0b0d10] p-3 rounded">Job Titles</div>
          </div>
        </div>

        <div className="flex-1">
          <QuickFilters />
        </div>
      </div>
    </div>
  );
}
