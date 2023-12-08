document.addEventListener('DOMContentLoaded', function () {
    // Sample categories
    const categories = ['Category 1', 'Category 2', 'Category 3'];

    // Sample links for each category with associated URLs
    const categoryLinks = {
        'Category 1': [
            { name: 'Link 1', url: 'https://www.example1.com' },
            { name: 'Link 2', url: 'https://www.example2.com' },
            { name: 'Link 3', url: 'https://www.example3.com' },
        ],
        'Category 2': [
            { name: 'Link 4', url: 'https://www.example4.com' },
            { name: 'Link 5', url: 'https://www.example5.com' },
            { name: 'Link 6', url: 'https://www.example6.com' },
        ],
        'Category 3': [
            { name: 'Link 7', url: 'https://www.example7.com' },
            { name: 'Link 8', url: 'https://www.example8.com' },
            { name: 'Link 9', url: 'https://www.example9.com' },
        ],
    };

    const categoriesGrid = document.getElementById('categoriesGrid');
    const linksContainer = document.getElementById('linksContainer');

    // Populate categories grid
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.textContent = category;

        categoryElement.addEventListener('click', () => {
            // Display links for the selected category
            showLinks(categoryLinks[category]);
        });

        categoriesGrid.appendChild(categoryElement);
    });

    // Function to display links for a selected category
    function showLinks(links) {
        // Clear existing links
        linksContainer.innerHTML = '';

        // Populate links container
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.classList.add('link');
            linkElement.href = link.url;
            linkElement.target = '_blank'; // Open link in a new tab/window
            linkElement.textContent = link.name;

            linksContainer.appendChild(linkElement);
        });
    }
});
