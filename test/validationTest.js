const chai = require('chai');
const validation = require("../validation")

chai.should()
describe("Validation File", () => {
  describe("Validation Main File", () => {
    it("Check If It returns An Object", (done) => {
      validation.should.be.an('object')
        done()
    })
  })
  describe("validation registerValidation Function", () => {
      it("Check If It A Function", (done) => {
        chai.assert.isFunction(validation.registerValidation, "Its Not A Function")
        done()
      })
  })
  describe("validation clientProfileValidation Function", () => {
      it("Check If It A Function", (done) => {
        chai.assert.isFunction(validation.clientProfileValidation, "Its Not A Function")
        done()
      })
  })
})
