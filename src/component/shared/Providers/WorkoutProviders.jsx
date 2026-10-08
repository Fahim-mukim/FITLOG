"use client";

import { WorkoutProvider as WorkoutContextProvider } from "@/context/WorkoutContext";

const WorkoutProvider = ({ children }) => {
  return (
    <WorkoutContextProvider>
      {children}
    </WorkoutContextProvider>
  );
};

export default WorkoutProvider;