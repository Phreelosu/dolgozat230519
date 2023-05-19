//Rátkay Dániel, Szoft, I-2/N, 2023. 05. 19.

fetch('http://localhost:8000/ships')
    .then(response => response.json())
    .then(data => {
        const dataArray = data;
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
  Object.keys(dataArray[0]).forEach(key => {
    const th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  
  dataArray.forEach(data => {
    const row = document.createElement('tr');
    Object.values(data).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      row.appendChild(td);
    });
    table.appendChild(row);
  });
    const container = document.getElementById('table-container'); // Az elem ID-jét cseréld ki a megfelelőre
  container.appendChild(table);
})
.catch(error => {
  console.error('Hiba történt a lekérdezés során:', error);
});