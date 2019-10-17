const sequenceSum = (begin, end, step) =>
  begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
