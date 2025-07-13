const { expect } = require("@playwright/test");
class HomePage {
  constructor(page) {
    this.page = page;
    this.menu = "//img[@alt='menu']";
    this.signout = "//button[text()='Sign out']";
    this.manage = "//span[text() = 'Manage']";
  }

  async veifyManageOption() {
    await expect(this.page.locator(this.manage)).toBeVisible();
  }

  async logoutFromApplication() {
    await this.page.click(this.menu);
    await this.page.click(this.signout);
  }
}

module.exports = HomePage;
