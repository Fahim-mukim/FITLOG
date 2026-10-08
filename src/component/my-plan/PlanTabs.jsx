import Link from "next/link";

const PlanTabs = ({ activeTab }) => {
  return (
    <div className="flex gap-2 border-b border-[#25282d]">
      <Link
        href="/my-plan?tab=today"
        className={`border-b-2 px-4 py-3 font-inter text-sm font-semibold transition ${
          activeTab === "today"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-gray-500 hover:text-white"
        }`}
      >
        Today's Plan
      </Link>

      <Link
        href="/my-plan?tab=saved"
        className={`border-b-2 px-4 py-3 font-inter text-sm font-semibold transition ${
          activeTab === "saved"
            ? "border-[#ccff00] text-[#ccff00]"
            : "border-transparent text-gray-500 hover:text-white"
        }`}
      >
        Saved
      </Link>
    </div>
  );
};

export default PlanTabs;