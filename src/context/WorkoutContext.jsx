import { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
    const [todayPlan, setTodayPlan] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState([]);

    const addToPlan = (workout) => {
        setTodayPlan((prev) => {
            const alreadyAdded = prev.some((item) => item.id === workout.id);

            if (alreadyAdded) {
                return prev;
            }

            return [
                ...prev,
                {
                    ...workout,
                    completed: false,
                },
            ];
        });
    };

    const removeFromPlan = (workoutId) => {
        setTodayPlan((prev) =>
            prev.filter((workout) => workout.id !== workoutId)
        );
    };

    const toggleCompleted = (workoutId) => {
        setTodayPlan((prev) =>
            prev.map((workout) =>
                workout.id === workoutId
                    ? {
                        ...workout,
                        completed: !workout.completed,
                    }
                    : workout
            )
        );
    };

    const saveWorkout = (workout) => {
        setSavedWorkouts((prev) => {
            const alreadySaved = prev.some((item) => item.id === workout.id);

            if (alreadySaved) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    const removeFromSaved = (workoutId) => {
        setSavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== workoutId)
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                todayPlan,
                savedWorkouts,
                addToPlan,
                removeFromPlan,
                toggleCompleted,
                saveWorkout,
                removeFromSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used inside WorkoutProvider");
    }

    return context;
};