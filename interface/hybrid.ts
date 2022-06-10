interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  let my = (function(beer: string) {}) as CraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function() {};
  return my;
}

let brewedBeer = myBeer();
brewedBeer('My First Beer');
console.log(brewedBeer('hello'));  // undefined
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
console.log(brewedBeer);