const dataJson =  [
        { "id": 1, "name": "Adpyc", "briefDescription": "Landing page with Javascript, CSS and PHP.", "longDescription": "", "image": "images/1.png" },
        { "id": 2, "name": "Higueras N.L.", "briefDescription": "Government web page in WordPress.", "longDescription": "", "image": "images/2.png" },
        { "id": 3, "name": "Ole logistics", "briefDescription": "Landing page in WordPress", "longDescription": "", "image": "images/3.png" },
        { "id": 4, "name": "Course Platform 360", "briefDescription": "Developed with JavaScript, PHP and bootstrap ", "longDescription": "", "image": "images/4.png" },
        { "id": 5, "name": "Galvasid web page", "briefDescription": "Landing page in Wordpress", "longDescription": "", "image": "images/5.png" },
        { "id": 6, "name": "Evo bike Monterrey", "briefDescription": "E-commerce with Woocommerce", "longDescription": "", "image": "images/6.png" },
        { "id": 7, "name": "Courses Platform Medel", "briefDescription": "Course platform Wordpress", "longDescription": "", "image": "images/7.png" },
        { "id": 8, "name": "Instituto Capelli", "briefDescription": "Weather app", "longDescription": "", "image": "images/8.png" },
        { "id": 9, "name": "IWelding", "briefDescription": "Catalog in Wordpress", "longDescription": "", "image": "images/9.png" }
    ];

    const container = document.getElementById('container-project');

    dataJson.forEach((data) => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
        <div class="card border-success shadow-sm">
            <div class="card-header bg-transparent border-success">
            <img src="${data.image}" alt="${data.name}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;">
            </div>
            <div class="card-body">
                <h3>${data.name}</h3>
                <p class="card-text">${data.briefDescription}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <!--button type="button" class="btn btn-sm btn-success" onclick="showInfo()">Info</button-->
                </div>
            </div>
        </div>
    `;
        container.appendChild(card);
    });

    function showInfo() {
        console.log('showInfo');
        const modalDescription = document.getElementById('modalDescription');
        modalDescription.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalDinamicoLabel">info</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </div>
        </div>
    `;
    }
