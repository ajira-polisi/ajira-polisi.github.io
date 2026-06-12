const firstNames = [
  'Amina','Baraka','Celine','Daud','Esther','Farid','Grace','Hassan',
  'Imani','Jabir','Khadija','Latifa','Mwanajuma','Nassoro','Omary',
  'Pendo','Rajabu','Safia','Tabu','Upendo','Vicky','Wema','Yusuf',
  'Zainabu','Asha','Bakari','Chausiku','Daudi','Fatuma','Godfrey',
  'Hidaya','Irene','Juma','Kulwa','Mariam','Neema','Prisca','Rehema',
  'Salim','Tatu','Violet','Willy','Yahya','Zubeda'
];
const lastNames = [
  'Juma','Mwangi','Kibona','Hassan','Makwela','Omari','Tembo','Ndege',
  'Mtoro','Suleiman','Mwamba','Kilonzo','Rashid','Mganga','Nkosi',
  'Maduka','Lupiana','Bakar','Hamisi','Kondo','Nyerere','Msangi',
  'Temu','Kimaro','Bandora','Mushi','Ngowi','Dotto','Kapinga','Makene',
  'Msuya','Lyimo','Ulimboka','Mbilinyi','Mirumbi','Mwita','Shayo',
  'Mapunda','Kaseko','Mwenda','Nkunda','Shija','Katema','Mfaume'
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const notifEl  = document.getElementById('payNotif');
const notifTxt = document.getElementById('notifText');

function showNotif() {
  const fn = pickRandom(firstNames);
  const ln = pickRandom(lastNames);
  notifTxt.innerHTML = `<b>Ndg. ${fn} ${ln}</b> Hongera, Maombi Yako Yamepokelewa, Utajulishwa Maombi Yako Yakikubaliwa`;
  notifEl.classList.add('show');
  setTimeout(() => notifEl.classList.remove('show'), 4500);
}

setTimeout(function loop() {
  showNotif();
  setTimeout(loop, 12000 + Math.random() * 10000);
}, 3000);