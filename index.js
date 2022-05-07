function calculateSupply(age, amount) {
    var age = document.getElementById("age").value;
    var amount = document.getElementById("amount").value;
    var maxAge = 100;
    var amountTotal = (amount * 365)
    var ageTotal = (maxAge - age)

    document.getElementById("result").innerHTML = "You will need to eat " + amountTotal + " times a year to last you until the ripe old age of " + ageTotal + ".";
}
