import { expect } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import browsePage from "../pageobjects/browse.page.js";
import productPage from "../pageobjects/product.page.js";
import cartPage from "../pageobjects/cart.page.js";
import addressPage from "../pageobjects/address.page.js";
import checkoutPage from "../pageobjects/checkout.page.js";

describe("Funcionalidade Checkout", async () => {
  it("Deve realizar o checkout com sucesso", async () => {
    await homePage.openMenu("Account");
    await loginPage.login("admin", "admin123");
    await homePage.openMenu("Browse");
    await browsePage.clickOnFirstProduct();
    await productPage.btnAddToCart();

    const doesNotHaveAddress = await cartPage.doesNotHaveAddres();

    if (doesNotHaveAddress) {
      await cartPage.btnAddNewAddress();
      await addressPage.addNewAddress();
    }
    await cartPage.btnContinueToPayment();
    await checkoutPage.proceedToCheckout();
    expect((await checkoutPage.sucessTitle).isDisplayed()).toBeTruthy();
    expect(
      (await checkoutPage.sucessMessageAndImage).isDisplayed()
    ).toBeTruthy();
  });
});
