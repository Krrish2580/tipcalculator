function calcTipAmount(){
    let billamount = document.getElementById("bill-amount").value;
    let tippercentage = document.getElementById("tip-percentage").value;
    let tipamount = document.getElementById('tip-amount').value = billamount / tippercentage;
    document.getElementById('total-billed').value = parseFloat(billamount) + parseFloat(tipamount);
}