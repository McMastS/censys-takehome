const baseUrl = "http://localhost:8000/v1/keys";

const storeKeyValue = (key: string, value: string) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      key,
      value
    })
  };
  
  fetch(baseUrl, options)
    .then((response) => console.log(response));
};

const retrieveValue = (key: string) => {
  fetch(`${baseUrl}/${key}`)
    .then((response) => console.log(response));
};

const deleteKey = (key: string) => {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      key
    })
  };

  fetch(`${baseUrl}/${key}`, options)
    .then((response) => console.log(response));
};

export {
  deleteKey,
  retrieveValue,
  storeKeyValue,
}