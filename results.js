document.addEventListener('DOMContentLoaded', populateGallery);


function collapseAll() {
    // Get all elements with the class 'collapse'
    var collapses = document.querySelectorAll('.collapse');

    // Loop through each element and collapse it
    collapses.forEach(function(element) {
        var collapseInstance = new bootstrap.Collapse(element, {
            toggle: false
        });
        collapseInstance.hide();
    });
}

function expandAll() {
    // Get all elements with the class 'collapse'
    var collapses = document.querySelectorAll('.collapse');

    // Loop through each element and expand it
    collapses.forEach(function(element) {
        var collapseInstance = new bootstrap.Collapse(element, {
            toggle: false
        });
        collapseInstance.show();
    });
}


async function populateGallery() {
    try {

        /*
        // Fetch the gallery data from the JSON file
        const response = await fetch('gallery_data.json');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const galleryItems = await response.json();
        */

        const galleryItems = demoData();

        // Get the gallery container div by ID
        const galleryContainer = { 16 : document.getElementById('gallery_16'),
                                   32 : document.getElementById('gallery_32') };

        // Loop through each item in the JSON array
        galleryItems.forEach(item => {
            // Create the necessary div structure
            const galleryDiv = document.createElement('div');
            galleryDiv.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'mt-5');
            galleryDiv.style.textAlign = 'center';
            galleryDiv.style.overflowX = 'auto';

            var origpic = item.pic.replace("160", item.category.toString())

            // Build the HTML content with data from the JSON object
            galleryDiv.innerHTML = `
                <a href="#info_${item.category}_${item.id}" data-bs-toggle="collapse">
                    <img src="${item.pic}" width="160" height="160">
                </a>
                <div id="info_${item.category}_${item.id}" class="collapse fs-6">
                    <img class="mt-2" src="${origpic}"><br>
                    <strong>${item.title}</strong><br>${item.artist}
                    <div class="fw-lighter">
                        ${item.description}<br>
                        <em>Tools: ${item.tools}</em>
                    </div>
                </div>
            `;

            // Append the newly created div to the gallery container
            galleryContainer[item.category].appendChild(galleryDiv);

        });
    } catch (error) {
        console.error('Error fetching or populating the gallery:', error);
    }
}


function demoData() {
return [
    {
        "id": 1,
        "category": 32,
        "title": "The most average art",
        "artist": "Xiaomeng Ye",
        "description": "A VAE trained on ImageNet-32. The VAE is apparently undertrained (intentionally?). After training for couple of hours. I asked VAE to spit out the most average art. Source:\nhttps://colab.research.google.com/drive/1itbG2jvoae3Ha86JVE03MvTjIfTee_9s?usp=sharing",
        "tools": "Google Colab, Image-Net, Colab AI assistance",
        "pic": "pics/c32_160_1.png"
    },
    {
        "id": 2,
        "category": 32,
        "title": "The Going Merry",
        "artist": "Catherine Amato",
        "description": "In memory of the Going Merry from One Piece",
        "tools": "The website Pixilart",
        "pic": "pics/c32_160_2.png"
    },
    {
        "id": 3,
        "category": 32,
        "title": "Berry Futuristic Logo",
        "artist": "Anthony Varela",
        "description": "This is a futuristic Berry College Logo. The different shades of purple mean the technology advancements, and the green means the commitment with the environment.",
        "tools": "GIMP ",
        "pic": "pics/c32_160_3.png"
    },
    {
        "id": 4,
        "category": 32,
        "title": "The Swordsman",
        "artist": "Orlando Santiago",
        "description": "I hand created a swordsman beginning to strike at the camera perspective.",
        "tools": "Only Pixilart.com",
        "pic": "pics/c32_160_4.png"
    },
    {
        "id": 5,
        "category": 32,
        "title": "The Dark Side of the Moon",
        "artist": "Kaitlyn Dinkins",
        "description": "This pixel are was inspired by Pink-Floyd's, \"The Dark Side of the Moon,\" album and primarily the song Breathe(In The Air).",
        "tools": "Divoom, and \"Online GIF Tools\" to resize it.",
        "pic": "pics/c32_160_5.gif"
    },
    {
        "id": "a1",
        "category": 32,
        "title": "Voyager's Golden Record",
        "artist": "Malachi West",
        "description": "Hello from the children of Planet Earth",
        "tools": "Pixie Engine Editor",
        "pic": "pics/c32_160_a1.png"
    }
];
}