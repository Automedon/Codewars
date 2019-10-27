function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  var count = Object.create(null);

  collection.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}
