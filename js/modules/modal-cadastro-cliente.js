export default class ModalCadastroCliente {
  constructor(
    botaoAbrirModal,
    botaoFecharModal,
    containerModalCadastro,
    olhoCadastroSenha,
    olhoCadastroSenhaConfirmar,
    inputSenhaCadastro,
    inputSenhaCadastroConfirmar,
  ) {
    this.botaoAbrirModal = document.querySelector(botaoAbrirModal);
    this.botaoFecharModal = document.querySelector(botaoFecharModal);
    this.containerModalCadastro = document.querySelector(containerModalCadastro);
    if (olhoCadastroSenha !== undefined) {
      this.olhoCadastroSenha = document.querySelector(olhoCadastroSenha);
    } else {
      this.olhoCadastroSenha = null;
    }

    if (olhoCadastroSenhaConfirmar !== undefined) {
      this.olhoCadastroSenhaConfirmar = document.querySelector(olhoCadastroSenhaConfirmar);
    } else {
      this.olhoCadastroSenhaConfirmar = null;
    }
    this.inputSenhaCadastro = document.querySelector(inputSenhaCadastro);
    this.inputSenhaCadastroConfirmar = document.querySelector(inputSenhaCadastroConfirmar);
    this.html = document.documentElement;

    this.toggleModalCadastro = this.toggleModalCadastro.bind(this);
    this.click = this.click.bind(this);
    this.mostrarSenha = this.mostrarSenha.bind(this);
    this.mostrarSenhaConfirmar = this.mostrarSenhaConfirmar.bind(this);
  }

  toggleModalCadastro(event) {
    event.preventDefault();
    this.containerModalCadastro.classList.toggle('activeModal');
    return this;
  }

  click(event) {
    if (event.target === this.containerModalCadastro) {
      this.containerModalCadastro.classList.remove('activeModal');
    }
    return this;
  }

  mostrarSenha() {
    if (this.olhoCadastroSenha !== null) {
      if (this.inputSenhaCadastro.type === 'password') {
        this.inputSenhaCadastro.type = 'text';
        this.olhoCadastroSenha.src = './imagens/formularios/open_eye_icon.svg';
        this.olhoCadastroSenha.style.top = '6px';
      } else {
        this.inputSenhaCadastro.type = 'password';
        this.olhoCadastroSenha.src = './imagens/formularios/closed_eyes_icon.svg';
        this.olhoCadastroSenha.style.top = '16px';
      }
    }
    return this;
  }

  mostrarSenhaConfirmar() {
    if (this.olhoCadastroSenhaConfirmar !== null) {
      if (this.inputSenhaCadastroConfirmar.type === 'password') {
        this.inputSenhaCadastroConfirmar.type = 'text';
        this.olhoCadastroSenhaConfirmar.src = './imagens/formularios/open_eye_icon.svg';
        this.olhoCadastroSenhaConfirmar.style.top = '6px';
      } else {
        this.inputSenhaCadastroConfirmar.type = 'password';
        this.olhoCadastroSenhaConfirmar.src = './imagens/formularios/closed_eyes_icon.svg';
        this.olhoCadastroSenhaConfirmar.style.top = '16px';
      }
    }
    return this;
  }

  addModalEvent() {
    ['touchstart', 'click'].forEach((userEvent) => {
      this.botaoAbrirModal.addEventListener(userEvent, this.toggleModalCadastro);
      this.botaoFecharModal.addEventListener(userEvent, this.toggleModalCadastro);
      this.olhoCadastroSenha.addEventListener(userEvent, this.mostrarSenha);
      this.olhoCadastroSenhaConfirmar.addEventListener(userEvent, this.mostrarSenhaConfirmar);
      this.html.addEventListener(userEvent, this.click);
    });
  }

  init() {
    if (this.botaoAbrirModal) {
      this.addModalEvent();
    }
    return this;
  }
}
