import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10 sm:py-14 lg:py-16 ">
            <div className="flex items-center justify-between  overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316] p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">

                {/* Left Content */}
                <div>
                    <p className="mb-3 font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00] sm:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="font-oswald text-4xl font-bold  sm:text-4xl lg:text-4xl xl:text-5xl">
                        TRAIN WITH INTENT.<br />
                        LOG EVERY SET.
                    </h1>

                    <p className="mt-5 max-w-xl font-inter text-sm leading-6 text-gray-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today's plan, and watch the week's work add up.
                    </p>

                    <a
                        href="#library"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3 font-oswald text-sm font-semibold text-black transition hover:bg-[#b8e600] sm:px-6 sm:py-3.5"
                    >
                        BROWSE WORKOUTS
                    </a>
                </div>

                {/* Right Image */}
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src={banner}
                        alt="Workout Banner"
                        width={400}
                        height={400}


                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;