import { buttonData } from './constants.js';

const buttonArea = document.getElementById('buttons');


export function renderMenuItems(menuItems, menuList) {
  
  menuList.innerHTML = menuItems
    .map(
      (item) => `
      <a id="card"  href="/detail.html?id=${
        item.id
      }" class="d-flex  flex-column flex-md-row text-decoration-none text-dark gap-3">
        <img
          class="rounded shadow img-fluid"
          src="${item.img}"
        />

        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(
              item.price * 30
            ).toFixed(2)}₺</p>
          </div>
          <p class="lead">
            ${item.desc.slice(0, 80) + '...'}
          </p>
        </div>
      </a>
    `
    )
    .join(' ');
}


export function renderButtons(activeText) {
  
  buttonArea.innerHTML = '';

  
  buttonData.forEach((btn) => {
    
    const buttonEle = document.createElement('button');

    
    buttonEle.className = 'btn btn-outline-dark';

    
    buttonEle.dataset.category = btn.value;

    
    if (btn.text === activeText) {
      buttonEle.classList.add('btn-dark', 'text-white');
    }

    
    buttonEle.innerText = btn.text;
    
    buttonArea.appendChild(buttonEle);
  });
}