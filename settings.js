settingsData();

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
});

function settingsData(){
    const serverAddress = 'maxcropdata.com';
    const dataBase = 'maxcrop_prod';
    const restApiAddress = 'api/mcm';
    const protocol = 'https';
    document.getElementById("first").textContent = `${serverAddress}`;
    document.getElementById("second").textContent = `${dataBase}`;
    document.getElementById("third").textContent = `${restApiAddress}`;
    document.getElementById("fourth").textContent = `${protocol}`;
}
