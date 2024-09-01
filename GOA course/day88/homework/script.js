// function getCurrentDateTime() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const day = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
// }

// console.log(getCurrentDateTime());

// function dateDifference(date1, date2) {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
//     const timeDifference = Math.abs(d2 - d1);
//     const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//     return dayDifference;
// }

// console.log(dateDifference("2024-01-01", "2024-01-10"));


// function addDaysToDate(date, days) {
//     const resultDate = new Date(date);
//     resultDate.setDate(resultDate.getDate() + days);
//     const year = resultDate.getFullYear();
//     const month = String(resultDate.getMonth() + 1).padStart(2, '0');
//     const day = String(resultDate.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// console.log(addDaysToDate("2024-01-01", 10));


// function getDayOfWeek(date) {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayIndex = new Date(date).getDay();
//     return daysOfWeek[dayIndex];
// }

// console.log(getDayOfWeek("2024-01-01"));




