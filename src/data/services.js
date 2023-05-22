export function getAllApartments () {
    return fetch("/apartments.json")
            .then((response) => response.json())
};


export function getApartmentById(id) {
    return fetch('/apartments.json')
      .then((response) => response.json())
      .then((apartments) => apartments.find((apartment) => apartment.id === id));
  }