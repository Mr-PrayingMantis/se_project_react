const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = () =>
  fetch(`${baseUrl}/items`, { headers }).then(checkResponse);

export const addItem = ({ name, imageUrl, weather }) => {
    return fetch(`${baseUrl}/items`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    }).then(checkResponse);
    };
    
const deleteItem = (itemID) => {
    return fetch(`${baseUrl}/items/${itemID}`, {
      method: "DELETE",
      headers,
    }).then(checkResponse);
    };
    