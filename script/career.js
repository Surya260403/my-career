// JavaScript for Search and Filter Functionality

function filterCareers() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const streamFilter = document.getElementById('streamFilter').value;
    const careerItems = document.querySelectorAll('.career-item');

    careerItems.forEach(item => {
        const careerName = item.querySelector('h4').innerText.toLowerCase();
        const careerStream = item.getAttribute('data-stream');

        if (
            (careerName.includes(searchInput) || searchInput === '') &&
            (careerStream === streamFilter || streamFilter === 'all')
        ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
