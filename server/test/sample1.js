var assert = require("assert");
describe("Something", function () { 

    describe("The way it smels", function () {
        it("is pungent", function () { 
            assert.ok(true);
        });
    });

    describe('Array', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                assert.equal(-1, [1, 2, 3].indexOf(5));
                assert.equal(-1, [1, 2, 3].indexOf(0));
            })
        })
    })

});