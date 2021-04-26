const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');

chai.should()
chai.use(chaiHttp);

describe("API ROUTES", () => {
  describe("POST /api/user/login", () => {
    it("Check If It Works Correctly", (done) => {
      chai.request(server)
          .post("/api/user/login")
          .end((err, response) => {
            response.should.have.status(200)
          })
        done()
    })
  })
  describe("POST /api/user/fuelQuote", () => {
    it("Check If It Works Correctly", (done) => {
      chai.request(server)
          .post("/api/user/fuelQuote")
          .end((err, response) => {
            response.should.have.status(200)
          })
        done()
    })
  })
  // describe("POST /api/:userID/client-profile", () => {
  //   it("Check If It Works Correctly", (done) => {
  //     chai.request(server)
  //         .post("/api/:userID/client-profile")
  //         .end((err, response) => {
  //           response.should.have.status(200)
  //         })
  //       done()
  //   })
  // })
})

describe("MAIN ROUTES", () => {
  describe("GET /", () => {
    it("Check If It Works Correctly", (done) => {
      chai.request(server)
          .get("/")
          .end((err, response) => {
            response.should.have.status(200)
          })
        done()
    })
  })
  describe("POST /register", () => {
    it("Check If It Works Correctly", (done) => {
      chai.request(server)
          .post("/register")
          .end((err, response) => {
            response.should.have.status(200)
          })
        done()
    })
  })
  // describe("POST /api/:userID/client-profile", () => {
  //   it("Check If It Works Correctly", (done) => {
  //     chai.request(server)
  //         .post("/api/:userID/client-profile")
  //         .end((err, response) => {
  //           response.should.have.status(200)
  //         })
  //       done()
  //   })
  // })
})
