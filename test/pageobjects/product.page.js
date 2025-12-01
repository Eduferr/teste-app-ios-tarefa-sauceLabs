import { $ } from "@wdio/globals";

class ProductPage {
  async btnAddToCart() {
    (await $(`~${"addToCart"}`)).click();
  }
}

export default new ProductPage();
