const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("React App UI Test", function() {
  this.timeout(30000);
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function() {
    await driver.quit();
  });

  it("should load React app homepage", async function() {
    await driver.get("http://localhost:3000");
    const title = await driver.getTitle();
    expect(title).to.include("React");
  });
});
