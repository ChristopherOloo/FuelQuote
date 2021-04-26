const chai = require('chai');
const setPricingData = require("../inputPricingData")

chai.should()
describe("inputPricingData setPricingData Function", () => {
    it("Check If It A Function", (done) => {
      chai.assert.isFunction(setPricingData, "Its Not A Function")
      done()
    })
})
