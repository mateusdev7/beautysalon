import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(dropdowns, img, events) {
    this.dropdownMenu = document.querySelectorAll(dropdowns);
    if (img !== undefined) {
      this.img = document.querySelector(img);
    } else {
      this.img = null;
    }
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.addDropdownsMenusEvent = this.addDropdownsMenusEvent.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    if (this.img !== null) {
      this.img.classList.add(this.activeClass);
    }
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
      if (this.img !== null) {
        this.img.classList.remove(this.activeClass);
      }
    });
  }

  addDropdownsMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownsMenusEvent();
    }
    return this;
  }
}
