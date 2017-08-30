let expect = require('chai').expect
/*let should = require('should')*/
let request = require('supertest')
let express = require('express')
let sinon = require('sinon')
let App = require('../app')

let model = require('../models/data')
let modelStub = sinon.stub(model, 'find')
let url = request("http://localhost:3000")
/*let server = request.agent('http://localhost/3000')*/

describe('GET /books', () => {
    it('respond with json', (done) => {

        modelStub.yields(null, [{ title: "Let us C", author: "Yashwant" }, { title: "Let us D", author: "Yashwant1" }])
        request(App)
            .get('/api')
            /*.expect('Content-Type', /json/)*/
            .end((err, res) => {
                if (err) return done(err);
                expect({ title: 'Let us C', author: 'Yashwant' }).to.deep.equal({ title: res.body[0].title, author: res.body[0].author });
                expect({ title: 'Let us D', author: 'Yashwant1' }).to.deep.equal({ title: res.body[1].title, author: res.body[1].author });
                done();
            })
    });
});

