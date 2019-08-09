(function(win, doc) {
  'use strict';
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;

- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  /* --------------------------------------------------------------------------
  // CHALLENGE  23
  ----------------------------------------------------------------------------*/

  // Elements
  let $visor = doc.querySelector('[data-js="visor"');
  let $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  let $buttonCE = doc.querySelector('[data-js="button-ce"]');
  let $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  let $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  // Event for Buttons Numbers
  Array.prototype.forEach.call($buttonsNumbers, button => {
    button.addEventListener('click', handleClickNumber, false);
  });

  // Event for Operations Numbers
  Array.prototype.forEach.call($buttonsOperations, button => {
    button.addEventListener('click', handleClickOperations, false);
  });

  // Event for Button CE
  $buttonCE.addEventListener('click', handleClickCe, false);

  // Event for Button Equal
  $buttonEqual.addEventListener('click', handleClickEqual, false);

  /* --------------------------------------------------------------------------
  // Actions
  ----------------------------------------------------------------------------*/
  function handleClickNumber() {
    $visor.value += this.value;
  }

  // Button CE
  function handleClickCe() {
    $visor.value = 0;
  }

  // Buttons Operations
  function handleClickOperations() {
    $visor.value = removeLastItemIfIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function isLastItemAnOperation(number) {
    let operations = ['+', '-', 'x', '/'];
    let lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfIsAnOperator(number) {
    if (isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  // Button Click
  function handleClickEqual() {
    $visor.value = removeLastItemIfIsAnOperator($visor.value);
    let allValues = $visor.value.match(/\d+[+x/-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
      let firstValue = accumulated.slice(0, -1);
      let operator = accumulated.split('').pop();
      let lastValue = isLastItemAnOperation(actual);
      let lastOperator = isLastItemAnOperation(actual)
        ? actual.split('').pop()
        : '';

      switch (operator) {
        case '+':
          return Number(firstValue) + Number(lastValue) + lastOperator;
        case '-':
          return Number(firstValue) - Number(lastValue) + lastOperator;
        case 'x':
          return Number(firstValue) * Number(lastValue) + lastOperator;
        case '-':
          return Number(firstValue) - Number(lastValue) + lastOperator;
        case '/':
          return Number(firstValue) / Number(lastValue) + lastOperator;
      }
      return accumulated + actual;
    });
  }
})(window, document);
