let balance = 100

const numbersContainer = document.querySelector('.numbers');
const numberSpans = numbersContainer.querySelectorAll('span')
const button = document.getElementById('spin');
const balance_number = document.getElementById('balance_number');
const symbols = [
  { symbol: "🍒", value: 20 },     // вишня — маленький выигрыш
  { symbol: "🍋", value: 30 },     // лимон — чуть больше
  { symbol: "🔔", value: 50 },     // колокол — классический символ
  { symbol: "🍀", value: 70 },     // клевер — удача
  { symbol: "💎", value: 100 },    // драгоценный камень — редкий
  { symbol: "7️⃣", value: 500 },   // семёрка — большой выигрыш
  { symbol: "💣", value: 0 },     // бомба — проигрыш (можно добавить эффект)
];
const current_symbols = [];
const index = [];
const track = [
  [],
  [],
  []
];


button.onclick = play_slot;

function play_slot() {
  if (balance >= 10) {
    updateBalance(-10);
    updateSymbols();
    //updateTrack();
    calculateWinning()
  } else {
      button.style.color = 'red';
  }
} 

function updateBalance (delta_balance) {
    balance += delta_balance;
    balance_number.innerText = balance;
}

function updateSymbols() {
  for (let i = 0; i < 3; i++) {  
    let random = Math.floor(Math.random()*symbols.length)
    numberSpans[i].innerText = symbols[random].symbol;
    current_symbols.push(random);
    index.push(random);
  }    
}


function calculateWinning() {
  let winning = 0;
  if (current_symbols[0]===current_symbols[1] && current_symbols[1]===current_symbols[2]) {
    winning = symbols[index[0]].value;      
  } else {
    winning = 0;  
  }
  current_symbols.length = 0;
  index.length = 0;
  updateBalance(winning);
}

/*function updateTrack() {
  for (let i=0; i<3; i++){
    for (let j=0; j<20; j++) {
      let random = Math.floor(Math.random()*symbols.length)
      track[i].push(symbols[random].symbol);
    }
  }
}

function createTrack() {
  for (let i=0; i<3; i++){
    let div = document.createElement('div');
    for (let j=0; j<20; j++) {
      div.innerHTML = '<div class="symbol">track[i].j</div>'    */
  
  
