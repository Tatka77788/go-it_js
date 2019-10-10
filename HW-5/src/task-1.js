const Account = function(login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, E-mail: ${this.email}`);
};

console.log(Account.prototype.getInfo);
const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo();
const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo();
