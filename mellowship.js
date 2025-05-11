document.addEventListener('DOMContentLoaded', function() {
    const ticketCountsElements = document.querySelectorAll('.ticket-summary .ticket-item .ticket-count');
    const progressBar = document.querySelector('.progress-bar');

    if (ticketCountsElements && progressBar) {
        let totalTickets = 0;
        const ticketCounts = [];
        const colors = ['#9c27b0', '#aed581', '#fdd835', '#f44336']; // Example violet, green, yellow, red

        ticketCountsElements.forEach(element => {
            const count = parseInt(element.textContent.replace('(', '').replace(')', ''));
            totalTickets += count;
            ticketCounts.push(count);
        });

        if (totalTickets > 0 && ticketCounts.length === colors.length) {
            let gradient = 'linear-gradient(to right';
            let percentage = 0;

            for (let i = 0; i < ticketCounts.length; i++) {
                const proportion = (ticketCounts[i] / totalTickets) * 100;
                const nextPercentage = percentage + proportion;
                gradient += `, ${colors[i]} ${percentage}% ${nextPercentage}%`;
                percentage = nextPercentage;
            }

            gradient += ')';
            progressBar.style.background = gradient;
        } else if (totalTickets > 0) {
            // If the number of counts doesn't match colors, apply a single color or a default gradient
            progressBar.style.background = '#9c27b0'; // Default violet
        } else {
            progressBar.style.width = '0%'; // No tickets
            progressBar.style.background = '#ccc'; // Grey for no progress
        }
    }
});
