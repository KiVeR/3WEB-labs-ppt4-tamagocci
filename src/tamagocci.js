define('Tamagocci', [],function () {
  // Forces the JavaScript engine into strict mode
  "use strict";

  function Tamagocci() {
    this.weight = 5;
    this.happiness = 5;
    this.age = 0;
    this.minWeight = 1;
    this.maxWeight = 10;
  }
  Tamagocci.prototype.eat = function(){
    this.weight += 2;
  };

  Tamagocci.prototype.play = function(){
    this.weight -= 1;
    this.happiness += 1;
  };

  Tamagocci.prototype.becomeOlder = function(){
    this.age += 1;
    this.minWeight += 1;
    this.maxWeight += 1;
    this.happiness -= 1;
  };

  Tamagocci.prototype.isDead = function(){
    if(this.weight == this.minWeight - 1){
      return true;
    }
    if(this.weight == this.maxWeight + 1){
      return true;
    }
    if(this.happiness == 0) {
      return true;
    }
    return false;
  };

  Tamagocci.prototype.getPicture = function(){
    if (this.happiness < 3 && this.happiness > 0 || this.weight == this.maxWeight - 2 || this.weight == this.minWeight + 2) {
      return 'pk_bad.gif';
    }
    if(this.happiness == 0){
      return 'pk_dead.gif';
    }
    return 'pk_good.gif';
  }

  return Tamagocci;
});
