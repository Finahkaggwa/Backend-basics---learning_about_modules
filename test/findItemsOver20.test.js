import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js"

describe('Test the findItemsOver20 function', function () {
    it("It should return all items that have a quantity higher than '20' from the list", function () {
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
       
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });

});