var name =prompt("Enter product's name:");
var quantity=prompt("Enter the quantity:");
var price=prompt("Enter the price:");
var tax=0.16;

var sum1= quantity*price;
var sum2= sum1*tax;
var total=sum2+sum1;

console.log("Product:"+name);
console.log("Quanitity: "+quantity);
console.log("Product's price: "+price);
console.log("taxes: "+tax);
console.log("Your total: "+total);