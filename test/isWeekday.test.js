import assert from "assert";
import isWeekday from "../isWeekday.js"

describe('Test the isWeekday function' , function(){
    it("It should return 'true' when input is part of weekdays ", function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it("Or else it should return 'false' when input isn't part of weekdays ", function(){
        assert.equal(isWeekday('Sunday'), false);
    });

});