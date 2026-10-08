"use client";

import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const SavedWorkouts = () => {
  const { savedWorkouts, removeFromSaved } = useWorkout();

  if (savedWorkouts.length === 0) {
    return (
      <div className="rounded-2xl border border-[#25282d] bg-[#111316] px-6 py-16 text-center">
        <h2 className="font-oswald text-2xl font-semibold uppercase">
          Nothing Here Yet
        </h2>

        <p className="mx-auto mt-3 max-w-md font-inter text-sm leading-6 text-gray-400">
          Browse the library and save a workout for later.
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
      {savedWorkouts.map((workout) => (
        <div
          key={workout.id}
          className="overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316]"
        >
          <div className="relative">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-52 w-full object-cover"
            />

            <button
              type="button"
              onClick={() => removeFromSaved(workout.id)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm text-white transition hover:bg-red-500"
              aria-label={`Remove ${workout.name}`}
            >
              ×
            </button>
          </div>

          <div className="p-5">
            <h2 className="font-oswald text-2xl font-semibold uppercase">
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

            <div className="mt-5">
              <Link
                href={`/exercise/${workout.id}`}
                className="block w-full rounded-xl border border-[#30343a] px-3 py-2.5 text-center font-inter text-xs font-semibold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedWorkouts;