function calculateInvestment()
{
    //get values from HTML input
    var initial = parseFloat(document.getElementById('initial').value);
    var interest = parseFloat(document.getElementById('interest').value);
    var time = parseFloat(document.getElementById('time').value);
    var compound = parseFloat(document.getElementById('compound').value);

    //calculate total and interest
    var total = initial * (Math.pow((1 + ((interest*.01) / compound)), (compound * time)));
    var compoundInterest = total - initial;

    //set answers in HTML to be displayed
    document.getElementById('total').innerHTML = 'Total: $' + total.toFixed(2);
    document.getElementById('compoundInterest').innerHTML = 'Compound Interest: $' + compoundInterest.toFixed(2);
}
