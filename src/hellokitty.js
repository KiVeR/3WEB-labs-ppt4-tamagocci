define('HelloKitty', ['Tamagocci'], function (Tamagocci) {
  "use strict";

  function HelloKitty() {
    Tamagocci.apply(this);
  }

  HelloKitty.prototype = Object.create(Tamagocci.prototype);

  HelloKitty.prototype.getPicture = function(){
    if (this.happiness < 3 && this.happiness > 0 || this.weight == this.maxWeight - 2 || this.weight == this.minWeight + 2) {
      return 'hk_bad.gif';
    }
    if(this.happiness == 0){
      return 'hk_dead.png';
    }
    return 'hk_good.gif';
  };

  return HelloKitty;
});
