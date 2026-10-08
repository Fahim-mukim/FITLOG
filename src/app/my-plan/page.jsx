"use client";

import { useSearchParams } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";

const MyPlan = () => {
  const searchParams = useSearchParams();
  const { todayPlan, savedWorkouts } = useWorkout();

  const activeTab = searchParams.get("tab") === "saved" ? "saved" : "today";

  const workouts = activeTab === "today" ? todayPlan : savedWorkouts;

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="mb-8">
        <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00]">
          WORKOUT COLLECTION
        </p>

        <h1 className="mt-2 font-oswald text-4xl font-bold uppercase sm:text-5xl">
          My Plan
        </h1>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex gap-3">
        <Link
          href="/my-plan?tab=today"
          className={`rounded-xl px-5 py-3 font-inter text-sm font-semibold transition ${
            activeTab === "today"
              ? "bg-[#ccff00] text-black"
              : "border border-[#30343a] text-gray-400 hover:border-[#ccff00] hover:text-white"
          }`}
          
        >
          Today's Plan
        </Link>

        <Link   
          href="/my-plan?tab=saved"
          className={`rounded-xl px-5 py-3 font-inter text-sm font-semibold transition ${
            activeTab === "saved"
              ? "bg-[#ccff00] text-black"
              : "border border-[#30343a] text-gray-400 hover:border-[#ccff00] hover:text-white"
          }`}
        >
          Saved
        </Link>
      </div>

      {/* Temporary workout list */}
      {workouts.length === 0 ? (
        <div className="rounded-2xl border border-[#25282d] bg-[#111316] p-8 text-center">
          <p className="font-inter text-gray-400">
            {activeTab === "today"
              ? "No workouts added to today's plan yet."
              : "No saved workouts yet."}
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316]"
            >
              <Image    
                src={workout.image}
                alt={workout.name}
                width={400}
                height={200}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="font-oswald text-2xl font-semibold uppercase">
                  {workout.name}
                </h2>

                <p className="mt-2 font-inter text-sm text-gray-400">
                  {workout.duration} min · {workout.caloriesBurned} kcal
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlan;