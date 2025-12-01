import { $, $$ } from "@wdio/globals";

class BrowsePage {
  get products() {
    return $$(`-ios predicate string:name == "productDetails"`);
  }

  async clickOnFirstProduct() {
    await (await this.products).at(0).click();
  }
}

export default new BrowsePage();
