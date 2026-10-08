"use client";

import { useWorkout } from "@/context/WorkoutContext";

const NavbarCounters = () => {
    const { todayPlan, savedWorkouts } = useWorkout();

    return (
        <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-black">
                Plan {todayPlan.length}
            </span>

            <span className="rounded-full border border-gray-600 px-2.5 py-1 text-gray-300">
                Saved {savedWorkouts.length}
            </span>
        </div>
    );
};

export default NavbarCounters;