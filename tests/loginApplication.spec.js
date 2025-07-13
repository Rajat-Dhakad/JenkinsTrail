import { test, expect } from "@playwright/test";
const LoginPage = require("../pages/loginPage");
const HomePage = require("../pages/homePage");

test("Login to Application using POM", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  const loginPage = new LoginPage(page);

  await loginPage.loginToApplication("admin@email.com", "admin@123");

  const homePage = new HomePage(page);
  await homePage.veifyManageOption();
  await homePage.logoutFromApplication();
  await loginPage.verifySignIn();
});
