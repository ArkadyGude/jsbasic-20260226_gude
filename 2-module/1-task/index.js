function sumSalary(salaries) {
  let total = 0;
  for (key in salaries) {
    value = salaries[key];
    if (Number.isFinite(value)) {
      total += value;
    }
  }
  return total;
}
