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
  arrayOfImages.forEach((image) => {
    let imgElement = document.createElement("img");
    // create an image tag

    imgElement.src = image.url;
    imgElement.alt = image.alt;
    // set the img tag src to be image.url
    // set the alt to be image.alt

    // append to thumbcontainer
    thumbContainer.appendChild(imgElement);

    // imgElement.addEventListner("click", () => {
    //   //   console.log(image.alt);
    // });
  });
};
// function createDisplayImg(image) {
//   let displayContainer = document.createElement("img");
//   displayContainer.src = image.url;
//   displayContainer.src = image.alt;

// }

createThumbnails(images);
