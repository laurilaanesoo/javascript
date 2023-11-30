// Ülesanne 1

/*
Nimi: [Lauri]
Kuupäev: [11.10.2023]
Ülesande number: [Ülesanne1]
*/

// Andmete  tüüpide määramine ja väljastamine konsooli
var andmed1 = 4.2;            // number
var andmed2 = 'Will Code 4 food'; // string
var andmed3 = "123";           //  string
var andmed4 = true;            //  boolean
var andmed5 = [1, 2, 3];       //  array
var andmed6 = FALSE;           //  boolean
var andmed7 = 'true';          //  string

console.log(typeof andmed1);
console.log(typeof andmed2);
console.log(typeof andmed3);
console.log(typeof andmed4);
console.log(typeof andmed5);
console.log(typeof andmed6);
console.log(typeof andmed7);



// Ülesanne 2
let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let aeg = `${tunnid}:${minutid}:${sekundid}PM`;

console.log(aeg);


let tsitaat = "Elu on nagu jalgratas - et püsida tasakaalus, pead liikuma.";
let autor = "Albert Einstein";
let vormistatudTsitaat = `${tsitaat} - ${autor}`;

console.log(vormistatudTsitaat);


let eesnimi = "Jüri";
let perenimi = "Jurakas";
let nimetahed = `${eesnimi[0]}.${perenimi[0]}.`;

console.log(`${eesnimi} ${perenimi} nimetähed on ${nimetahed}`);


let nimiKujul = "Jurakas, Jüri";
let komaAsukoht = nimiKujul.indexOf(",");
let perenimiEraldatud = nimiKujul.slice(0, komaAsukoht);
perenimiEraldatud = perenimiEraldatud.toUpperCase();

console.log(perenimiEraldatud);
console.log("Perenime pikkus: " + perenimiEraldatud.length);


let epost = "karrolk@netlog.com";
let muudetudEpost = epost.replace("netlog.com", "gmail.com");

console.log(muudetudEpost);


let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmed = andmerida.split(",");
let ipAadress = andmed[5];
let kasutajanimi = andmed[3].split("@")[0];

console.log(`IP-aadress: ${ipAadress} ja emailist kasutajanimi: ${kasutajanimi}`);

// Ülesanne 3
let soiduKaugus = 200; // Kaugus kilomeetrites
let kiirus = 80; // Kiirus kilomeetrites tunnis
let soiduAeg = soiduKaugus / kiirus; // Arvutame sõidu aja tundides

console.log(`Sõidu aeg: ${soiduAeg} tundi`);


let postitusteArv = 137;
let postitusteLehekyljed = Math.ceil(postitusteArv / 10); // Arvutame lehekülgede arvu

let viimaseLehePostitusteArv = postitusteArv % 10; // Arvutame viimase lehe postituste arvu

console.log(`Lehekülgede arv: ${postitusteLehekyljed}`);
console.log(`Viimasel lehel postituste arv: ${viimaseLehePostitusteArv}`);


let serveriVoomus = 400; // Võimsus vattides (W)
let elektriHind = 0.0969; // Elektri hind eurodes per kilovatt-tund (kWh)

// Arvutame serveri voolutarbimise kilovatt-tundides (kWh)
let voolutarbimine = serveriVoomus / 1000;

// Arvutame serveri töökulu eurodes ühe tunni jooksul
let tookulu = voolutarbimine * elektriHind;

console.log(`Serveri töökulu ühe tunni jooksul: ${tookulu} eurot`);

// Ülesanne 4
let nadalapaevad = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];
console.log("Parandatud massiiv ja selle elemendid:");
console.log(nadalapaevad);

console.log("Massiivi suurus: " + nadalapaevad.length);

nadalapaevad.push("Laupäev", "Pühapäev");
console.log("Lisatud Laupäev ja Pühapäev:");
console.log(nadalapaevad);

nadalapaevad.sort((a, b) => b.localeCompare(a));
console.log("Sorteeritud kahanevalt:");
console.log(nadalapaevad);

console.log("Viimane element: " + nadalapaevad[nadalapaevad.length - 1]);

//
let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";

// Tükeldame sõne ja loome massiivi
let koodidArray = koodid.split(" ");
console.log(`Koodide arv: ${koodidArray.length}`);

// Leiame koodi "35482977" indeksi
let koodiIndeks = koodidArray.indexOf("35482977");
console.log(`Koodi "35482977" indeks: ${koodiIndeks}`);

// Kuvame saadud massiivist täpselt pooled elemendid
let poolMassiivist = koodidArray.slice(0, koodidArray.length / 2);
console.log(`Täpselt pooled elemendid:`);
console.log(poolMassiivist);

// Sportlaste tulemuste massiiv
let sportlased = [
  ["Alice", 25, [10.2, 9.8, 10.5]],
  ["Bob", 22, [9.5, 9.6, 9.7]],
  ["Charlie", 28, [11.1, 11.2, 11.5]]
];

// Kuvame iga sportlase nime ja parima tulemuse eraldi ridadel
console.log(`Sportlaste parimad tulemused:`);
sportlased.forEach((sportlane) => {
  let nimi = sportlane[0];
  let parimTulemus = Math.max(...sportlane[2]);
  console.log(`${nimi}: ${parimTulemus}`);
});
