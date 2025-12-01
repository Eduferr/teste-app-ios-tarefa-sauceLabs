import { $ } from "@wdio/globals";

class CheckoutPage {
  get btnCheckout() {
    return $(`~completeCheckout`);
  }

  get sucessMessageAndImage() {
    return $(`~transactionSuccessfulImage`);
  }

  get sucessTitle() {
    return $(
      `-ios predicate string:name == "Order Success" AND label == "Order Success" AND value == "Order Success"`
    );
  }

  async proceedToCheckout() {
    await (await this.btnCheckout).click();
  }
}

export default new CheckoutPage();
