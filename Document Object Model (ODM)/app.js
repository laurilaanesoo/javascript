// ülesanne 12


// dokumendi loomine
var doc = document.implementation.createHTMLDocument('harjutus12');


var h1 = doc.createElement('h1');
h1.textContent = 'ostukorv';


var ul = doc.createElement('ul');
ul.id = 'ostukorv';


const tooted = [
  { nimetus: 'Piim', hind: 3.60, kogus: 2 },
  { nimetus: 'Leib', hind: 2.00, kogus: 1 },
  { nimetus: 'Munad', hind: 1.50, kogus: 6 },
  { nimetus: 'Juust', hind: 4.20, kogus: 1 },
  { nimetus: 'Tomatid', hind: 2.30, kogus: 3 },
];


tooted.forEach(function (toode) {
  var li = doc.createElement('li');
  li.textContent = `${toode.nimetus} - Hind: ${toode.hind} EUR - Kogus: ${toode.kogus}`;
  ul.appendChild(li);
});

// ostukorvi lisamine
doc.body.appendChild(h1);
doc.body.appendChild(ul);

// summa
var koguSumma = 0;
tooted.forEach(function (toode) {
  koguSumma += toode.hind * toode.kogus;
});

// p vahele lisamine
var p = doc.createElement('p');
p.textContent = `Ostukorvi kogu summa: ${koguSumma} EUR`;
doc.body.appendChild(p);


document.documentElement.innerHTML = doc.documentElement.innerHTML;
