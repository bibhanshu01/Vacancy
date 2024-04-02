document.addEventListener('DOMContentLoaded', function () {
    // Sample categories
    const categories = ['Agriculture & Cooperation', 'Category 2', 'Category 3', 'Category 4'];

    // Sample links for each category with associated URLs
    const categoryLinks = {
        'Uttar Pradesh': [
            { name: 'UNION PUBLIC SERVICE COMMISSION', url: 'https://upsc.gov.in/' },
            { name: 'AGRISNET, Odisha - Agricultural Resources Information System Network', url: 'https://agrisnetodisha.ori.nic.in/' },
            { name: 'Academic Management System, AMS-IVRI', url: 'https://amsivri.icar.gov.in/' },
            { name: 'Academic Management System, AMS-NDRI', url: 'https://amsndri.icar.gov.in/HomePage.aspx' },
            { name: 'Academic Management System, CAU', url: 'https://amscau.icar.gov.in/HomePage.aspx' },
            { name: 'Academic Management System, CIFE', url: 'https://amscife.icar.gov.in/HomePage.aspx' },
            { name: 'Academic Management System, UHS Bagalkot', url: 'https://amsuhs.icar.gov.in/HomePage.aspx' },
            { name: 'Agri Stack Portal', url: 'https://agristack.gov.in/#/' },
            { name: 'Agri-Clinics and Agri-Business Centres Scheme by Ministry of Agriculture & Farmers Welfare', url: 'https://acabcmis.gov.in/' },
            { name: 'Agri-Exchange', url: 'https://agriexchange.apeda.gov.in/#' },
            { name: 'Agricultural Census, New Delhi', url: 'https://agcensus.nic.in/' },
            { name: 'Agricultural Education Portal', url: 'https://education.icar.gov.in/' },
            { name: 'Agricultural Engineering Department', url: 'https://aed.tn.gov.in/ta/' },
            { name: 'Agricultural Marketing Department', url: 'https://market.ap.nic.in/' },
            { name: 'Agricultural Marketing Department, Karnataka', url: 'https://www.krishimaratavahini.kar.nic.in/department.aspx' },
            { name: 'Agricultural Meteorology Division', url: 'https://imdagrimet.gov.in/' },
            { name: 'Agricultural Scientists Recruitment Board (ASRB), New Delhi', url: 'http://www.asrb.org.in/' },
            { name: 'Agricultural Technology Management Agency (ATMA) Directorate and SAMETI, Gujarat', url: 'https://atma.gujarat.gov.in/index.htm' },
            { name: 'Agriculture Department, Jammu and Kashmir', url: 'https://diragrijmu.nic.in/' },
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
        'Category 4': [
            { name: 'Link 10', url: 'https://www.example10.com' },
            { name: 'Link 11', url: 'https://www.example11.com' },
            { name: 'Link 12', url: 'https://www.example12.com' },
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
