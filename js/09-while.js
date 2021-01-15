'use strict'

// bucle while

var year = 2021;

// while (year <= 2051) {
//     // ejecuta esto
//     console.log("estamos en el año " + year);

//     year++;
// }

while (year != 1991) {
    // ejecuta esto
    console.log("estamos en el año " + year);

    if (year == 2000) {
        break;
    }

    year--;
}

// do while

var years = 30;

do {
    alert("solo cuando sea diferente de 20");
    years --;
} while (years > 25)
