
//Ülessanne 9 
// Erinevad funktsioonid


function Funktsioon() {
    console.log("Lauri funktsioon");
  }
  
  Funktsioon();

const noolFunktsioon = () => {
    console.log("Lauri noolfunktsioon")
}

  noolFunktsioon();


// Argumendiga funktsioon

function kuupaevEesti() {

    var kuupaev = new Date();
  
    // kuud
    var kuudeNimed = [
      "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
      "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
  

    var paev = kuupaev.getDate();
    var kuu = kuupaev.getMonth();
    var aasta = kuupaev.getFullYear();
  
    // kuupäeva kuvamine
    console.log(`Täna on ${paev} ${kuudeNimed[kuu]} ${aasta}`);
  }
  
  // funktsiooni väljakutsumine
  kuupaevEesti();

// Teadmata hulk

function arvudekeskmine(arvudeArv) {
    var summa = 0;
    var min = 10; // min
    var max = 100; // max
  
    for (var i = 0; i < arvudeArv; i++) {
      var juhuslikTaisarv = Math.floor(Math.random() * (max - min + 1)) + min; // random arvud
      summa += juhuslikTaisarv;
    }
  
    var keskmine = arvudeArv > 0 ? Math.floor(summa / arvudeArv) : 0; // ümardamine
  
    return { koguarv: summa, keskmine: keskmine };
  }
  
  // arvude keskmine
  var tulemus = arvudekeskmine(5); 
  console.log("Koguarv: " + tulemus.koguarv);
  console.log("Keskmine: " + tulemus.keskmine);
  
  // Salajane sõnum

  const salajaneSonum = (sonum) => {
    // asendab täishäälikud tärnidega
    const asendaTaishaalikud = (tekst) => {
      const taishaalikud = "aeiouAEIOU";
      let uusTekst = "";
      for (let i = 0; i < tekst.length; i++) {
        if (taishaalikud.includes(tekst[i])) {
          uusTekst += "*";
        } else {
          uusTekst += tekst[i];
        }
      }
      return uusTekst;
    };
  
    const salajaneTekst = asendaTaishaalikud(sonum);
    return salajaneTekst;
  };
  
  // kasutaja sisendi küsimine
  const sisend = prompt("Sisestage sõnum:");
  const salajane = salajaneSonum(sisend);
  
  console.log("Salajane sõnum:", salajane);
  
  // Unikaalsed nimed

  const unikaalsednimed = (nimemassiiv) => {
    const unikaalsedNimed = [];
    const nimedeHoidla = {};
  
    for (const nimi of nimemassiiv) {
      if (!nimedeHoidla[nimi]) {
        nimedeHoidla[nimi] = true;
        unikaalsedNimed.push(nimi);
      }
    }
  
    return unikaalsedNimed;
  };
  
  const algneMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  const unikaalsedNimed = unikaalsednimed(algneMassiiv);
  
  console.log("Unikaalsed nimed:", unikaalsedNimed);
  

// Ülesanne 10

// loome toote objekti
const toode = {
  nimetus: 'Piim',
  hind: 3.60,
  kogus: 2,
  koguhind: function () {
    return this.hind * this.kogus;
  },
  muudaKogust: function (uusKogus) {
    this.kogus = uusKogus;
  },
  kuvamine: function () {
    console.log(`Toode: ${this.nimetus}, Hind: ${this.hind} EUR, Kogus: ${this.kogus}`);
  }
};

// kuvame toote omadused
toode.kuvamine();

// loome ostukorvi objekti
const ostukorv = {
  tooted: [
    { nimi: 'Piim', hind: 3.60, kogus: 2 },
    { nimi: 'Leib', hind: 2.00, kogus: 1 },
    { nimi: 'Munad', hind: 1.50, kogus: 6 },
    { nimi: 'Juust', hind: 4.20, kogus: 1 },
    { nimi: 'Tomatid', hind: 2.30, kogus: 3 },
  ],
  koguSumma: function () {
    let summa = 0;
    for (const toode of this.tooted) {
      summa += toode.hind * toode.kogus;
    }
    return summa;
  },
  kuvamine: function () {
    for (const toode of this.tooted) {
      console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
    }
  },
  lisaToode: function (nimi, hind, kogus) {
    this.tooted.push({ nimi, hind, kogus });
  }
};

// väljund
ostukorv.kuvamine();

// lisamine
ostukorv.lisaToode('Kohv', 5.80, 2);

// kogusumma
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());


// Ülesanne 11

const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// e-post
function looEpost(nimi) {
  const osad = nimi.split(" ");
  const eesnimi = osad[0];
  const perenimi = osad[1].charAt(0).toUpperCase() + osad[1].slice(1).toLowerCase(); // Teisendame perenime suure algustähega ja ülejäänud väiketähtedeks
  const epost = `${perenimi}@metshein.com`;
  return epost;
}

// täisnime otsimine
function otsiNimi(nimi, nimedeMassiiv) {
  const korrektsedNimed = nimedeMassiiv.map(n => n.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(" "));
  const indeks = korrektsedNimed.indexOf(nimi);
  if (indeks !== -1) {
    console.log("Leitud nimi:", nimedeMassiiv[indeks]);
  } else {
    console.log("Nime ei leitud.");
  }
}

// e-post kuvamine
const korrektsedNimed = nimed.map(n => n.split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(" "));
const epostiAadressid = korrektsedNimed.map(n => looEpost(n));

console.log("Korrektsed nimed:", korrektsedNimed);
console.log("E-posti aadressid:", epostiAadressid);

// otsimine
otsiNimi("Jaan Jõesaar", korrektsedNimed);
otsiNimi("Kadi Kask", korrektsedNimed);
otsiNimi("Mati Murakas", korrektsedNimed);


const inimesteAndmed = [
  { nimi: "Mari Maasikas", isikukood: "38705123568" },
  { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
  { nimi: "Kristiina Kukk", isikukood: "39203029876" },
  { nimi: "Margus Mustikas", isikukood: "49807010346" },
  { nimi: "Jaak Järve", isikukood: "39504234985" },
  { nimi: "Kadi Kask", isikukood: "39811136789" },
];

// Lisa kontrollimiseks oma nimi ja isikukood
const minuNimiJaIsikukood = { nimi: "Lauri", isikukood: "50508050677" };
inimesteAndmed.push(minuNimiJaIsikukood);

// Lisa meetod, mis leiab inimeste sünniaja ja vanuse
inimesteAndmed.forEach((isik) => {
  const isikukood = isik.isikukood;
  const sünniaeg = `19${isikukood.slice(1, 3)}-${isikukood.slice(3, 5)}-${isikukood.slice(5, 7)}`;
  const sünnikuupäev = new Date(sünniaeg);
  const täna = new Date();
  const vanusAastates = täna.getFullYear() - sünnikuupäev.getFullYear();

  isik.sünniaeg = sünniaeg;
  isik.vanus = vanusAastates;
});

console.log(inimesteAndmed);


// Kaugushüpe
const opilased = [
  { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
  { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
  { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
  { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
  { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
  { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
  { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
  { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
  { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
  { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];

opilased.forEach((õpilane) => {
  const parimTulemus = Math.max(...õpilane.tulemused);
  const keskmineTulemus = (õpilane.tulemused.reduce((a, b) => a + b, 0) / õpilane.tulemused.length).toFixed(2);
  õpilane.parimTulemus = parimTulemus;
  õpilane.keskmineTulemus = keskmineTulemus;
});

console.log(opilased);
