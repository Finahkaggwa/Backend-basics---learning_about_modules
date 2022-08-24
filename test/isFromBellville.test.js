import assert from "assert";
import isFromBellville from "../isFromBellville.js"

describe('Test the isFromBellville function' , function(){
    it("It should return 'true' when input starts with 'CY' ", function(){
        assert.equal(isFromBellville('CY 921'),true);
    });

    it("Or else it should return 'false' ", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });

});
