import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Topbar(){
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-black/20 bg-[#07070a]">
      <div className="flex items-center gap-4">
        <div className="w-[320px]">
          <div className="relative">
            <input className="w-full bg-[#0e1116] px-3 py-2 rounded-lg text-sm placeholder:text-muted" placeholder="Search Apollo..." />
            <MagnifyingGlassIcon className="w-4 h-4 absolute right-3 top-2.5 text-muted" />
          </div>
        </div>
        <button className="px-3 py-1 rounded-md bg-[#0e1116] text-sm">Research with AI</button>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm text-muted">Import</button>
        <div className="w-9 h-9 rounded-full bg-[#1b1d22] flex items-center justify-center">CH</div>
      </div>
    </header>
  );
}
