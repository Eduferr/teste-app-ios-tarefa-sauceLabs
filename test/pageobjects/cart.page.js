import { $ } from "@wdio/globals";

class CartPage {
  get btnSelectAddressOrContinue() {
    return $(`~selectAddressOrContinueToPayment`);
  }

  async doesNotHaveAddres() {
    const label = await (
      await this.btnSelectAddressOrContinue
    ).getAttribute("label");
    return label == "Select address";
  }

  async btnContinueToPayment() {
    await (await this.btnSelectAddressOrContinue).click();
  }

  async btnAddNewAddress() {
    await (await $(`~addNewAddress`)).click();
  }
}

export default new CartPage();
