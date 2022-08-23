import assert from "assert";
import transportFee from "../transportFee.js"

describe('Test the transportFee function' , function(){
    it("It should return 'R20' when input is 'morning' ", function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it("It should return 'R10' when input is 'afternoon'", function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

     it("It should return 'free' when input is 'nightshift'", function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

});