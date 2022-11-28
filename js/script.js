import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import ModalCadastroCliente from './modules/modal-cadastro-cliente.js';
import initModalLogin from './modules/modal-login.js';
import iniciarPegarElementosForm from './modules/pegarValuesForm.js';
import initiModalCadastroSalao from './modules/modal-cadastro-salao.js';
import initTabContent from './modules/tab-content.js';
import initModalCorrectAgendamento from './modules/modal-correct-agendamento.js';

const dropdownMenu = new DropdownMenu('[data-dropdown]', '.arrow-img', ['touchstart', 'click']);
dropdownMenu.init();

const dropdownMenuPerfilClient = new DropdownMenu('[data-perfil-dropdown]', ['touchstart', 'click']);
dropdownMenuPerfilClient.init();

const dropdownMenuPerfilClientIndex = new DropdownMenu('[data-perfil-dropdown-index]', ['touchstart', 'click']);
dropdownMenuPerfilClientIndex.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', '[data-menu="nav"]');
menuMobile.init();

const modalCadastroCliente = new ModalCadastroCliente('[data-modal="botaoCadastroCliente"]', '[data-modal="fecharCadastro"]', '[data-modal="containerCadastroCliente"]', '.eyes-password-senha', '.eyes-password-confirmar', '#senhaCadastroCliente', '#senhaCadastroConfirmarCliente');
modalCadastroCliente.init();

initModalLogin();
initiModalCadastroSalao();
initTabContent();
iniciarPegarElementosForm();
initModalCorrectAgendamento();
