import React from "react";
import { Bars3Icon, BoltIcon } from "@heroicons/react/24/outline";

const MenuItem = ({children}) => (
  <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#111217] rounded-md cursor-pointer">
    {children}
  </div>
);

export default function Sidebar(){
  return (
    <aside className="w-64 bg-[#07070a] border-r border-black/20 min-h-screen p-4 hidden md:block">
      <div className="mb-6">
        <div className="px-3 py-2 text-lg font-bold">Apollo</div>
      </div>

      <div className="space-y-1">
        <MenuItem><Bars3Icon className="w-5 h-5 text-muted" /> <span className="text-sm">For you</span></MenuItem>
        <MenuItem><BoltIcon className="w-5 h-5 text-muted" /> <span className="text-sm">Prospect</span></MenuItem>
        <div className="mt-4 px-3 text-xs text-muted">Manage</div>
        <MenuItem><span className="text-sm">Lists</span></MenuItem>
        <MenuItem><span className="text-sm">Deals</span></MenuItem>
      </div>

      <div className="mt-8">
        <button className="w-full bg-accent/95 text-black font-semibold py-2 rounded-md">Upgrade</button>
      </div>
    </aside>
  );
}
