const dataJson =  [
        { "id": 1, "name": "Adpyc", "briefDescription": "Landing page with Javascript, CSS and PHP.", "longDescription": "Landing page with CSS, JavaScript, and PHP for the form.", "image": "images/1.png" },
        { "id": 2, "name": "Higueras N.L.", "briefDescription": "Government web page in WordPress.", "longDescription": "Website for a municipality in Nuevo León showcasing information and required documents requested by the State, along with a user administration area.", "image": "images/2.png" },
        { "id": 3, "name": "Ole logistics", "briefDescription": "Landing page in WordPress", "longDescription": "Landing page for integration with an internal CRM in WordPress using the Jetpack plugin.", "image": "images/3.png" },
        { "id": 4, "name": "Course Platform 360", "briefDescription": "Developed with JavaScript, PHP and bootstrap ", "longDescription": "Course website built with PHP and MySQL, featuring session management and user handling. A user administration area was also developed.", "image": "images/4.png" },
        { "id": 5, "name": "Galvasid web page", "briefDescription": "Landing page in Wordpress", "longDescription": "Informational website for the company Galvasid; the client requested WordPress for its administration.", "image": "images/5.png" },
        { "id": 6, "name": "Evo bike Monterrey", "briefDescription": "E-commerce with Woocommerce", "longDescription": "E-commerce site built with WooCommerce, chosen for its compatibility with the payment methods required.", "image": "images/6.png" },
        { "id": 7, "name": "Courses Platform Medel", "briefDescription": "Course platform Wordpress", "longDescription": "Courses Web site WordPress using Divi and LearnDash", "image": "images/7.png" },
        { "id": 8, "name": "Instituto Capelli", "briefDescription": "Courses platform", "longDescription": "Courses web site con LearnDash and elementor", "image": "images/8.png" },
        { "id": 9, "name": "IWelding", "briefDescription": "Catalog in Wordpress", "longDescription": "Catalog for industrial orders and quotations.", "image": "images/9.png" }
    ];

const dataExperience = [ ];

    const container = document.getElementById('container-project');

    dataJson.forEach((data) => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
        <div class="card border-secondary shadow-sm">
            <img src="${data.image}" alt="${data.name}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h3>${data.name}</h3>
                <p class="card-text">${data.briefDescription}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <button type="button" class="btn btn-sm btn-success" onclick='showInfo(${JSON.stringify(data)})'>Info</button>
                </div>
            </div>
        </div>
    `;
        container.appendChild(card);
    });

    function showInfo(data) {
        console.log('showInfo');
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = 'infoModal';
        modal.tabIndex = -1;
        modal.setAttribute('aria-labelledby', 'infoModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="infoModalLabel"><p><strong>${data.name}</strong></p></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <br>
                <img src="${data.image}" alt="${data.name}" class="card-img-top img-fluid mb-5" style="height: 200px; object-fit: cover;">
                <br>
                <p><strong>Description: </strong>${data.longDescription}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
        container.appendChild(modal);
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();

        modal.addEventListener('hidden.bs.modal', () => {
            modal.remove();
        });

    }
