// Usuario.js
/** Clase que representa a un usuario de la plataforma*/
class User {
    constructor(id, username, name, lastname, email, password) {
      this.id = id;
      this.username = username;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = User;