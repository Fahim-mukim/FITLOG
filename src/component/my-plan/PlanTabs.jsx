
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const PlanTabs = ({ activeTab, sortBy }) => {
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
          className={`rounded-lg px-4 py-2.5 font-inter text-sm font-semibold transition duration-200 ${
            activeTab === "today"
              ? "bg-[#3a3d42] text-white"
              : "text-gray-400 hover:bg-[#25282d] hover:text-white"
          }`}
        >
          Today's Plan
        </Link>

        <Link
          href={`/my-plan?tab=saved&sort=${sortBy}`}
          className={`rounded-lg px-4 py-2.5 font-inter text-sm font-semibold transition duration-200 ${
            activeTab === "saved"
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
          Sort by
        </label>

        <select
          id="workout-sort"
          value={sortBy}
          onChange={handleSortChange}
          className="min-w-44 rounded-xl border border-[#30343a] bg-[#1a1c20] px-3 py-2.5 font-inter text-sm text-white outline-none transition focus:border-gray-500"
        >
          <option value="default">Default Order</option>
          <option value="duration-asc">Duration: Shortest First</option>
          <option value="duration-desc">Duration: Longest First</option>
          <option value="calories-desc">Calories: Highest First</option>
          <option value="rating-desc">Rating: Highest First</option>
          <option value="name-asc">Name: A–Z</option>
        </select>
      </div>
    </div>
  );
};

export default PlanTabs;

