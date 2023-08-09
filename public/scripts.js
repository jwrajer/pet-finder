const fetchPets = async() => {
  try {
    const response = await fetch (`/pets`)
    const data = await response.json();
    renderPets(data);
  } catch (err) {
    console.log(err)
  }
}

const renderPets = async(input) => {
  const container = document.querySelector(`#root`);
  const ul = document.createElement(`ul`);
  const petList = input.map( pet => {
    return `<ul><h2>${pet.name}</h2>
    <li>Owner: ${pet.owner}</li>
    <li>Breed: ${pet.breed}</li>
    <li>Age: ${pet.age}</li>
    </ul>`
  })
  container.append(ul);
  ul.innerHTML = petList;
}


const init = () => {
  fetchPets();
}

init();