
document.querySelectorAll('button').forEach(item => {item.addEventListener('click', buts)});

let calcScreen = document.querySelector('textarea');
calcScreen.value = '';


function buts() {
  let result = 0;

  const inputs = {
    '1': () => calcScreen.value += '1',
    '2': () => calcScreen.value += '2',
    '3': () => calcScreen.value += '3',
    '4': () => calcScreen.value += '4',
    '5': () => calcScreen.value += '5',
    '6': () => calcScreen.value += '6',
    '7': () => calcScreen.value += '7',
    '8': () => calcScreen.value += '8',
    '9': () => calcScreen.value += '9',
    '0': () => calcScreen.value += '0',
    '+/-': () => {
      if (calcScreen.value[0] !== '-') {
      calcScreen.value = '-' + calcScreen.value;
      } else {
      calcScreen.value = calcScreen.value.slice(1);
      }
    },
    '.': () => {
      if (calcScreen.value === '') {
        calcScreen.value = '0.';
      } else if (!calcScreen.value.includes('.')){
        calcScreen.value += '.';
      }
    },
    '-': () => {
      if (calcScreen.value) {
        result -= calcScreen.value;
      }
    },
    // '+': ,
    // '*': ,
    // '/': ,
    // '=': ,
    'C': () => calcScreen.value = '',
    // 'CE':
  }

  let temp = this.textContent;
  inputs[temp]();
}