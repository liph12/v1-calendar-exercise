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

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function getDaysInEachMonth(year, month) {
  let daysStr;
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  daysStr = `${daysOfWeek.join(" ")}\n`;

  for (let i = 0; i < firstDay; i++) {
    daysStr += "    ";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    daysStr += (day < 10 ? " " + day : day) + "  ";
    if ((day + firstDay) % 7 === 0) {
      daysStr += "\n";
    }
  }

  return daysStr;
}

function displayCalendar(year) {
  let calendar = "";

  months.forEach((month, index) => {
    calendar += `\n${month}\n`;
    calendar += `${getDaysInEachMonth(year, index)}\n`;
  });

  console.log(calendar);
}

const year = parseInt(readlineSync.question("Enter year: "), 10);

if (!isNaN(year)) {
  displayCalendar(year);
} else {
  console.log("Invalid input. Please enter a valid year.");
}
