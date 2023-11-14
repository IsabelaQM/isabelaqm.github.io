window.addEventListener("load", function () {
  document
    .getElementById("btnCadastrar")
    .addEventListener("click", validarCadastro);

  function validarCadastro() {
    user = document.getElementById("txtUser");
    pwd = document.getElementById("txtPwd");
    checkPwd = document.getElementById("txtCheckPwd");

    if (!user.value || !pwd.value || !checkPwd.value) {
      alertWifi(`Preencha todos os campos!`, false, 0, "", 30, "");
    } else if (pwd.value != checkPwd.value) {
      alertWifi(`Senha e confirmar senha diferentes. Tente novamente!`,false,0,"",30,"");
    } else cadastrarUsuario(user.value, pwd.value);
  }

  function cadastrarUsuario(user, pwd) {
    var usuario = { nome: user, senha: pwd };

    var usuarios = localStorage.getItem("usuarios");

    if (!usuarios) {
      usuarios = [usuario];
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "", 30, "");
    } else if (podeCadastrar(user)) {
      usuarios = JSON.parse(usuarios);
      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "", 30, "");
    } else {
      alertWifi(`Usuário já existe. Tente novamente!`, false, 0, "", 30, "");
    }
  }

  // Verifica se já há um usuario cadastrado
  function podeCadastrar(user) {
    var usuarios = localStorage.getItem("usuarios");
    usuarios = JSON.parse(usuarios);
    var achou = false;
    for (i = 0; i < usuarios.length; i++)
      if (usuarios[i].nome == user) {
        achou = true;
        break;
      }
    return !achou;
  }
});
