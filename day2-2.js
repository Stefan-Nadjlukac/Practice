// 1.

// let a = 6;
// let b = 8;

// if (a + b > 10) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// 2.

// const time = new Date();
// const currentTime = time.getHours();

// if (currentTime >= 22 || currentTime < 6) {
//   console.log("Palim bojler");
// } else {
//   console.log("Ne palim bojler");
// }

// 3.

// const value = true;

// if (typeof value === "number") {
//   console.log("Data vrednost je broj");
// } else {
//   console.log(`Data vrednost nije broj, nego je ` + typeof value);
// }

// 4.

// const date = new Date();
// const currentMonth = date.getMonth() + 1;

// if (currentMonth < 4) {
//   console.log("Trenutno je 1. kvartal i zima je");
// } else if (currentMonth >= 4 && currentMonth <= 6) {
//   console.log("Trenutno je 2. kvartal i prolece je");
// } else if (currentMonth >= 7 && currentMonth <= 9) {
//   console.log("Trenutno je 3. kvartal i leto je");
// } else {
//   console.log("Trenutno je 4. kvartal i jesen je");
// }

// 5.

// let a = 6;
// let b = 8;

// let operacija = "oduzmi";

// switch (operacija) {
//   case "saberi":
//     console.log(a + b);
//     break;
//   case "oduzmi":
//     console.log(a - b);
//     break;
//   case "pomnozi":
//     console.log(a * b);
//     break;
//   case "podeli":
//     console.log(a / b);
//     break;
//   default:
//     console.log(
//       `Prihvatljive su samo sledece operacije: "saberi", "oduzmi", "pomnozi" i "podeli"`
//     );
//     break;
// }

// 6.

// const brojBodova = 60;

// if (brojBodova >= 0 && brojBodova < 55) {
//   console.log("Ocena je: 5");
// } else if (brojBodova >= 55 && brojBodova <= 64) {
//   console.log("Ocena je: 6");
// } else if (brojBodova >= 65 && brojBodova <= 74) {
//   console.log("Ocena je: 7");
// } else if (brojBodova >= 75 && brojBodova <= 84) {
//   console.log("Ocena je: 8");
// } else if (brojBodova >= 85 && brojBodova <= 94) {
//   console.log("Ocena je: 9");
// } else if (brojBodova >= 95 && brojBodova <= 100) {
//   console.log("Ocena je: 10");
// } else {
//   console.log("Vrednost nije validna.");
// }

// 7.

// const n = 25;

// if (typeof n !== "number") {
//   console.log("Uneta vrednost nije broj");
// } else if (n % 2 === 0) {
//   console.log("n je paran broj");
// } else {
//   console.log("n je neparan broj");
// }

// 8.

// const brojGodine = 2003;

// if (typeof brojGodine !== "number") {
//   console.log("Uneta vrednost nije validna");
// } else if (brojGodine % 4 === 0) {
//   console.log("Godina je prestupna");
// } else {
//   console.log("Godina nije prestupna");
// }

// 9.

// const broj = 42;
// const brojCifara = broj.toString().replace("-", "").length;

// if (Number.isInteger(broj) && brojCifara === 1) {
//   console.log("Uneti broj je jednocifren");
// } else if (Number.isInteger(broj) && brojCifara === 2) {
//   console.log("Uneti broj je dvocifren");
// } else if (Number.isInteger(broj) && brojCifara === 3) {
//   console.log("Uneti broj je trocifren");
// } else {
//   console.log(
//     "Program podrzava samo jednocifrene, dvocifrene i trocifrene cele brojeve"
//   );
// }

// 10.

// const a = 7;
// const b = 12;
// const c = 24;

// const niz = [a, b, c];

// console.log(
//   `Najveci broj je ` + Math.max(...niz) + `, a najmanji je ` + Math.min(...niz)
// );

// 11.

// const a = 70;
// const b = 129;
// const c = 4;

// const niz = [a, b, c];

// if (a <= b && a <= c) {
//   if (b <= c) {
//     console.log(a, b, c);
//   } else {
//     console.log(a, c, b);
//   }
// } else if (b <= a && b <= c) {
//   if (a <= c) {
//     console.log(b, a, c);
//   } else {
//     console.log(b, c, a);
//   }
// } else if (c <= a && c <= b) {
//   if (a <= b) {
//     console.log(c, a, b);
//   } else {
//     console.log(c, b, a);
//   }
// }
