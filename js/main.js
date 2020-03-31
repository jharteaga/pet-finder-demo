import { Client } from '@petfinder/petfinder-js';

const petForm = document.querySelector('#pet-form');

//Fetch animals from API
function fetchAnimals(e) {
  e.preventDefault();

  //Get user input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  const client = new Client({
    apiKey: 'xw5Ep51ErqO6MAru21udyz6ALBWZE6FxFOHYriotpg60duM2zQ',
    secret: 'yLK8V27fN3DQB84HBSlXXpBfts1tcBv3clvEm2vK'
  });

  //Fetch pets
  client.animal
    .search({
      type: animal,
      location: zip
    })
    .then((res) => showAnimals(res.data.animals))
    .catch((err) => console.log(err));
}

//Show listing of pets
function showAnimals(animals) {
  const result = document.querySelector('#results');

  //clear first
  results.innerHTML = '';
  //Loop through pets
  animals.forEach((animal) => {
    console.log(animal);
    const div = document.createElement('div');
    div.classList.add('card', 'card-body', 'mb-3');
    div.innerHTML = `
        <div class="row">
            <div class="col-sm-6">
                <h4>${animal.name} (${animal.age})</h4>
                <p class="text-secondary">${animal.breeds.primary}</p>
                <p>${
                  animal.contact.address.address1
                    ? animal.contact.address.address1
                    : ``
                } ${animal.contact.address.city}, ${
      animal.contact.address.state
    }, ${animal.contact.address.zip}</p>
                <ul class="list-group">
                    <li class="list-group-item">Phone: ${
                      animal.contact.phone
                    }</li>
                    ${
                      animal.contact.email
                        ? `<li class="list-group-item">Email: ${animal.contact.email}</li>`
                        : ``
                    }
                    <li class="list-group-item">Shelter ID: ${
                      animal.organization_id
                    }</li>
                </ul>
            </div>
            <div class="col-sm-6 text-center">
                <img class="img-fluid rounded-circle mt-2" src="${
                  animal.photos[0].medium
                }" alt="animal image" />
            </div>
        </div>
    `;

    results.appendChild(div);
  });
}

//Event listeners
petForm.addEventListener('submit', fetchAnimals);
