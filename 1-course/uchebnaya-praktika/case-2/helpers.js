const isLeapYear = (year) =>
  !!((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

// ➔	Реализуйте вывод в консоль даты рождения пользователя в формате дд мм гггг, где цифры прорисованы звёздочками (*), как на электронном табло.
const printDateAsStars = (day, month, year) => {
  const dateString = `${day.toString().padStart(2, "0")} ${month
    .toString()
    .padStart(2, "0")} ${year}`;

  const lines = ["", "", "", "", ""]; // Для хранения строк вывода

  for (const char of dateString) {
    if (char === " ") {
      // Добавляем пробел между числами
      for (let i = 0; i < 5; i++) {
        lines[i] += "   ";
      }
    } else {
      const pattern = digitPatterns[char];
      for (let i = 0; i < 5; i++) {
        lines[i] += pattern[i] + " ";
      }
    }
  }

  console.log(lines.join("\n"));
};
