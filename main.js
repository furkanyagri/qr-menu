import { renderMenuItems, renderButtons } from './scripts/ui.js';
//! html'den gelenler
const menuList = document.querySelector('#menu-list');
const buttonsArea = document.getElementById('buttons');


document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  fetchMenu();
});


let data;


async function fetchMenu() {
  const res = await fetch('./db.json');
  data = await res.json();
  console.log(data);
  renderMenuItems(data.menu, menuList);
}


buttonsArea.addEventListener('click', (e) => {
  if (e.target.id !== 'buttons') {
    renderButtons(e.target.innerText);
    
    const selected = e.target.dataset.category;

    if (selected === 'all') {
      
      renderMenuItems(data.menu, menuList);
    } else {
      
      const filtred = data.menu.filter(
        (i) => i.category === selected
      );
      
      renderMenuItems(filtred, menuList);
    }
  }
});