function stringFromDate(dateString: string) {
  const date = new Date(dateString);

  const unformattedDay = date.getDate();
  const day = unformattedDay < 10 ? `0${unformattedDay}` : unformattedDay;

  const unformattedMonth = date.getMonth() + 1;
  const month = unformattedDay < 10 ? `0${unformattedMonth}` : unformattedMonth;

  const year = date.getFullYear();

  return `${day}.${month}.${year} `;
}

export { stringFromDate };
