import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js"

describe('Test the totalPhoneBill function' , function(){
    it("It should return 'R7.45' for '2 calls and 3 sms' ", function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it("It should return 'R3.40' for '1 calls and 1 sms'", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

     it("It should return 'R1.30' for '2 sms'", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});