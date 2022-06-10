function myBeer() {
    var my = (function (beer) { });
    my.brand = 'Beer Kitchen';
    my.brew = function () { };
    return my;
}
var brewedBeer = myBeer();
brewedBeer('My First Beer');
console.log(brewedBeer('hello'));
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
console.log(brewedBeer);
