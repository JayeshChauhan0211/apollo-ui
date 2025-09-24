import React from "react";

const Tag = ({children}) => <span className="inline-block px-3 py-1 mr-2 mb-2 bg-[#15171b] text-sm rounded-full text-muted">{children}</span>;

export default function QuickFilters(){
  return (
    <div className="bg-[#0b0d10] p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Quick filters</h3>
        <div className="text-sm text-muted">Email Status</div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs text-muted mb-2">Locations</div>
          <div>
            <Tag>United States</Tag>
            <Tag>Canada</Tag>
          </div>

          <div className="text-xs text-muted mt-3 mb-2">Job Titles</div>
          <div>
            <Tag>founder</Tag>
            <Tag>sales manager</Tag>
            <Tag>marketing director</Tag>
          </div>
        </div>

        <div>
          <div className="text-xs text-muted mb-2">Industry</div>
          <div>
            <Tag>information technology & services</Tag>
            <Tag>marketing & advertising</Tag>
            <Tag>retail</Tag>
          </div>

          <div className="text-xs text-muted mt-3 mb-2">Email Status</div>
          <div>
            <Tag>Verified</Tag>
            <Tag>Unverified</Tag>
            <Tag>Unavailable</Tag>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-black/20 pt-4 flex items-center justify-between">
        <div className="text-sm text-muted">Unlock advanced filters: Revenue • Funding • Lookalikes</div>
        <button className="bg-accent/95 px-3 py-1 rounded-md text-black">View plans</button>
      </div>
    </div>
  );
}
