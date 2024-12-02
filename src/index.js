const axios = require('axios');

// A helper method to pick one value from a list
const getRandomValue = (values) => {
  const index = Math.floor(Math.random() * values.length);
  return values[index];
};

// Helper method to retrieve a list of breeds
// https://dog.ceo/dog-api/documentation/
// returns a Promise to an array of breed names

const getBreeds = () => {
  return axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
      return Object.keys(response.data.message);
    })
    .catch((error) => {
      console.log(error, 'error!');
    });
};
getBreeds()
  .then(breeds => {
    console.log(breeds);
  });

// Helper method to retrieve a random image for a
// specified breed
// https://dog.ceo/dog-api/documentation/breed
// RANDOM IMAGE FROM A BREED COLLECTION
// returns a Promise to a url (string)

const getRandomImageForBreed = (breed) => {
  return axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => {
      return response.data.message;
    })
    .catch((error) => {
      console.log(error, 'error!');
    });
};
getRandomImageForBreed('hound')
  .then(image => {
    console.log(image);
  });

// use our other helpers to make a function that returns
// a random image from a random breed
// returns a Promise to a url (string)

const getRandomDogImage = () => {
  // implement me!
};

// This is the call we would like to make work
// This function should return a Promise to a url (string)
// getRandomDogImage()
//   .then(url => {
//     console.log(url);
//   });
