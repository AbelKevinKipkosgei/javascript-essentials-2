let images = [
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    dateOfCreation: 1503,
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    dateOfCreation: 1495,
  },
  {
    title: "Starry Night",
    artist: "Vincent van Gogh",
    dateOfCreation: 1889,
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    dateOfCreation: 1893,
  },
  {
    title: "Guernica",
    artist: "Pablo Picasso",
    dateOfCreation: 1937,
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    dateOfCreation: 1907,
  },
  {
    title: "Girl With a Pearl Earring",
    artist: "Johannes Vermeer",
    dateOfCreation: 1665,
  },
  {
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    dateOfCreation: 1485,
  },
  {
    title: "Las Meninas",
    artist: "Diego Velazquez",
    dateOfCreation: 1656,
  },
  {
    title: "The Creation of Adam",
    artist: "Michelangelo",
    dateOfCreation: 1512,
  },
];

images.forEach((image) => {
  console.log(`${image.title}, ${image.artist}, ${image.dateOfCreation}`);
});
