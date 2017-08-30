let expect = require('chai').expect
let should = require('chai').should
let request = require('supertest')
let express = require('express')
let sinon = require('sinon')
let App = require('../app')

let model = require('../models/data')
let modelStub = sinon.stub(model, 'find')
let modelPost = sinon.stub(model.prototype, 'save')
let updateStub = sinon.stub(model, 'update');
let removeStub = sinon.stub(model, 'remove');
let url = request("http://localhost:3000")
/*let server = request.agent('http://localhost/3000')*/

describe('GET ', () => {
    it('respond with json', (done) => {
        modelStub.yields(null, [{ title: "Let us C", author: "Yashwant" }, { title: "Let us D", author: "Yashwant1" }])
        request(App)
            .get('/api')
            .end((err, res) => {
                if (err) return done(err)
                expect({ title: 'Let us C', author: 'Yashwant' }).to.deep.equal({ title: res.body[0].title, author: res.body[0].author });
                expect({ title: 'Let us D', author: 'Yashwant1' }).to.deep.equal({ title: res.body[1].title, author: res.body[1].author });
                done()
            })
    });
});

describe('POST', function() {
    before(function() {
        modelPost.yields(null, { title: "bio", author: "plant", genre: "science" })
    })
    it('checking post', (done) => {
        request(App)
            .post('/api')
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body.title).to.be.equal("bio");
                expect(res.body.author).to.be.equal("plant");
                expect(res.body.genre).to.be.equal("science");
                done();
            })
    })
})

describe('Update', () => {
    before(() => {
        updateStub.withArgs({ _id: "vibhortaneja" }, { $set: { title: "C3" } })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            });
    })
    it('respond with json', (done) => {
        console.log('inside put Test');
        request(App)
            .put('/api/update/vibhortaneja')
            .send({ title: "C3" })
            .end((err, res) => {
                if (err) return done(err);
                else {
                    //console.log(res.body);
                    expect(res.body.ok).to.be.equal(1);
                    done();
                }
            });
    });
});
describe('Remove', () => {
    before(() => {
        removeStub.withArgs({ '_id': "tanejavibhor" })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            });
    })
    it('respond with json', (done) => {
        console.log('inside delete Test');
        request(App)
            .delete('/api/delete/tanejavibhor')
            .end((err, res) => {
                if (err) return done(err);
                else {
                    //console.log(res.body);
                    expect(res.body.ok).to.be.equal(1);
                    done();
                }
            });
    });
});