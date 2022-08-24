export default function totalPhoneBill(billString) {
    var theBill = billString.split(',');
    var call = 2.75;
    var sms = 0.65;
    var totalBill = 0;
    for (var i = 0; i < theBill.length; i++) {
        var myBill = theBill[i].trim();
        if (myBill.startsWith('call')) { totalBill += call }
        else if (myBill.startsWith('sms')) { totalBill += sms }
    }
    return 'R' + totalBill.toFixed(2)
}