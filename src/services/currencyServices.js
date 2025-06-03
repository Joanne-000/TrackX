const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.currencybeacon.com/v1`;

const category = "";
const url = BASE_URL + "/" + category + "?api_key=" + API_KEY;

const index = async () => {
  try {
    const respond = await fetch(url);

    if (!respond.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await respond.json();
    console.log("service");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

await index();

// export { index };
