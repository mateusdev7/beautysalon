export default function initiModalCadastroSalao() {
  const botaoModal = document.querySelector('[data-modal="botaoCadastroSalao"]');
  const botaoFechar = document.querySelector('[data-modal="fecharCadastroSalao"]');
  const containerModalSalao = document.querySelector('[data-modal="containerCadastroSalao"]');
  const olhoCadastroSenhaSalao = document.querySelector('.eyes-password-salao');
  const olhoCadastroSenhaSalaoConfirmar = document.querySelector('.eyes-password-confirmar-salao');
  const inputSenhaCadastroSalao = document.getElementById('senhaCadastroSalao');
  const inputSenhaCadastroSalaoConfirmar = document.getElementById('senhaCadastroConfirmarSalao');
  const events = ['touchstart', 'click'];

  function toggleModalCadastroSalao(event) {
    event.preventDefault();
    containerModalSalao.classList.toggle('activeModal');
  }
  function mostrarSenha() {
    if (inputSenhaCadastroSalao.type === 'password') {
      inputSenhaCadastroSalao.type = 'text';
      olhoCadastroSenhaSalao.src = './imagens/formularios/open_eye_icon.svg';
      olhoCadastroSenhaSalao.style.top = '10px';
    } else {
      inputSenhaCadastroSalao.type = 'password';
      olhoCadastroSenhaSalao.src = './imagens/formularios/closed_eyes_icon.svg';
      olhoCadastroSenhaSalao.style.top = '18px';
    }
  }

  function mostrarSenhaConfirmar() {
    if (inputSenhaCadastroSalaoConfirmar.type === 'password') {
      inputSenhaCadastroSalaoConfirmar.type = 'text';
      olhoCadastroSenhaSalaoConfirmar.src = './imagens/formularios/open_eye_icon.svg';
      olhoCadastroSenhaSalaoConfirmar.style.top = '10px';
    } else {
      inputSenhaCadastroSalaoConfirmar.type = 'password';
      olhoCadastroSenhaSalaoConfirmar.src = './imagens/formularios/closed_eyes_icon.svg';
      olhoCadastroSenhaSalaoConfirmar.style.top = '18px';
    }
  }
  if (botaoModal) {
    window.onclick = (event) => {
      if (event.target === containerModalSalao) {
        containerModalSalao.classList.toggle('activeModal');
      }
    };

    events.forEach((userEvent) => {
      botaoModal.addEventListener(userEvent, toggleModalCadastroSalao);
      botaoFechar.addEventListener(userEvent, toggleModalCadastroSalao);
      olhoCadastroSenhaSalao.addEventListener(userEvent, mostrarSenha);
      olhoCadastroSenhaSalaoConfirmar.addEventListener(userEvent, mostrarSenhaConfirmar);
    });
  }
}
