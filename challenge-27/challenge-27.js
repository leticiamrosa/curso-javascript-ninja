(function() {
  "use strict";
  /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

  // ?

  // construtor
  function DOM(elements) {
    this.element = this.getDOMElements(elements); // todos os elmentos do DOM selecionados
  }

  // metodo para selecionar os elementos
  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return document.querySelectorAll(elements);
  };

  // metodos
  // adiciona eventos
  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, element => {
      element.addEventListener(eventType, callback, false);
    });
  };

  // remove eventos
  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, element => {
      element.removeEventListener(eventType, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  // forEarch
  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  // map
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  // filter
  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  // reduce
  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  // reduceRight
  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  // every
  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  // some
  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  let $a = new DOM('[data-js="link"]');
  let dataJs = $a.map(item => {
    return item.getAttribute("data-js");
  });
  console.log(dataJs);

  let dataJsReduce = $a.reduce((acc, item, index) => {
    return `${acc} ${item.getAttribute("data-js")} ${index}`;
  }, 0);
  console.log(dataJsReduce);

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === "[object Array]";
  };

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === "[object String]";
  };

  DOM.isNull = function isNull(param) {
    return (
      Object.prototype.toString.call(param) === "[object Null]" ||
      Object.prototype.toString.call(param) === "[object Undefined]"
    );
  };

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === "[object Boolean]";
  };

  console.log(DOM.isArray([1, 2, 3]));
})();
