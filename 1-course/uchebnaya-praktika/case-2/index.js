const form = document.getElementById("birthdayForm");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const dateBirthday = document.getElementById("dateBirthday");
const dayOfWeekBlock = document.getElementById("dayOfWeek");
const leapYearBlock = document.getElementById("leapYear");
const ageBlock = document.getElementById("age");

const showBirthday = (event) => {
  event.preventDefault();

  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  if (!dayValue && !monthValue && !yearValue)
    return (dateBirthday.innerText = "Пожалуйста, заполните все поля.");

  dateBirthday.innerText = `Вы родились: ${dayValue.padStart(
    2,
    "0"
  )}.${monthValue.padStart(2, "0")}.${yearValue.padStart(2, "0")}`;

  showDayOfWeek();
  showLeapYear();
  calculateAge();

  printDateAsStars(dayValue, monthValue, yearValue);

  resetForm();
};

// ➔	Напишите функцию, которая определяет какому дню недели соответствует эта дата?
const showDayOfWeek = () => {
  const date = new Date(year.value, month.value, day.value);
  const dayOfWeek = daysOfWeek[date.getDay()];

  dayOfWeekBlock.innerText = `День недели:${dayOfWeek}.`;
};

// ➔	Напишите функцию, которая определяет - високосный это был год, или нет?
const showLeapYear = () => {
  const yearValue = year.value;

  if (isLeapYear(yearValue))
    return (leapYearBlock.innerText = `${yearValue} — високосный год.`);

  leapYearBlock.innerText = `${yearValue} — не високосный год.`;
};

// ➔	Напишите функцию, которая определяет сколько сейчас лет пользователю;
const calculateAge = () => {
  const dayValue = day.value;
  const monthValue = month.value - 1; // Месяцы начинаются с 0
  const yearValue = year.value;

  const today = new Date();
  const birthDate = new Date(yearValue, monthValue, dayValue);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Проверяем, был ли день рождения в этом году
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;

  ageBlock.innerText = ` Вам сейчас: ${age} лет.`;
};

const resetForm = () => {
  day.value = "";
  month.value = "";
  year.value = "";
};

form.addEventListener("submit", showBirthday);
