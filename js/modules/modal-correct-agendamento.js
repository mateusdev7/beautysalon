export default function initModalCorrectAgendamento() {
  const botaoAbrirModal = document.querySelector('[data-abrir-modal-agendamento]');
  const botaoFecharModal = document.querySelector('[data-modal="fechar-agendamento"]');
  const botaoFecharModalIncorrect = document.querySelector('[data-modal="fechar-agendamento-incorrect"]');
  const containerModalAgendamento = document.querySelector('[data-modal="agendamento"]');
  const containerModalAgendamentoIncorrect = document.querySelector('[data-modal="agendamento-incorrect"]');
  const botaoConcluirCorrect = document.querySelector('.botao-concluir');
  const botaoVoltarIncorrect = document.querySelector('.botao-voltar');
  const events = ['touchstart', 'click'];
  const valorResult = document.querySelector('.valor-result');
  const horaResult = document.querySelector('.hora-result');
  const dataResult = document.querySelector('.data-result');
  const leftContainer = document.querySelector('.left-container-salao-agendamento');
  const allProfessional = leftContainer.querySelectorAll('.container-professional');

  function toggleModalAgendamento() {
    containerModalAgendamento.classList.toggle('activeModal');
  }

  function toggleModalAgendamentoIncorrect() {
    containerModalAgendamentoIncorrect.classList.toggle('activeModal');
  }

  if (botaoAbrirModal) {
    window.onclick = (event) => {
      if (event.target === containerModalAgendamento) {
        containerModalAgendamento.classList.toggle('activeModal');
      }
    };

    events.forEach((userEvent) => {
      botaoAbrirModal.addEventListener(userEvent, () => {
        allProfessional.forEach((professional) => {
          if (valorResult.textContent === 'R$ 00,00'
              || horaResult.textContent === 'HH:MM'
              || dataResult.textContent === 'YYYY/MM/DD'
              || !(professional.classList.contains('selecionado'))) {
            toggleModalAgendamentoIncorrect();
          } else {
            toggleModalAgendamento();
          }
        });
      });
      botaoFecharModal.addEventListener(userEvent, toggleModalAgendamento);
      botaoConcluirCorrect.addEventListener(userEvent, toggleModalAgendamento);
      botaoVoltarIncorrect.addEventListener(userEvent, toggleModalAgendamentoIncorrect);
      botaoFecharModalIncorrect.addEventListener(userEvent, toggleModalAgendamentoIncorrect);
    });
  }
}
