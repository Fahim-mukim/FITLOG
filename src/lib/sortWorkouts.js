
export const sortWorkouts = (workouts, sortBy) => {
  const sorted = [...workouts];

  switch (sortBy) {
    case "duration-asc":
      return sorted.sort(
        (a, b) => Number(a.duration || 0) - Number(b.duration || 0)
      );

    case "duration-desc":
      return sorted.sort(
        (a, b) => Number(b.duration || 0) - Number(a.duration || 0)
      );

    case "calories-desc":
      return sorted.sort(
        (a, b) =>
          Number(b.caloriesBurned || 0) -
          Number(a.caloriesBurned || 0)
      );

    case "rating-desc":
      return sorted.sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );

    case "name-asc":
      return sorted.sort((a, b) =>
        String(a.name || "").localeCompare(String(b.name || ""))
      );

    default:
      return sorted;
  }
};

