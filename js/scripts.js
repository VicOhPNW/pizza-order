//Frontend Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var topping = $("input:checkbox[name=topping]:checked").val();
    var fulfillment = $("input:radio[name=fulfillment]:checked").val();

    var newPizzaOrder = new PizzaOrder(size, topping, fulfillment);

    $("#pizzaTotal").text(" $" + (+ newPizzaOrder.amount()));
  });
});



//Backend Logic
function PizzaOrder(size, fulfillment) {
  this.size = size;
  this.toppings = [];
  this.fulfillment = fulfillment;
}

var pizzaSize = {"small":6, "medium":8, "large":10};
var pizzaTopping = {"olives":1, "mushrooms":1, "onion":1};
var pizzaFulfillment = {"delivery":3, "pickup":0};

PizzaOrder.prototype.amount = function() {
  return pizzaSize[this.size] + pizzaTopping[this.topping] + pizzaFulfillment[this.fulfillment];
};
