"use client";

import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const NavbarCounters = () => {
  const { todayPlan, savedWorkouts } = useWorkout();

  return (
    <div className="flex items-center gap-3 text-xs">
      <Link
        href="/my-plan?tab=today"
        className="rounded-full bg-[#ccff00] px-2.5 py-1 text-black transition hover:bg-[#b8e600] active:scale-[0.97]"
      >
        Plan {todayPlan.length}
      </Link>

      <Link
        href="/my-plan?tab=saved"
        className="rounded-full border border-gray-600 px-2.5 py-1 text-gray-300 transition hover:border-[#ccff00] hover:text-[#ccff00] active:scale-[0.97]"
      >
        Saved {savedWorkouts.length}
      </Link>
    </div>
  );
};

export default NavbarCounters;