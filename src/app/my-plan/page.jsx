import PlanSummary from "@/component/my-plan/PlanSummary";
import PlanTabs from "@/component/my-plan/PlanTabs";
import TodayPlan from "@/component/my-plan/TodayPlan";
import SavedWorkouts from "@/component/my-plan/SavedWorkouts";

const MyPlan = async ({ searchParams }) => {
    const params = await searchParams;

    const activeTab = params?.tab === "saved" ? "saved" : "today";

    return (
        <main className="container mx-auto px-4 py-10 sm:py-14">
            {/* Header */}
            <div className="mb-8">
                <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-[#ccff00]">
                    WORKOUT LOG
                </p>

                <h1 className="mt-2 font-oswald text-4xl font-bold uppercase sm:text-5xl">
                    My Plan
                </h1>

                <p className="mt-3 max-w-xl font-inter text-sm leading-6 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <PlanSummary activeTab={activeTab} />

            {/* Tabs */}
            <div className="mt-10">
                <PlanTabs activeTab={activeTab} />
            </div>

            {/* Content */}
            <div className="mt-6">
                {activeTab === "today" ? <TodayPlan /> : <SavedWorkouts />}
            </div>
        </main>
    );
};

export default MyPlan;