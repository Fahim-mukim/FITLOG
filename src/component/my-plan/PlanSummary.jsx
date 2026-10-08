"use client";

import { useWorkout } from "@/context/WorkoutContext";

const PlanSummary = ({ activeTab }) => {
  const { todayPlan, savedWorkouts } = useWorkout();

  const workouts = activeTab === "saved" ? savedWorkouts : todayPlan;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  const metrics = [
    {
      label: "Exercises",
      value: workouts.length,
    },
    {
      label: "Minutes",
      value: totalMinutes,
    },
    {
      label: "Calories",
      value: totalCalories,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-[#25282d] bg-[#111316] p-5"
        >
          <p className="font-inter text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
            {metric.label}
          </p>

          <p className="mt-2 font-oswald text-3xl font-bold text-white">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanSummary;