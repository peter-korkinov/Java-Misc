
document.querySelectorAll('button').forEach(item => {item.addEventListener('click', buts)});

let calcScreen = document.querySelector('input');
calcScreen.value = '';

let result = [];

function buts() {
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
    '0': () => {
      if (calcScreen.value !== '') {
        calcScreen.value += '0'
      }
    },
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
        process();
        result.push('subtract');
        calcScreen.value = '';
      }
    },
    '+': () => {
      if (calcScreen.value) {
        process();
        result.push('add');
        calcScreen.value = '';
      }
    },
    '*': () => {
      if (calcScreen.value) {
        process();
        result.push('multiply');
        calcScreen.value = '';
      }
    },
    '/': () => {
      if (calcScreen.value) {
        process();
        result.push('divide');
        calcScreen.value = '';
      }
    },
    '=': () => {
      if (calcScreen.value) {
        process();
        calcScreen.value = result[0];
        result = [];
      }
    },
    'C': () => calcScreen.value = '',
    'CE': () => {
      calcScreen.value = '';
      result = [];
    }
  }

  function isCompleteExpression() {
    return result.length === 3;
  }

  function expressionHandler() {
    let [value1, operation, value2] = result;
    value1 = Number(value1);
    value2 = Number(value2);

    return mathOperations(value1, value2, operation);
  }

  function mathOperations(a, b, oper) {
    const operations = {
      add: () => a + b,
      subtract: () => a - b,
      multiply: () => a * b,
      divide: () => a / b
    };

    return operations[oper]();
  }

  function calculate() {
    let temp = expressionHandler();
    result = [];
    result.push(temp);
  }

  function process() {
    result.push(calcScreen.value);
    if (isCompleteExpression()) {
      calculate();
    }
  }

  let temp = this.textContent;
  inputs[temp]();
}