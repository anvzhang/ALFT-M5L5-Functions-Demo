// Define the calculateTip function here
function calculateTip(billAmount, tipPrecentage) {
  return billAmount * tipPrecentage / 100;
}


// Call the calculateTip function with different values
console.log("Tip for a $50 bill with 15% tip: " + calculateTip(50, 15));
console.log("Tip for a $75 bill with 20% tip: " + calculateTip(75, 20));
console.log("Tip for a $100 bill with 18% tip: " + calculateTip(100, 18));