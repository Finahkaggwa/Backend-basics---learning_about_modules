import assert from "assert";
import countAllFromTown from "../countAllFromTown.js"

describe('Test the countAllFromTown function' , function(){
    it("It should return the total of reg numbers in the list from the specified town", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });

    it("Or else it should return '0' when there is no number from the specified town", function(){
        assert.equal(0, countAllFromTown('CJ 124,CY 567,CL 345, CY 456, CL 341','CF'));
    });

});