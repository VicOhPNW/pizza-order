//Frontend Logic
$(document).ready(function() {
 $("#pizzaForm").submit(function(event) {
   event.preventDefault();

   var size = $("input:radio[name=size]:checked").val();
   var topping = $("input:checkbox[name=topping]:checked");
   var fulfillment = $("input:radio[name=fulfillment]:checked").val();

   var newPizzaOrder = new PizzaOrder(size, topping, fulfillment);

   $("#pizzaTotal").text(" $" + parseFloat(newPizzaOrder.amount()).toFixed(2));
 });
});


//Backend Logic
function PizzaOrder(size, topping, fulfillment) {
 this.size = size;
 this.toppings = topping;
 this.fulfillment = fulfillment;
}

var pizzaSize = {"small":6, "medium":8, "large":10};
var pizzaTopping = {"olives":1, "mushrooms":1, "onion":1, "sausage":1.50, "ham":1.50, "pepperoni":1.50, "ricotta":2, "artichokes":2, "chicken":2};
var pizzaFulfillment = {"delivery":3, "pick-up":0};


PizzaOrder.prototype.amount = function() {
 var toppingTotal = 0;
 for (var i = 0; i < this.toppings.length; i++) {
   toppingTotal += pizzaTopping[this.toppings[i].value];
 }
 return pizzaSize[this.size] + toppingTotal + pizzaFulfillment[this.fulfillment];
};


















// //Frontend Logic
// $(document).ready(function() {
//   $("#pizzaForm").submit(function(event) {
//     event.preventDefault();
//
//     var size = $("input:radio[name=size]:checked").val();
//     var topping = $("input:checkbox[name=topping]:checked").val();
//     var fulfillment = $("input:radio[name=fulfillment]:checked").val();
//
//     var newPizzaOrder = new PizzaOrder(size, topping, fulfillment);
//
//     $("#pizzaTotal").text(" $" + newPizzaOrder.amount());
//   });
// });
//
//
//
// //Backend Logic
// function PizzaOrder(size, toppings, fulfillment) {
//   this.size = size;
//   this.toppings = toppings;
//   this.fulfillment = fulfillment;
// }
//
// var pizzaSize = {"small":6, "medium":8, "large":10};
// var pizzaTopping = {"olives":1, "mushrooms":1, "onion":1};
// var pizzaFulfillment = {"delivery":3, "pickup":0};
//
// PizzaOrder.prototype.amount = function() {
//   return pizzaSize[this.size] + pizzaTopping[this.topping] + pizzaFulfillment[this.fulfillment];
// };
//
// PizzaOrder.prototype.toppings = function() {
//  var toppingTotal = 0;
//  for (var i = 0; i < this.toppings.length; i++) {
//    toppingTotal += pizzaTopping[this.toppings[i].value];
//
//  }
//  return pizzaSize[this.size] + toppingTotal + pizzaFulfillment[this.fulfillment];
// };
