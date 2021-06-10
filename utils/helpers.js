const appendLeadingZeroes = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

const formatDate = (date) => {
  const newDate = new Date(date.setFullYear(date.getFullYear()));
  const formattedDate =
    appendLeadingZeroes(newDate.getDate()) +
    ` ` +
    newDate.toLocaleString("default", { month: "long" }) +
    `, ${newDate.getFullYear()}`;

  return formattedDate;
};

module.exports = { formatDate, appendLeadingZeroes };
