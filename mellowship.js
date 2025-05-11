// Get the canvas element
const ctx = document.getElementById('ticketChart').getContext('2d');

// Create the chart
const ticketChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Special Ticket', 'Demo Paid Ticket', 'Hackathon', 'New Ticket'],
        datasets: [{
            label: 'Ticket Sales',
            data: [280, 3, 4, 50], // Your data
            backgroundColor: [
                '#7662fc', // Special Ticket - Purple
                '#a991ff', // Demo Paid Ticket - Lighter purple
                '#34c38f', // Hackathon - Green
                '#f46a6a'  // New Ticket - Red
            ],
            borderColor: [
                '#1a1628', // Border color matching card background
                '#1a1628',
                '#1a1628',
                '#1a1628'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Makes the doughnut hole larger
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#bbbbbb', // Color for legend text
                    padding: 15,
                    font: {
                        size: 12
                    }
                }
            },
            title: {
                display: true,
                text: 'Ticket Distribution',
                color: '#ffffff', // Title color
                font: {
                    size: 16
                },
                padding: {
                    bottom: 20
                }
            }
        }
    }
});
