import { $ } from "@wdio/globals";

class AddressPage {

  async addNewAddress() {
    await (await this.inputName).setValue("Meu Endereço");
    await (await this.inputNumber).setValue("55619876544321");
    await (await this.inputAddress).setValue("QNL 11 Bloco B");
    await (await this.inputCity).setValue("Taguatinga");
    await (await this.inputState).setValue("Brasília");
    await (await this.inputZipCode).setValue("72151000\uE007");
  }

  get inputName() {
    return $(`-ios predicate string:value == "Enter your name"`);
  }
  get inputNumber() {
    return $(`-ios predicate string:value == "Enter your mobile number"`);
  }
  get inputAddress() {
    return $(`-ios predicate string:value == "Enter your address"`);
  }
  get inputCity() {
    return $(
      `-ios predicate string:value == "City" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputState() {
    return $(
      `-ios predicate string:value == "State" AND type == "XCUIElementTypeTextField"`
    );
  }
  get inputZipCode() {
    return $(
      `-ios predicate string:value == "ZipCode" AND type == "XCUIElementTypeTextField"`
    );
  }
  get btnSave() {
    return $(`~save`);
  }

}

export default new AddressPage();
