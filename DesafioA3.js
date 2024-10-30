const data = new Date();
const footerData = document.getElementById('data');
footerData.textContent = data.toLocaleDateString();