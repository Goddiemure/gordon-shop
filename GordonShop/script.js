document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Get the filter value (e.g., 'produce', 'dairy', or 'all')
            const filterValue = button.getAttribute('data-filter');

            // 2. Manage the active state of buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 3. Loop through all product cards and apply the filter
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Show the card
                    card.classList.remove('hidden');
                } else {
                    // Hide the card
                    card.classList.add('hidden');
                }
            });
        });
    });
});