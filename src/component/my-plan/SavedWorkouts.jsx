"use client";

import Link from "next/link";
import Image from "next/image";
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
                    Save a workout from the library to find it here later.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-xl bg-[#ccff00] px-5 py-3 font-inter text-sm font-semibold text-black transition hover:bg-[#b8e600]"
                >
                    Go to workouts
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {savedWorkouts.map((workout) => (
                <article
                    key={workout.id}
                    className="flex flex-col gap-5 overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316] p-4 transition hover:border-[#3b4148] md:flex-row md:items-center md:justify-between"
                >
                    {/* LEFT SIDE: Image + Workout Information */}
                    <div className="flex min-w-0 flex-1 items-center gap-5">
                        {/* Image */}
                        <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-36">
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                width={300}
                                height={200}
                                className="h-full w-full object-cover"
                            />

                            <span className="absolute left-2 top-2 rounded-full bg-[#ccff00] px-2 py-1 font-inter text-[9px] font-bold uppercase tracking-wider text-black">
                                Saved
                            </span>
                        </div>

                        {/* Workout Information */}
                        <div className="min-w-0">
                            {/* Category */}
                            {workout.category && (
                                <span className="inline-flex rounded-full border border-[#ccff00]/20 bg-[#ccff00]/5 px-2.5 py-1 font-inter text-[9px] font-semibold uppercase tracking-wider text-[#ccff00]">
                                    {workout.category}
                                </span>
                            )}

                            {/* Name */}
                            <h2 className="mt-2 truncate font-oswald text-xl font-semibold uppercase text-white sm:text-2xl">
                                {workout.name}
                            </h2>

                            {/* Equipment */}
                            <p className="mt-1 font-inter text-xs text-gray-500">
                                {workout.equipment}
                            </p>

                            {/* Stats */}
                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                <div>
                                    <p className="font-inter text-[9px] uppercase tracking-wider text-gray-500">
                                        Duration
                                    </p>

                                    <p className="mt-0.5 font-inter text-xs font-semibold text-white">
                                        {workout.duration} min
                                    </p>
                                </div>

                                <div>
                                    <p className="font-inter text-[9px] uppercase tracking-wider text-gray-500">
                                        Calories
                                    </p>

                                    <p className="mt-0.5 font-inter text-xs font-semibold text-white">
                                        {workout.caloriesBurned} kcal
                                    </p>
                                </div>

                                <div>
                                    <p className="font-inter text-[9px] uppercase tracking-wider text-gray-500">
                                        Rating
                                    </p>

                                    <p className="mt-0.5 font-inter text-xs font-semibold text-white">
                                        ★ {workout.rating}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Actions */}
                    <div className="flex shrink-0 items-center gap-2">
                        {/* View Details */}
                        <Link
                            href={`/exercise/${workout.id}`}
                            className="rounded-lg border border-[#30343a] px-3 py-2 font-inter text-[10px] font-semibold text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                            View Details
                        </Link>

                        {/* Remove */}
                        <button
                            type="button"
                            onClick={() => removeFromSaved(workout.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#30343a] text-xs text-gray-400 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
                            aria-label={`Remove ${workout.name} from saved workouts`}
                        >
                            ✕
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default SavedWorkouts;