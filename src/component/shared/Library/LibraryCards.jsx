import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Librarydetails = ({ workout }) => {
    return (
        <Link
            key={workout.id}
            href={`/workout/${workout.id}`}
            className="group"
        >
            <article className="overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316] transition hover:border-[#ccff00]/40">

                {/* Image */}
                <div className="relative overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={740}
                        height={450}
                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full border border-[#30343a] px-3 py-1 font-inter text-xs uppercase text-gray-400"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h3 className="mt-4 font-oswald text-2xl font-semibold uppercase">
                        {workout.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-2 font-inter text-sm text-gray-400">
                        {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 flex items-center justify-between border-t border-[#25282d] pt-4">

                        <span className="font-inter text-sm text-gray-400">
                            ⏱ {workout.duration} min
                        </span>

                        <span className="font-inter text-sm text-gray-400">
                            🔥 {workout.caloriesBurned} kcal
                        </span>

                        <span className="font-inter text-sm text-gray-400">
                            ★ {workout.rating}
                        </span>

                    </div>

                </div>
            </article>
        </Link>
    );
};

export default Librarydetails;