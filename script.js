document.addEventListener('DOMContentLoaded', function() {
    if (typeof Html5Qrcode === 'undefined') {
        console.error('Html5Qrcode не загружена');
        return;
    }
    // сканирование
    document.getElementById('scanButton').addEventListener('click', function() {
        const html5QrCode = new Html5Qrcode("preview");
        html5QrCode.start(
            { facingMode: "environment" },
            { fps: 10, qrbox: { width: 350, height: 350 } },
            qrCodeMessage => {
                console.log(qrCodeMessage);
                document.getElementById('qrData').value = qrCodeMessage;
                html5QrCode.stop().then(() => {
                    alert(`QR код: ${qrCodeMessage}`);
                });
            },
            errorMessage => {
                console.log(errorMessage);
            })
            .catch(err => {
                console.log(err);
            });
    });

    // отправка формы
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const data1 = document.getElementById('data1').value;
        const data2 = document.getElementById('data2').value;
        const qrData = document.getElementById('qrData').value;

        fetch('http://localhost:3000/submit-data', { //сервер отправки
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data1, data2, qrData })
        })
        .then(response => response.json())
        .then(data => {
            console.log('успешно:', data);
            alert('Данные были успешно отправлены');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

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
profileData();
settingsData();

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
function profileData(){
    const timeWork = 10.00;
    const pieceWork = 14.00;
    const wageTimework = 11.00;
    const avgWagePieceWork = 12.00;
    const totalWage = 100.00;
    document.getElementById("timework").textContent = `${timeWork}`;
    document.getElementById("piecework").textContent = `${pieceWork}`;
    document.getElementById("wage_timework").textContent = `${wageTimework}`;
    document.getElementById("avg_wage_piecework").textContent = `${totalWage}`;
}
