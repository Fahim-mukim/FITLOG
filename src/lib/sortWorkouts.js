
export const sortWorkouts = (workouts, sortBy = "duration") => {
  const sorted = [...workouts];

  switch (sortBy) {
    case "calories":
      return sorted.sort(
        (a, b) =>
          Number(b.caloriesBurned || 0) -
          Number(a.caloriesBurned || 0)
      );

    case "rating":
      return sorted.sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );

    case "duration":
    default:
      return sorted.sort(
        (a, b) => Number(a.duration || 0) - Number(b.duration || 0)
      );
  }
};
