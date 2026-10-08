"use client";

import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const TodayPlan = () => {
  const { todayPlan, removeFromPlan, toggleCompleted } = useWorkout();

  if (todayPlan.length === 0) {
    return (
      <div className="rounded-2xl border border-[#25282d] bg-[#111316] px-6 py-16 text-center">
        <h2 className="font-oswald text-2xl font-semibold uppercase">
          Nothing Here Yet
        </h2>

        <p className="mx-auto mt-3 max-w-md font-inter text-sm leading-6 text-gray-400">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-[#ccff00] px-5 py-3 font-inter text-sm font-semibold text-black transition hover:bg-[#b8e600] active:scale-[0.98]"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {todayPlan.map((workout) => (
        <div
          key={workout.id}
          className={`overflow-hidden rounded-2xl border bg-[#111316] transition ${
            workout.completed
              ? "border-[#ccff00]/40 opacity-70"
              : "border-[#25282d]"
          }`}
        >
          <div className="relative">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-52 w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeFromPlan(workout.id)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm text-white transition hover:bg-red-500"
              aria-label={`Remove ${workout.name}`}
            >
              ×
            </button>
          </div>

          <div className="p-5">
            <h2
              className={`font-oswald text-2xl font-semibold uppercase ${
                workout.completed ? "line-through" : ""
              }`}
            >
              {workout.name}
            </h2>

            <p className="mt-2 font-inter text-sm text-gray-400">
              {workout.equipment}
            </p>

            <div className="mt-3 flex flex-wrap gap-3 font-inter text-xs text-gray-400">
              <span>{workout.duration} min</span>
              <span>{workout.caloriesBurned} kcal</span>
              <span>★ {workout.rating}</span>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                href={`/exercise/${workout.id}`}
                className="flex-1 rounded-xl border border-[#30343a] px-3 py-2.5 text-center font-inter text-xs font-semibold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                View Details
              </Link>

              <button
                type="button"
                onClick={() => toggleCompleted(workout.id)}
                className={`flex-1 rounded-xl px-3 py-2.5 font-inter text-xs font-semibold transition ${
                  workout.completed
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
                }`}
              >
                {workout.completed ? "Completed" : "Mark as Done"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodayPlan;