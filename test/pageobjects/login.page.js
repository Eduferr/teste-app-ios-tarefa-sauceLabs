import { $ } from "@wdio/globals";

class LoginPage {

  get inputEmail() {
    return $("id:email");
  }

  get inputPassword() {
    return $('-ios predicate string: name == "Password"');
  }

  get btnLogin() {
    return $("~btnLogin");
  }

  async login(username, password) {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  open() {
    return super.open("login");
  }
}

export default new LoginPage();
