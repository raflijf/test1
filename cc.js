const btnopsi = document.querySelector('.navbar .navigasi li button')
btnopsi.addEventListener('click', () => {
    const opsi = document.getElementById('opsi')
    opsi.classList.toggle('toggle')
})

const HumburgerMenu = document.getElementById('humburgermenu')
HumburgerMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu')
    menu.classList.toggle('toggle-humburgermenu')    
})