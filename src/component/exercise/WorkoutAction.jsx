"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const WorkoutActions = ({ workout }) => {
  const {
    todayPlan,
    savedWorkouts,
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const isInPlan = todayPlan.some((item) => item.id === workout.id);
  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isInPlan) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan!");
  };

  const handleSaveWorkout = () => {
    if (isSaved) {
      toast.info("Workout is already saved.");
      return;
    }

    saveWorkout(workout);
    toast.success("Workout saved for later!");
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAddToPlan}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-inter text-sm font-semibold  text-black transition active:scale-[0.98] ${
            isInPlan
              ? "cursor-not-allowed bg-gray-500"
              : "bg-[#ccff00] hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]"
          }`}
        >
          {isInPlan ? "Added to plan" : "Add to today's plan"}
        </button>

        <button
          type="button"
          onClick={handleSaveWorkout}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-inter text-sm font-semibold  transition active:scale-[0.98] ${
            isSaved
              ? "cursor-not-allowed border-gray-600 text-gray-500"
              : "border-[#30343a] text-white hover:border-[#ccff00] hover:text-[#ccff00]"
          }`}
        >
          {isSaved ? "Saved" : "Save for later"}
        </button>
      </div>

      <p className="mt-4 text-sm text-white">
        Plan: {todayPlan.length} | Saved: {savedWorkouts.length}
      </p>
    </div>
  );
};

export default WorkoutActions;