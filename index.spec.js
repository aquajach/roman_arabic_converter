const expect = require("chai").expect
import romanArabicConvert from "./index"

describe("Roman-Arabic Converter", function () {
  it("returns no error from the function", function() {
    expect(romanArabicConvert).not.to.throw(Error)
  })

  it("returns I for 1", function() {
    expect(romanArabicConvert(1)).to.eql("I")
  })

  it("returns II for 2", function() {
    expect(romanArabicConvert(2)).to.eql("II")
  })

  it("returns III for 3", function() {
    expect(romanArabicConvert(3)).to.eql("III")
  })

  it("returns IV for 4", function() {
    expect(romanArabicConvert(4)).to.eql("IV")
  })

  it("returns V for 5", function() {
    expect(romanArabicConvert(5)).to.eql("V")
  })

  it("returns VI for 6", function() {
    expect(romanArabicConvert(6)).to.eql("VI")
  })

  it("returns X for 10", function() {
    expect(romanArabicConvert(10)).to.eql("X")
  })
})