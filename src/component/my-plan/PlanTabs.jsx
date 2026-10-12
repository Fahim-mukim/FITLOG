
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const PlanTabs = ({ activeTab, sortBy = "duration" }) => {
  const router = useRouter();

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;

    router.push(
      `/my-plan?tab=${activeTab}&sort=${selectedSort}`
    );
  };

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      {/* Tabs */}
      <div className="inline-flex w-fit gap-1 rounded-xl border border-[#30343a] bg-[#1a1c20] p-1.5">
        <Link
          href={`/my-plan?tab=today&sort=${sortBy}`}
          className={`rounded-lg px-4 py-2.5 font-inter text-sm font-semibold transition ${activeTab === "today"
              ? "bg-[#3a3d42] text-white"
              : "text-gray-400 hover:bg-[#25282d] hover:text-white"
            }`}
        >
          Today's Plan
        </Link>

        <Link
          href={`/my-plan?tab=saved&sort=${sortBy}`}
          className={`rounded-lg px-4 py-2.5 font-inter text-sm font-semibold transition ${activeTab === "saved"
              ? "bg-[#3a3d42] text-white"
              : "text-gray-400 hover:bg-[#25282d] hover:text-white"
            }`}
        >
          Saved
        </Link>
      </div>

      {/* Sort By */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="workout-sort"
          className="whitespace-nowrap font-inter text-sm text-gray-400"
        >
          Sort By
        </label>

        <div className="relative">
          <select
            id="workout-sort"
            value={sortBy}
            onChange={handleSortChange}
            className="w-40 appearance-none rounded-xl border border-[#30343a] bg-[#1a1c20] py-2.5 pl-3 pr-10 font-inter text-sm text-white outline-none transition hover:border-gray-500 focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

          {/* Chevron Icon */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlanTabs;
