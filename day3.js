// 1.

// const colors = ["white", "green", "red", "blue", "black"];

// console.log(
//   `The memory of that scene for me is like a frame of film forever frozen at that moment: the ` +
//     colors[2] +
//     ` carpet, the ` +
//     colors[1] +
//     ` lawn, the ` +
//     colors[0] +
//     ` house, the leaden sky. The new president and his first lady. - Richard M. Nixon`
// );

// 2.

// const colors = ["white", "green", "red", "blue", "black"];

// for (let i of colors) {
//   console.log(i);
// }

// 3.

// const meseci = [
//   "Januar",
//   "Februar",
//   "Mart",
//   "April",
//   "Maj",
//   "Jun",
//   "Jul",
//   "Avgust",
//   "Septembar",
//   "Oktobar",
//   "Novembar",
//   "Decembar",
// ];

// for (let i of meseci) {
//   console.log(i);
// }

// 4.

// const a = [1, 3, 8, 43, 21, 5];
// const b = [4, 3, 22, 65];

// if (a.length > b.length) {
//   for (let i of a) {
//     console.log(i);
//   }
// } else {
//   for (let i of b) {
//     console.log(i);
//   }
// }

// 5.

// const a = [4, 3, 12, 22, 65];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// 6.

// const a = [4, 3, 12, 22, 65];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i] + 1);
// }

// 7.

// const a = [4, 3, 12, 22, 65];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i] * 2);
// }

// 8.

// const a = [4, 3, 12, 22, 65];

// for (let i = a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }

// 9.

// const a = [4, 3, 12, 22, 65];

// for (let i = 0; i < a.length; i += 2) {
//   console.log(a[i]);
// }

// 10.

// const a = [4, 3, 12, 22, 65];
// let zbir = 0;

// for (let i of a) {
//   zbir += i;
// }

// console.log(zbir);

// 11.

// const a = [4, 3, 12, 22, 65];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i] / 2);
// }

// 12.

// const capitals = [
//   { country: "Italy", city: "Rome" },
//   { country: "Netherlands", city: "Amsterdam" },
//   { country: "Belgium", city: "Brussels" },
//   { country: "Denmark", city: "Copenhagen" },
//   { country: "Finland", city: "Helsinki" },
// ];

// for (let i of capitals) {
//   console.log(`The capital of ${i.country} is ${i.city}`);
// }

// 13.

// let prirodniBrojevi = [];

// for (let i = 0; i < 101; i++) {
//   prirodniBrojevi.push(i);
// }

// console.log(`Prirodni brojevi: ` + prirodniBrojevi);

// 14.

// let parni = [];
// let neparni = [];

// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     parni.push(i);
//   } else {
//     neparni.push(i);
//   }
// }

// console.log(
//   `Niz parnih brojeva: ` + parni + `\nNiz neparnih brojeva: ` + neparni
// );

// 15.

// const a = 4;
// const b = -11;
// let niz = [];

// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     niz.push(i);
//   }
// } else {
//   for (let i = b; i <= a; i++) {
//     niz.push(i);
//   }
// }

// console.log(
//   `Brojevi koji se nalaze u intervalu izmedju zadatih brojeva su: ` + niz
// );

// 16.

// const arr = [5, 2, 7, 11];
// const num = 6;
// let postoji = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     postoji = true;
//     console.log("Broj se nalazi u nizu");
//     break;
//   }
// }

// if (!postoji) {
//   console.log("Broj se ne nalazi u nizu");
// }

// 17.

// const niz = [22, 3, 42, 13, 77];
// let najveciBroj = 0;

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] > najveciBroj) {
//     najveciBroj = niz[i];
//   }
// }

// console.log(najveciBroj);

// 18.

// const a = [22, 3, 42, 13];
// const b = [1, 21, 4, 3];
// let zbir = a;

// for (let i = 0; i < a.length; i++) {
//   zbir[i] += b[i];
// }

// console.log(zbir);

// 19.

// const a = [
//   "Gold",
//   "Rain",
//   "World",
//   "Mouth",
//   "Leg",
//   "Hair",
//   "Eye",
//   "Nail",
//   "Nine",
//   "End",
// ];
// const b = [
//   "Zlato",
//   "Kisa",
//   "Svet",
//   "Usta",
//   "Noga",
//   "Dlaka",
//   "Oko",
//   "Nokat",
//   "Devet",
//   "Kraj",
// ];
// const c = {};

// for (let i = 0; i < a.length; ++i) {
//   c[a[i]] = b[i];
// }

// console.log(c);

// 20.

// const meseci = [
//   { mesec: "Januar", brojDana: 31 },
//   { mesec: "Februar", brojDana: 28 },
//   { mesec: "Mart", brojDana: 31 },
//   { mesec: "April", brojDana: 30 },
//   { mesec: "Maj", brojDana: 31 },
//   { mesec: "Jun", brojDana: 30 },
//   { mesec: "Jul", brojDana: 31 },
//   { mesec: "Avgust", brojDana: 31 },
//   { mesec: "Septembar", brojDana: 30 },
//   { mesec: "Oktobar", brojDana: 31 },
//   { mesec: "Novembar", brojDana: 30 },
//   { mesec: "Decembar", brojDana: 31 },
// ];

// for (let i of meseci) {
//   for (let dan = 1; dan <= i.brojDana; ++dan) {
//     console.log(`${dan}. ${i.mesec}`);
//   }
// }
