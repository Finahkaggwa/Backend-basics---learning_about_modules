import assert from "assert";
import countRegNumber from "../countRegNumber.js"

describe('Test the countRegNumber function' , function(){
    it("It should return '1' when there is only one registration number ", function(){
        var regCount = countRegNumber('CA 182736');
        assert.equal (regCount, 1);
    });

    it("It should return '3' when there are three registration numbers ", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });

});
