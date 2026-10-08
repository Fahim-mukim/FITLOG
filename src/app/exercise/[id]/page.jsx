import WorkoutActions from "@/component/exercise/WorkoutAction";
import Image from "next/image";
import { notFound } from "next/navigation";


const getWorkout = async (id) => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const workouts = await res.json();

  return workouts.find((workout) => workout.id === Number(id));
};

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={740}
            height={800}
            priority
            className="h-full min-h-[400px] w-full object-cover lg:min-h-[700px]"
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div>

          {/* Title + Description */}
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00]">
              WORKOUT DETAILS
            </p>

            <h1 className="mt-3 font-oswald text-4xl font-bold uppercase leading-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 max-w-2xl font-inter text-sm leading-6 text-gray-400 sm:text-base">
              {workout.description}
            </p>
          </div>

          {/* Category Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border bg-[#ccff00] px-3 py-1.5 font-inter text-xs font-bold uppercase text-[#000000]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= KEY SPECS ================= */}
          <section className="mt-8 overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316]">

            <div className="divide-y divide-[#25282d]">

              <div className="flex justify-between gap-5 px-5 py-3  text-gray-200 font-bold">
                <span className="font-inter text-xs uppercase">
                  Equipment
                </span>
                <span className="text-right font-inter text-sm">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Difficulty
                </span>
                <span className="font-inter text-sm ">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Sets
                </span>
                <span className="font-inter text-sm">
                  {workout.sets}
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Reps
                </span>
                <span className="font-inter text-sm">
                  {workout.reps}
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Duration
                </span>
                <span className="font-inter text-sm">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Calories
                </span>
                <span className="font-inter text-sm">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between gap-5 px-5 py-3">
                <span className="font-inter text-xs uppercase">
                  Rating
                </span>

                <span className="flex items-center gap-1 font-inter text-sm">

                  {workout.rating}
                </span>
              </div>

            </div>
          </section>

          {/* ================= INSTRUCTIONS ================= */}
          <section className="mt-8">
            <h2 className="font-inter text-2xl font-semibold ">
              INSTRUCTIONS
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-inter text-sm font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="font-inter text-sm leading-6 text-gray-400">
                    {instruction}
                  </p>

                </li>
              ))}
            </ol>
          </section>

          {/* ================= ACTION BUTTONS ================= */}
          <WorkoutActions workout={workout} />

        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;