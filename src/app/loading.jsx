
const Loading = () => {
    return (
        <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
            {/* Animated Spinner */}
            <div className="relative flex h-16 w-16 items-center justify-center">
                <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-[#25282d] border-t-[#ccff00]" />

                <div className="h-3 w-3 animate-pulse rounded-full bg-[#ccff00]" />
            </div>

            <h2 className="mt-6 font-oswald text-2xl font-semibold uppercase text-white">
                Preparing Your Workout
            </h2>

            <p className="mt-2 font-inter text-sm text-gray-400">
                Loading workouts...
            </p>

            {/* Skeleton Cards */}
            <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="animate-pulse overflow-hidden rounded-2xl border border-[#25282d] bg-[#111316]"
                    >
                        <div className="h-40 bg-[#25282d]" />

                        <div className="space-y-3 p-4">
                            <div className="h-3 w-1/3 rounded bg-[#30343a]" />
                            <div className="h-5 w-3/4 rounded bg-[#25282d]" />
                            <div className="h-3 w-1/2 rounded bg-[#25282d]" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Loading;

