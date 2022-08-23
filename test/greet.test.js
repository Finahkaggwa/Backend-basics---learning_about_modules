import assert from "assert";
import greet from "../greet.js"

describe('Test my greet function' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob' ", function(){
        assert.equal(greet('Bob'),'Hello, Bob');
    });
    
    it("It should return 'Hello, Amitah' when called with 'Amitah' ", function(){
        assert.equal(greet('Amitah'),'Hello, Amitah');
    });

});
