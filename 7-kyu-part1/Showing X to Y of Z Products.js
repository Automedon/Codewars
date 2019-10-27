var paginationText = function(pageNumber, pageSize, totalProducts) {
  return (
    "Showing " +
    ((pageNumber - 1) * pageSize + 1) +
    " to " +
    Math.min(pageSize * pageNumber, totalProducts) +
    " of " +
    totalProducts +
    " Products."
  );
};
