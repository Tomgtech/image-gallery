let thumbContainer = document.getElementById("thumb-container");
let displayImage = document.getElementById("display");

let images = [
  {
    url: `./images/alex-nicolopoulos-4S8FQPziekE-unsplash.jpg`,
    alt: `A liminal space, car park`,
  },

  {
    url: `./images/brandon-holmes-GofYo51GQ_4-unsplash.jpg`,
    alt: `A liminal space, neon blue reception`,
  },

  {
    url: `./images/dynamic-wang-HEIUW9mM6_Q-unsplash.jpg`,
    alt: `A liminal space, empty room`,
  },

  {
    url: `./images/markus-spiske-hsewaOcmAlE-unsplash.jpg`,
    alt: `A liminal space, the underground`,
  },

  {
    url: `./images/prateek-katyal-Ig9qwvgknLI-unsplash.jpg`,
    alt: `A liminal space, dark neon green hallway`,
  },

  {
    url: `./images/sam-operchuck-aaTFObM39wo-unsplash.jpg`,
    alt: `A liminal space, empty shopping centre escilator`,
  },
];

const createThumbnails = (arrayOfImages) => {
  // it then loops through the arrayOfImages using forEach (which takes a callback function which in this case image is a parameter of the arrow function that has been used instead of a callback function)
  arrayOfImages.forEach((image) => {
    // this line is the same as writing .forEach(function(image))
    // creates an image tag (in the HTML)
    let imgElement = document.createElement("img");
    // sets the image tag's src to be image.url
    imgElement.src = image.url;
    // sets alt to be image.alt
    imgElement.alt = image.alt;
    // add a class to the image element for styling
    // imgElement.classList.add("thumbnail-image");
    // appends this imageElement to the thumbnail container (so that it appears on the page)
    imgElement.classList.add("thumbnail-image");
    thumbContainer.appendChild(imgElement);
    // add an event listner to the image that has been created so that when you click it, it appears as the main image
    imgElement.addEventListener("click", () => {
      createDisplayImg(image); // image represents each individual image object from the 'array of images'
    });
  });
};

// const displayImage.createElement ("img")

// a function that creates a display image when the thumbnail image is clicked
function createDisplayImg(image) {
  displayImage.innerHTML = "";
  let displayImage2 = document.createElement("img");
  displayImage2.src = image.url;
  displayImage2.alt = image.alt;
  displayImage.classList.add("display-image");
  displayImage.appendChild(displayImage2);
}

createThumbnails(images);
