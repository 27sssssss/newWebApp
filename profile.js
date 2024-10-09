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
function profileData(){
    const timeWork = 10.00;
    const pieceWork = 14.00;
    const wageTimework = 11.00;
    const avgWagePieceWork = 12.00;
    const totalWage = 100.00;
    document.getElementById("timework").textContent = `${timeWork}`;
    document.getElementById("piecework").textContent = `${pieceWork}`;
    document.getElementById("wage_timework").textContent = `${wageTimework}`;
    document.getElementById("avg_wage_piecework").textContent = `${avgWagePieceWork}`;
    document.getElementById("total_wage").textContent = `${totalWage}`;
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/api/workers-data') 
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const item = data[0];
                document.getElementById('timework').innerText = item.timework || 'N/A';
                document.getElementById('piecework').innerText = item.piecework || 'N/A';
                document.getElementById('wage_timework').innerText = item.wage_timework || 'N/A';
                document.getElementById('avg_wage_piecework').innerText = item.avg_wage_piecework || 'N/A';
                document.getElementById('total_wage').innerText = item.total_wage || 'N/A';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});