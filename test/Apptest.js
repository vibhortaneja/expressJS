/*var request = require('supertest')*/
let assert = require('chai').assert
let supertest = require('supertest')
let express = require('express')
let app = require("../app")

var url = supertest("http://localhost:3000")

describe("Testing the multiply route", function(err) {
    it("should multiply the value", function(done) {
        url
            .post("/opp/multiply/5/6")
            .end(function(err, res) {
                if (err) {
                    throw err
                }

                assert.equal(res.text, 30)
                done()

            })
    })
})

it("should multiply the value", function(done) {
    url
        .post("/opp/add/5/6")
        .end(function(err, res) {
            if (err) {
                throw err
            }

            assert.equal(res.text, 11)
            done()
        })
})