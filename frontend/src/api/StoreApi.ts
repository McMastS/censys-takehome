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
    .then((result) => {
      if (!result.ok) {
        throw new Error("Error storing key");
      }
    });
};

const retrieveValue = async (key: string) => {
  return await fetch(`${baseUrl}/${key}`)
    .then(
      (result) => {
        if (result.status === 404) {
          return { key: key, value: "" };
        }

        if (!result.ok) {
          throw new Error("Error retrieving key");
        }

        return result.json();
      }
    );
};

const deleteKey = async (key: string) => {
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

  return await fetch(`${baseUrl}/${key}`, options)
    .then((result) => {
      if (result.status === 404) {
        return false;
      }

      if (!result.ok) {
        throw new Error("Error deleting key");
      }

      return true;
    });
};

export {
  deleteKey,
  retrieveValue,
  storeKeyValue,
}