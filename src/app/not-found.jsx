
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-2xl border border-[#25282d] bg-[#111316] px-6 py-12 text-center sm:px-10">
        <p className="font-inter text-sm font-semibold uppercase tracking-[0.25em] text-[#ccff00]">
          FITLOG — ERROR 404
        </p>

        <h1 className="mt-4 font-oswald text-7xl font-bold text-white sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 font-oswald text-2xl font-semibold uppercase text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-sm font-inter text-sm leading-6 text-gray-400">
          The page you are looking for does not exist or may have been moved.
          Let's get you back to your workout.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-[#ccff00] px-6 py-3 font-inter text-sm font-semibold text-black transition hover:bg-[#b8e600]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
