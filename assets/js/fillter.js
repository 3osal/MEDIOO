let settingBox = document.querySelector('.setting-box');
// show and hidden mega menu
document.querySelector('.setting-box .btn-setting .fa-solid').onclick = function () {
    this.classList.toggle('fa-spin');
    settingBox.classList.toggle('open');
}

let switcherBrands = document.querySelectorAll('.box_links .box_links_item');
let productCard = document.querySelectorAll('.card');

switcherBrands.forEach((a) => {
    a.addEventListener('click', removeActive);
    a.addEventListener('click', manageCard);
})

function removeActive() {
    switcherBrands.forEach((a) => {
        a.classList.remove('active');
        this.classList.add('active')
    })
}

function manageCard() {
    productCard.forEach((card) => {
        card.style.display = 'none';
    })

    document.querySelectorAll(this.dataset.cat).forEach((el)=> {
        el.style.display = 'block';
    })
}