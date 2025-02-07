// 1.

// function najmanjiBroj(niz) {
//   let minBroj = niz[0];
//   for (let i = 1; i < niz.length; i++) {
//     if (niz[i] < minBroj) {
//       minBroj = niz[i];
//     }
//   }
//   return minBroj;
// }

// console.log(najmanjiBroj([24, 5, 72, 21]));

// 2.

// function sumaNiza(niz) {
//   let suma = 0;
//   for (let broj of niz) {
//     suma += broj;
//   }
//   return suma;
// }

// console.log(sumaNiza([24, 5, 72, 21, 4]));

// 3.

// function proizvodNiza(niz) {
//   let proizvod = 1;
//   for (let broj of niz) {
//     proizvod *= broj;
//   }
//   return proizvod;
// }

// console.log(proizvodNiza([2, 3, 4, 5]));

// 4.

// function neparniBrojevi(a, b) {
//   neparni = [];
//   if (a < b) {
//     for (let i = a; i <= b; i++) {
//       if (i % 2 !== 0) {
//         neparni.push(i);
//       }
//     }
//   } else {
//     for (let i = b; i <= a; i++) {
//       if (i % 2 !== 0) {
//         neparni.push(i);
//       }
//     }
//   }
//   return neparni;
// }

// console.log(neparniBrojevi(5, 19));

// 5.

// function prosecnaVrednost(niz) {
//   let zbir = 0;
//   for (let broj of niz) {
//     zbir += broj;
//   }
//   return zbir / niz.length;
// }

// console.log(prosecnaVrednost([4, 3, 48, 22]));

// 6.

// function proveraOpsega(niz, donjaGranica, gornjaGranica) {
//   for (let i = 0; i < niz.length; i++) {
//     if (niz[i] < donjaGranica || niz[i] > gornjaGranica) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(proveraOpsega([4, 13, 22, 41], 4, 44));

// // 7.
// // Tekst ovog zadatka je isti kao i za prethodni samo je naglaseno da elementi niza NISU poredjani po velicini
// // ispada da radi identicna funkcija iz prethodnog zadatka, samo je ovaj input:

// console.log(proveraOpsega([42, 13, 5, 22, 45], 2, 44));

// 8.

// function parniBrojevi(n) {
//   let niz = [];
//   for (let i = n; i <= n + 20; i++) {
//     if (i % 2 === 0 && niz.length < 10) {
//       niz.push(i);
//     }
//   }
//   return niz;
// }

// console.log(parniBrojevi(22));

// 9.

// function brojPonavljanja(niz, a) {
//   let ponavljanje = 0;
//   niz.forEach((broj) => {
//     if (broj === a) {
//       ponavljanje += 1;
//     }
//   });
//   return ponavljanje;
// }

// console.log(brojPonavljanja([2, 5, 7, 3, 2, 9, 3, 2], 3));

// 10.

// function deljiviBrojevi(niz, a) {
//   let deljiv = 0;
//   niz.forEach((broj) => {
//     if (broj % a === 0) {
//       deljiv += 1;
//     }
//   });
//   return deljiv;
// }

// console.log(deljiviBrojevi([20, 5, 7, 32, 12, 9, 3, 2], 3));

// 11.

// function indexNajmanjegBroja(niz) {
//   let index = 0;
//   for (let i = 1; i < niz.length; i++) {
//     if (niz[i] < niz[index]) {
//       index = i;
//     }
//   }
//   return index;
// }

// console.log(indexNajmanjegBroja([13, 22, 2, 19, 5]));

// 12.

// function ispisiPodElemente(dupliNiz) {
//   for (let i = 0; i < dupliNiz.length; i++) {
//     for (let p = 0; p < dupliNiz[i].length; p++) {
//       console.log(dupliNiz[i][p]);
//     }
//   }
// }

// ispisiPodElemente([
//   [3, 2, 22],
//   [5, 3, 3, 4],
//   [9, 7, 24],
// ]);

// 13.

// function sumaPodElemenata(dupliNiz) {
//   let suma = 0;
//   for (let i = 0; i < dupliNiz.length; i++) {
//     for (let p = 0; p < dupliNiz[i].length; p++) {
//       suma += dupliNiz[i][p];
//     }
//   }
//   return suma;
// }

// console.log(
//   sumaPodElemenata([
//     [3, 2, 22],
//     [5, 3, 3, 4, 11],
//     [9, 7, 24],
//   ])
// );

// 14.

// function kretanjePoNizovima(teren, koraci) {
//   let kolona = 0;
//   let red = 0;
//   for (let korak of koraci) {
//     if (korak === "down") {
//       red += 1;
//     } else if (korak === "up") {
//       red -= 1;
//     } else if (korak === "right") {
//       kolona += 1;
//     } else if (korak === "left") {
//       kolona -= 1;
//     }
//   }
//   return teren[red][kolona];
// }

// console.log(
//   kretanjePoNizovima(
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [13, 14, 15, 16],
//     ],
//     ["down", "down", "right", "down"]
//   )
// );

// 15.

// function kretanjePoNizovima(teren, koraci) {
//   let kolona = 0;
//   let red = 0;
//   let brojRedova = teren.length;
//   let brojKolona = teren[0].length;

//   for (let korak of koraci) {
//     switch (korak) {
//       case "down":
//         if (red < brojRedova - 1) {
//           red += 1;
//         } else {
//           red = 0;
//         }
//         break;
//       case "up":
//         if (red > 0) {
//           red -= 1;
//         } else {
//           red = brojRedova - 1;
//         }
//         break;
//       case "right":
//         if (kolona < brojKolona - 1) {
//           kolona += 1;
//         } else {
//       kolona = 0;
//     }
//     break;
//   case "left":
//     if (kolona > 0) {
//       kolona -= 1;
//     } else {
//       kolona = brojKolona - 1;
//     }
//     break;
//   default:
//     return "Pogresna vrednost";
//     }
//   }
//   return teren[red][kolona];
// }

// console.log(
//   kretanjePoNizovima(
//     [
//       [1, 2, 3, 4],
//       [5, 6, 7, 8],
//       [9, 10, 11, 12],
//       [13, 14, 15, 16],
//     ],
//     ["down", "down", "right", "down", "down", "left", "left"]
//   )
// );

// 16.

// function indexNajmanjegBroja(niz) {
//   let index = 0;

//   for (let i = 1; i < niz.length; i++) {
//     if (niz[i] < niz[index]) {
//       index = i;
//     }
//   }
//   return index;
// }

// function redjanjePoVelicini(niz) {
//   let originalniNiz = niz;
//   let noviNiz = [];
//   while (originalniNiz.length > 0) {
//     let minIndex = indexNajmanjegBroja(originalniNiz);
//     noviNiz.push(originalniNiz[minIndex]);
//     originalniNiz.splice(minIndex, 1)[0];
//   }
//   return noviNiz;
// }

// console.log(redjanjePoVelicini([13, 22, 42, 19, 5]));

// 17.

// function najbliziBrojevi(niz) {
//   let najbliziPar = [];
//   let najmanjaRazlika = Infinity;
//   for (let i = 0; i < niz.length - 1; i++) {
//     let razlika = Math.abs(niz[i] - niz[i + 1]);
//     if (razlika < najmanjaRazlika) {
//       najmanjaRazlika = razlika;
//       najbliziPar = [niz[i], niz[i + 1]];
//     }
//   }
//   return najbliziPar;
// }

// console.log(najbliziBrojevi([6, 10, 13, 18, 16, 3]));

// 18.

// function brojPonavljanja(a1, a2) {
//   let a3 = [];
//   for (let i = 0; i < a2.length; i++) {
//     let zbir = 0;
//     for (let j = 0; j < a1.length; j++) {
//       if (a2[i] === a1[j]) {
//         zbir += 1;
//       }
//     }
//     a3.push(zbir);
//   }
//   return a3;
// }

// console.log(brojPonavljanja([4, 1, 5, 1, 6, 2, 7, 1], [4, 3, 2, 1]));
