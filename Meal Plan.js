const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Handle Excel file upload
const uploadInput = document.getElementById('upload');
const excelDataContainer = document.getElementById('excel-data');

uploadInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  try {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);

      // Use a library like SheetJS (https://sheetjs.com/) to read Excel data
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0]; 
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Display the Excel data (example: display in a table)
      displayExcelData(jsonData); 
    };

    reader.readAsArrayBuffer(file); 
  } catch (error) {
    console.error('Error reading Excel file:', error);
    // Display an error message to the user
    alert('Error reading Excel file. Please try again.');
  }
});

// Helper function to display Excel data (example: create a table)
function displayExcelData(data) {
  const table = document.createElement('table');
  table.classList.add('excel-table');

  const headerRow = table.insertRow();
  for (const key in data[0]) {
    const cell = document.createElement('th');
    cell.textContent = key;
    headerRow.appendChild(cell);
  }

  data.forEach(row => {
    const rowElement = table.insertRow();
    for (const key in row) {
      const cell = document.createElement('td');
      cell.textContent = row[key];
      rowElement.appendChild(cell);
    }
  });

  excelDataContainer.innerHTML = ''; // Clear previous data
  excelDataContainer.appendChild(table);
}
