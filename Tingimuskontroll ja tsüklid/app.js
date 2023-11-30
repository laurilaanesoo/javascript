// Ülesanne 5 temperatuur
let temperatuur = 22; // Saadud temperatuur

if (temperatuur > 25) {
  console.log("Väga kuum ilm!");
} else if (temperatuur >= 15 && temperatuur <= 25) {
  console.log("Mõnus temperatuur");
} else {
  console.log("Jahe ilm");
}

// Ülesanne 5: kasutaja nimekontroll

let kasutajanimi = prompt("Sisestage oma kasutajanimi:");

if (kasutajanimi === "admin") {
  console.log("Tere, administraator!");
} else {
  console.log("Tere, külaline!");
}

window.onload = function() {
  // Ülesanne 5 - ürituse pileti hind
  let piletituup = prompt("Sisestage piletitüüp (taispilet/sooduspilet):");
  let vanus = parseInt(prompt("Sisestage oma vanus:"));
  let piletiHind = 0;

  if (piletituup === "taispilet") {
    if (vanus < 18) {
      piletiHind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
      piletiHind = 20;
    } else if (vanus >= 65) {
      piletiHind = 15;
    } else {
      console.log("Vigane sisend");
      return;
    }
  } else if (piletituup === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
      piletiHind = 8;
    } else if (vanus >= 18 && vanus <= 64) {
      piletiHind = 15;
    } else {
      console.log("Vigane sisend");
      return;
    }
  } else {
    console.log("Vigane sisend");
    return;
  }

  if (piletiHind > 0) {
    console.log(`Pileti hind: ${piletiHind} eurot`);
  } else {
    console.log("Piletihinda ei saa arvutada");
  }
};


const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

products.forEach((product, index) => {
  console.log(`${index + 1}. ${product}`);
});


//Ülesanne 6 - positiivne võ negatiivne

function positiivneVoiNegatiivne(number) {
    switch (true) {
      case number > 0:
        console.log("Positiivne number.");
        break;
      case number < 0:
        console.log("Negatiivne number.");
        break;
      default:
        console.log("Null või 0.");
    }
  }
  
  positiivneVoiNegatiivne(5); // Positiivne number
  positiivneVoiNegatiivne(-3); // Negatiivne number
  positiivneVoiNegatiivne(0); // Null või 0
  
  // Ülesanne 6 - Restoran

  // Küsi broneeringu arvu kasutajalt
var broneeringuArv = parseInt(prompt("Sisestage broneeringu arv:"));

// Initsialiseeri teade muutuja
var teade;

// Kasuta switch-case, et määrata laua suurus vastavalt broneeringu arvule
switch (true) {
  case broneeringuArv >= 1 && broneeringuArv <= 2:
    teade = "Valige laud kahele inimesele.";
    break;
  case broneeringuArv >= 3 && broneeringuArv <= 4:
    teade = "Valige laud neljale inimesele.";
    break;
  case broneeringuArv >= 5 && broneeringuArv <= 6:
    teade = "Valige laud kuuele inimesele.";
    break;
  default:
    teade = "Valige suur laud.";
}

// Väljasta teade vastavalt broneeringule
console.log(teade);


// Ülesanne 7 - tooted

const productArray = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

let productNumber = 1;
let productsDisplayed = 0;
  
for (const product of productArray) {
  if (productsDisplayed >= 10) {
    break;
  }
  
  if (product === "Muna" || product === "Sibul" || product === "Riis") {
    continue;
  }
  
  console.log(`Toode ${productNumber}: ${product}`);
  productNumber++;
  productsDisplayed++;
}
  

  // Ülesanne 7 - temperatuurid

  const temperatures = [
    [5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
    [1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
    // Lisa siia ülejäänud kuude andmed
  ];
  
  const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember";
  const monthNames = months.split(", ");
  
  let highestMonth = "";
  let highestTemperature = -Infinity;
  let lowestMonth = "";
  let lowestTemperature = Infinity;
  
  for (let i = 0; i < temperatures.length; i++) {
    const monthlyTemperatures = temperatures[i];
    const averageTemperature = monthlyTemperatures.reduce((acc, temp) => acc + temp, 0) / monthlyTemperatures.length;
  
    console.log(`Kuu ${monthNames[i]} keskmine temperatuur: ${averageTemperature.toFixed(2)}°C`);
  
    if (averageTemperature > highestTemperature) {
      highestTemperature = averageTemperature;
      highestMonth = monthNames[i];
    }
  
    if (averageTemperature < lowestTemperature) {
      lowestTemperature = averageTemperature;
      lowestMonth = monthNames[i];
    }
  }
  
  console.log(`Kõrgeim keskmine temperatuur oli kuus "${highestMonth}" ja see oli ${highestTemperature.toFixed(2)}°C.`);
  console.log(`Madalaim keskmine temperatuur oli kuus "${lowestMonth}" ja see oli ${lowestTemperature.toFixed(2)}°C.`);
  

  // Ülesanne 8 
// Algne mündimassiiv
var mündid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

// Uus massiiv mündi tükkide jaoks
var mündidTukkideks = [];

// Summaarne väärtus
var summa = 0;

// Loendur mündi tükkide arvu jaoks
var tükkideArv = 0;

// Tsükkel, mis töötab seni, kuni algses mündimassiivis on veel mündid
while (mündid.length > 0) {
  var mündiVäärtus = mündid.pop();
  mündidTukkideks.push(mündiVäärtus); // Lisa mündid uude massiivi
  tükkideArv++;
  summa += mündiVäärtus;
}

// Väljund - tükkide arv ja summa
console.log("Said " + tükkideArv + " münti.");
console.log("Müntide summa: " + summa);
console.log(mündidTukkideks);
