import assert from "assert";
import regCheck  from "../regCheck.js"

describe('Test the regCheck function' , function(){
    it("It should return 'true' when input ends with 'reg location initials' ", function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("Or else it should return 'false' when input does not ends with 'reg location initials ", function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

});
