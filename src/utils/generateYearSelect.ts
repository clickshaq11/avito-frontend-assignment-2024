function generateYearSelect(startYear: number) {
  const now = new Date().getFullYear();

  return Array(now - startYear)
    .fill(0)
    .map((_, i) => i + startYear + 1);
}

export { generateYearSelect };
