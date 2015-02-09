define('Pikachu', ['Tamagocci'],function (Tamagocci) {
  "use strict";

  function Pikachu() {
    Tamagocci.apply(this);
  }

  Pikachu.prototype = Object.create(Tamagocci.prototype);

  return Pikachu;
});
