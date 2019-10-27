const findDeletedNumber = (arr, mixArr) =>
  arr.find(number => !mixArr.includes(number)) || 0;
