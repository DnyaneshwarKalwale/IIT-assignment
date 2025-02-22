const bigCats = [
  { id: 1, name: "Tiger", species: "Panthera leo", size: 250, location: "Savannah", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXciid4uPb9ZBHvt8Gbiif9rcfJE_0T5W4lefoEWm9efDf5derlgXw6WxsPojRamz1_MX5tHP1GzCCuu7ZyY9lFnaSreTSq8baJL9lcKzrkQ6vePktcGGZhb6DD7dbuhcdS-luGPow?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 2, name: "Lion", species: "Panthera tigris", size: 300, location: "Forest", image: "https://static.vecteezy.com/system/resources/thumbnails/026/975/383/small_2x/jaguar-in-nature-national-geography-wide-life-animals-ai-generated-photo.jpg" },
  { id: 3, name: "Leopard", species: "Panthera pardus", size: 200, location: "Mountain", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9YnhOhLOUBOrly21g067vrClVuRvxpxPNZi0S1wLbf-YKX80ZvyU6ZMkuMHpaCgp0BzKsNiZMzCmABbitdQxLI4du4DSfBk80dCfQJJ44B9luuGmh_k9tJeyB76lDHC-iSe2x?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 4, name: "Jaguar", species: "Panthera onca", size: 250, location: "Jungle", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFXIxHrIWQdTIx_rKPWljaRGcGrhPF1gSDlBsLHNiOcZO2cN2pwU3XYRszg0u9HX-BqJxsSUGAVANgwkcBrY97IPljuyS5w6zgyvzI-ECgd98m2iqLySutA_S7u822xJ7qdh7BRg?key=diMK_80ckKTiDYYhCkLD1Q" }
];

const bigDogs = [
  { id: 1, name: "Golden Retriever", species: "Canis lupus familiaris", size: 50, location: "Home", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXft3s3RGMGFvX4AzEZabvzkSoiT4CtWvb2DSAjAbIt6qseIsmrDBBgnhvrKOjL3VzWks_6nHPgpQXJjCrHkCP-csZKXHSpIHOMQR_0RHDjdGuEXnyGzr6pIm-TCs9VlaB8ESMoo?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 2, name: "German Shepherd", species: "Canis lupus familiaris", size: 60, location: "Home", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcvOdAwVRQ1BqsYydF-4zkOs6RKXqjL7wmdP4jJ-qS5jUWPaELnaZCijNdQ48RjFcHU-iUk8zg9u844Tn5kYrIqU-1jCJQn0S4zEYyPTizeLNEQmOUJG1EcdMkR7L4U2WSEfGZ_A?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 3, name: "Labrador Retriever", species: "Canis lupus familiaris", size: 55, location: "Home", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXefj_BNan53aqyBY2n3GfYpE305WUqEslgck8wYIkO2pBBX10tiQgoylQwE-Sgt-UnyFYnvxC7jwO4R5qDh6a6GJ51xM71-1KeF3KxpW7SVHtNpL6JFR37kTnuZsYg8tS9t6Sx8Xg?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 4, name: "Poodle", species: "Canis lupus familiaris", size: 40, location: "Home", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXef8Bjgf3gbLJ_UWd29zQSAP8tg5iyimQ-PdeEy2JJY6XTmOwitFwRjhSdtiaztoBX718dZ3-e_msblakHi4cva_GMiMw_17UN8Tpi_wRVYhvArKyvlQ3iuyw-TiRslr3YbLkcI1g?key=diMK_80ckKTiDYYhCkLD1Q" }
];

const bigFish = [
  { id: 1, name: "Blue Whale", species: "Balaenoptera musculus", size: 100, location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd8YrZJb2dyWzGSIT016PLjlJ7_WOZrTO9ReLD1bWn2sPt-wKpKx7l7awFC2RF_4Tm-RIjqO_1uISE_Q1PMdu7lR3M0kzA-cC-eF1OlLxEkMDWw_JeMQT-ykhrFcJdUH2MICRJCzQ?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 2, name: "Humpback Whale", species: "Megaptera novaeangliae", size: 80, location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd8YrZJb2dyWzGSIT016PLjlJ7_WOZrTO9ReLD1bWn2sPt-wKpKx7l7awFC2RF_4Tm-RIjqO_1uISE_Q1PMdu7lR3M0kzA-cC-eF1OlLxEkMDWw_JeMQT-ykhrFcJdUH2MICRJCzQ?key=diMK_80ckKTiDYYhCkLD1Q" },
  { id: 3, name: "Sperm Whale", species: "Physeter macrocephalus", size: 60, location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfDeAI-5lH_fIMehBbtyjeSqcT7MyHVH92QARUMw2ZJa_SSnr5sScCbrRmkrkbc90hL-1UlqTmGFrq-kqID4jhsnKfMNq1eXwAR0a0crxKwyJyyOOGSEcsLMWwuQmFDWZLg3sqh?key=diMK_80ckKTiDYYhCkLD1Q" },
  {id : 4, name: "Shark", species: "Selachimorpha", size : 50, location: "Ocean", image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf5uRGPuY-b1EhWGGLRVBZHbGdbXt7HqEZWC7BRlIhUlwI3f72-FqkjZ7cfuHjdU3a5UFyejWTS2ztbaj5-Eb0JKspLmkppe7pqcRtDfOfMvjLXVyG2GvywFexBdjyOKMr_Zc0G?key=diMK_80ckKTiDYYhCkLD1Q" }
];

class Animals {
  constructor() {
    this.animals = [
      ...bigCats.map(a => ({ ...a, category: 'Big Cats' })),
      ...bigDogs.map(a => ({ ...a, category: 'Dogs' })),
      ...bigFish.map(a => ({ ...a, category: 'Big Fish' })),
    ];
  }

  createAnimalCard(animal) {
    return `
      <div class="animal-col">
        <div class="animal-card">
          <div class="animal-card-body">
            <div class="animal-image-container">
              <img src="${animal.image}" alt="${animal.name}">
            </div>
            <div class="animal-card-details">
              <h5 class="animal-card-title">${animal.name}</h5>
              <p class="animal-card-text">
                Species: ${animal.species}, Size: ${animal.size}, Location: ${animal.location}
              </p>
              <div class="animal-buttons">
                <button class="animal-edit-button" onclick="animals.editAnimal(${animal.id}, '${animal.category}')">Edit</button>
                <button class="animal-delete-button" onclick="animals.deleteAnimal(${animal.id}, '${animal.category}')">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderTables() {
    const animalTablesContainer = document.getElementById('animal-tables');
    animalTablesContainer.innerHTML = Object.entries(this.animals.reduce((acc, a) => {
      if (!acc[a.category]) acc[a.category] = [];
      acc[a.category].push(a);
      return acc;
    }, {})).map(([category, animals]) => `
      <div class="animal-table">
        <h2>Category: ${category}</h2>
        <div class="animal-list">
          ${animals.map(a => this.createAnimalCard(a)).join('')}
        </div>
      </div>
    `).join('');
  }

  editAnimal(id, category) {
    const animal = this.animals.find(a => a.id === id && a.category === category);
    if (animal) {
      const form = document.getElementById('animal-form');
      form.querySelector('#edit-index').value = this.animals.indexOf(animal);
      form.querySelector('#category').value = category;
      form.querySelector('#species').value = animal.species;
      form.querySelector('#name').value = animal.name;
      form.querySelector('#size').value = animal.size;
      form.querySelector('#location').value = animal.location;
      form.querySelector('#image').value = animal.image;
    }
  }

  deleteAnimal(id, category) {
    const index = this.animals.findIndex(a => a.id === id && a.category === category);
    if (index !== -1) {
      this.animals.splice(index, 1);
      this.renderTables();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const index = form.querySelector('#edit-index').value;
    const category = form.querySelector('#category').value;
    const species = form.querySelector('#species').value;
    const name = form.querySelector('#name').value;
    const size = form.querySelector('#size').value;
    const location = form.querySelector('#location').value;
    const image = form.querySelector('#image').value;

    if (index === '') {
      this.animals.push({ id: this.animals.length + 1, name, species, size, location, image, category });
    } else {
      const animal = this.animals[index];
      animal.name = name;
      animal.species = species;
      animal.size = size;
      animal.location = location;
      animal.image = image;
    }

    this.renderTables();
    form.reset();
  }
}

const animals = new Animals();
animals.renderTables();
document.getElementById('animal-form').addEventListener('submit', (event) => animals.handleFormSubmit(event));
