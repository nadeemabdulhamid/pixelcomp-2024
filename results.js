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

function shuffleArray(array) {
    // Fisher-Yates Shuffle Algorithm
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
        //shuffleArray(galleryItems);

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
        "id": 6,
        "category": 33,
        "title": "Marisa's Room",
        "artist": "Eris Murchison",
        "description": "This is a room I designed for a character I made.",
        "tools": "Pixel Editor Pixie and Piskel",
        "pic": "pics/c33_160_6.gif"
    },
    {
        "id": 7,
        "category": 34,
        "title": "Terraria Poster",
        "artist": "anonymouse",
        "description": "Its a silver knight in terraria standing on the title with the party background in the forest biome.",
        "tools": "Pixie engine and Gimp 2.10.38",
        "pic": "pics/c34_160_7.png"
    },
    {
        "id": 8,
        "category": 35,
        "title": "Reversal Red",
        "artist": "anonymouse",
        "description": NaN,
        "tools": "python, ChatGPT, Windows CMD",
        "pic": "pics/c35_160_8.png"
    },
    {
        "id": 9,
        "category": 36,
        "title": "Sunset on the Purple Mountains",
        "artist": "Mereck McGowan",
        "description": "Sunset over top of a purple mountain",
        "tools": "Piskel - Online Pixel art workspace",
        "pic": "pics/c36_160_9.gif"
    },
    {
        "id": 10,
        "category": 37,
        "title": "Braves Logo Pixel Art",
        "artist": "Daniel Hong",
        "description": "I attempted to draw the Atlanta Braves Logo on a 32x32 frame",
        "tools": "Pixel editor Pixie engineer",
        "pic": "pics/c37_160_10.png"
    },
    {
        "id": 11,
        "category": 38,
        "title": "The OBX",
        "artist": "anonymouse",
        "description": NaN,
        "tools": "Pixel Art Editor ",
        "pic": "pics/c38_160_11.png"
    },
    {
        "id": 12,
        "category": 39,
        "title": "SunBreak City",
        "artist": "Will Wallace",
        "description": "A city illuminated by the warm embrace of the distant rising sun ",
        "tools": "krita",
        "pic": "pics/c39_160_12.png"
    },
    {
        "id": 13,
        "category": 40,
        "title": "Berry Deer Image",
        "artist": "William Hindman",
        "description": "It is a picture of a deer from Berry Campus",
        "tools": "My mind",
        "pic": "pics/c40_160_13.png"
    },
    {
        "id": 14,
        "category": 41,
        "title": "woodstock ",
        "artist": "anonymouse",
        "description": NaN,
        "tools": "Pixie Engine Editor ",
        "pic": "pics/c41_160_14.png"
    },
    {
        "id": 15,
        "category": 42,
        "title": "Happy Halloween",
        "artist": "anonymouse",
        "description": NaN,
        "tools": "Pixieengine.com",
        "pic": "pics/c42_160_15.png"
    },
    {
        "id": 16,
        "category": 43,
        "title": "A flower with leaf and stem",
        "artist": "Oluwatofunmi Akisanya",
        "description": "This is an orange flower with a green stem and leaf.",
        "tools": "Pixel Engine Editor",
        "pic": "pics/c43_160_16.png"
    },
    {
        "id": 17,
        "category": 44,
        "title": "Sleepy Kirby",
        "artist": "Chloe Han",
        "description": "Kirby is ready for bed in Dream Land on the Warp Star",
        "tools": "Pixie Engine",
        "pic": "pics/c44_160_17.png"
    },
    {
        "id": 18,
        "category": 45,
        "title": "Squid Jump",
        "artist": "Merrett Willett",
        "description": "An inkling from Splatoon performing a super jump!",
        "tools": "Piskel",
        "pic": "pics/c45_160_18.gif"
    },
    {
        "id": 19,
        "category": 46,
        "title": "How The Grinch Stole Christmas",
        "artist": "Kayla Beasley",
        "description": "The grinch displays his newest ornament on his christmas tree.",
        "tools": "Pixilart.com",
        "pic": "pics/c46_160_19.png"
    },
    {
        "id": "a1",
        "category": 32,
        "title": "Voyager's Golden Record",
        "artist": "anonymouse",
        "description": "Hello from the children of Planet Earth",
        "tools": "Pixie Engine Editor",
        "pic": "pics/c32_160_a1.png"
    }
]
    ;
}