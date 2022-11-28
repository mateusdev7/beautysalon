function removeStrong() {
  const tabOptions = document.querySelectorAll('.tab-options h3');
  tabOptions.forEach((tabOption) => {
    tabOption.classList.remove('strong');
  });
}
export default function initTabContent() {
  const tabOptions = document.querySelectorAll('.tab-options h3');
  const tabs = document.querySelectorAll('.tab');
  if (tabOptions.length > 0) {
    tabOptions.forEach((tabOption, index) => {
      tabOption.addEventListener('click', () => {
        tabs.forEach((tab) => {
          tab.classList.remove('active');
        });
        tabs[index].classList.add('active');
        removeStrong();
        tabOption.classList.add('strong');
      });
    });
    tabOptions[0].click();
  }
}
