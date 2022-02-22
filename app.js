function calculateInvestment() {
  //get values from HTML input
  let initial = parseFloat(document.getElementById("initial").value);
  let interest = parseFloat(document.getElementById("interest").value);
  let time = parseFloat(document.getElementById("time").value);
  let compound = parseFloat(document.getElementById("compound").value);

  //calculate total and interest
  let total =
    initial * Math.pow(1 + (interest * 0.01) / compound, compound * time);
  let compoundInterest = total - initial;

  //set answers in HTML to be displayed
  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
  document.getElementById("compoundInterest").innerHTML =
    "Compound Interest: $" + compoundInterest.toFixed(2);
}
