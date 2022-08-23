import assert from "assert";
import yearsAgo from "../yearsAgo.js"

describe('Test yearsAgo function' , function(){
    it("It should subtract the input from the current year and return the difference", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

});