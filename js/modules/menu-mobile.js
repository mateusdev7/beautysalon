export default class {
  constructor(menuButton, menuList, nav) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.nav = document.querySelector(nav);
    this.html = document.documentElement;
    this.openMenuMobile = this.openMenuMobile.bind(this);
  }

  openMenuMobile() {
    this.menuList.classList.toggle('active');
    this.menuButton.classList.toggle('active');
  }

  addButtonEvent() {
    this.menuButton.addEventListener('click', this.openMenuMobile);
  }

  init() {
    if (this.menuButton) {
      this.addButtonEvent();
    }
    return this;
  }
}
