import Image from "next/image";
import Link from "next/link";
import Librarydetails from "./LibraryCards";

const getWorkouts = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }

    const data = await res.json();
    return data;
};

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="container mx-auto px-4 py-12 sm:py-16">

            {/* Section Heading */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h2 className="mt-2 font-oswald text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
                        Pick Your Workout
                    </h2>
                </div>

                <p className="max-w-md font-inter text-sm leading-6 text-gray-500">
                    Choose a workout, check the details, and add it to your plan.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {workouts.map((workout) => (
                    <Librarydetails key={workout.id} workout={workout} />
                ))}

            </div>
        </section>
    );
};

export default Library;