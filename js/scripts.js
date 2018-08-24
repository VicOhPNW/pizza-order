//Frontend Logic
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var topping = $
    var fulfillment = $("input:radio[name=fulfillment]:checked").val();

    var newPizzaOrder = new PizzaOrder(size, topping, fulfillment);

    $("#pizzaTotal").append(newPizzaOrder)
  });
});


//Backend Logic
function PizzaOrder(size, topping, fulfillment) {
  this.size = size;
  this.topping = topping;
  this.fulfillment = fulfillment;
}

var pizzaSize = {"small":6, "medium":8, "large":10};
var pizzaTopping = {"olives":1, "mushrooms":1, "onion":1};
var pizzaFulfillment = {"pickup":0, "delivery":3}
