// API URL (adjust as needed)
const apiUrl = 'https://api.coalitiontechnologies.com/patient-data'; // Make sure this is correct
const apiKey = 'YOUR_API_KEY'; // Replace with your API key if necessary

// Fetch patient data for "Jessica Taylor"
fetch(`${apiUrl}?name=Jessica Taylor`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${apiKey}`, // Add Authorization header if needed
  },
})
.then(response => response.json())
.then(data => {
  // Assuming the data structure returns an array and finding Jessica Taylor
  const patientData = data.find(patient => patient.name === 'Jessica Taylor');

  if (patientData) {
    // Update patient info in the UI
    document.getElementById('patient-name').innerText = patientData.name;
    document.getElementById('patient-age').innerText = patientData.age;
    document.getElementById('blood-pressure').innerText = patientData.bloodPressure;

    // Create a blood pressure chart for the years
    const ctx = document.getElementById('bp-chart').getContext('2d');
    const bpChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2019', '2020', '2021', '2022'], // Example years
        datasets: [{
          label: 'Blood Pressure',
          data: patientData.bpData, // Use actual blood pressure data from the API
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
    });
  }
})
.catch(error => console.error('Error fetching data:', error));

