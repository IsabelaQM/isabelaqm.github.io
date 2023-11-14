window.addEventListener("load", function () {
  document.getElementById("btnEntrar").addEventListener("click", validarLogin);

  function validarLogin() {
    var user = document.getElementById("txtUser");
    var pwd = document.getElementById("txtPwd");

    if (!user.value) {
      alertWifi(`Digite um usuário!`, false, 0, "", 30, "");
    } else if (!pwd.value) {
      alertWifi(`Digite a sua senha!`, false, 0, "", 30, "");
    } else processarLogin(user.value, pwd.value);
  }

  function processarLogin(user, pwd) {
    if (typeof Storage != "undefined") {
      usuarios = localStorage.getItem("usuarios");
      if (!usuarios) {
        alertWifi(
          `Usuário inexistente. Tente novamente!`,
          false,
          0,
          "",
          30,
          ""
        );
      } else {
        var usuarios = JSON.parse(usuarios);
        var achou = false;
        for (i = 0; i < usuarios.length; i++)
          if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
            achou = true;
            break;
          }
        if (!achou) {
          alertWifi(`Dados incorretos. Tente novamente!`, false, 0, "", 30, "");
        } else {
          alertWifi(`Seja bem-vindo ao jogo, ${user}`, false, 0, "", 30, "");
        }
      }
    } else {
      alertWifi(`Problema ao iniciar o jogo! Tente novamente mais tarde`,false,0,"",30,"");
    }
  }
});
