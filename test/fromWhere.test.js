import assert from "assert";
import fromWhere from "../fromWhere.js"

describe('Test the fromWhere function' , function(){
    it("It should return 'Bellville' when input is 'CY' ", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it("It should return 'Paarl' when input is 'CJ'", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it("It should return 'Cape Town' when input is 'CA'", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

     it("Or else it should return 'Some other place!' when input isn't 'CY, CJ and CA' ", function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});