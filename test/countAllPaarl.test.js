import assert from "assert";
import countAllPaarl from "../countAllPaarl.js"

describe('Test the countAllPaarl function' , function(){
    it("It should return the total of reg numbers from the list that start with 'CJ' ", function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it("Or else it should return '0' when there is no number starting with 'CJ' ", function(){
        assert.equal(0, countAllPaarl('GP 345 123, CK 345, L 123'));
    });

});