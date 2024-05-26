const readlineSync = require("readline-sync");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const getDaysInEachMonth = (year, month) => {
  let daysStr;
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  daysStr = `${weekDays.join(" ")}\n`;

  for (let i = 0; i < firstDay; i++) {
    daysStr += "    ";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    daysStr += (day < 10 ? " " + day : day) + "  ";

    if ((day + firstDay) % weekDays.length === 0) {
      daysStr += "\n";
    }
  }

  return daysStr;
};

const displayCalendar = (year) => {
  let calendar = "";

  months.forEach((month, index) => {
    calendar += `\n${month}\n`;
    calendar += `${getDaysInEachMonth(year, index)}\n`;
  });

  console.log(calendar);
};

const init = () => {
  do {
    const year = parseInt(readlineSync.question("Enter year: "), 10);

    if (!isNaN(year)) {
      displayCalendar(year);
    } else {
      console.log("Invalid input. Please enter a valid year.");
      break;
    }
  } while (true);
};

init();
