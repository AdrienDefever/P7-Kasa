export default function getAllApartments () {
    return fetch("/apartments.json")
            .then((response) => response.json())
};

