export default function initModalLogin() {
  const botaoLogin = document.querySelector('[data-modal="login"]');
  const modal = document.querySelector('[data-modal="containerLogin"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const olhoSenha = document.querySelector('.eyes-password');
  const inputSenha = document.getElementById('senha');
  const html = document.documentElement;
  const events = ['touchstart', 'click'];
  function click(event) {
    if (event.target === modal) {
      modal.classList.remove('activeModal');
    }
  }

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('activeModal');
  }

  function clickEye() {
    if (inputSenha.type === 'password') {
      inputSenha.type = 'text';
      olhoSenha.src = './imagens/formularios/open_eye_icon.svg';
      olhoSenha.style.top = '10px';
    } else {
      inputSenha.type = 'password';
      olhoSenha.src = './imagens/formularios/closed_eyes_icon.svg';
      olhoSenha.style.top = '18px';
    }
  }
  if (botaoLogin) {
    events.forEach((userEvent) => {
      botaoLogin.addEventListener(userEvent, toggleModal);
      fecharModal.addEventListener(userEvent, toggleModal);
      olhoSenha.addEventListener(userEvent, clickEye);
      html.addEventListener(userEvent, click);
    });
  }
}
