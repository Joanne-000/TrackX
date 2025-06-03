const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.currencybeacon.com/v1`;

const category = "";
const base = "SGD";

const indexLatest = async () => {
  const category = "latest";
  const url =
    BASE_URL + "/" + category + "?api_key=" + API_KEY + "&base=" + base;

  try {
    const respond = await fetch(url);

    if (!respond.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataLatest = await respond.json();
    return dataLatest;
  } catch (error) {
    console.log(error);
  }
};

const indexHistorical = async (date) => {
  const category = "historical";

  const url =
    BASE_URL +
    "/" +
    category +
    "?api_key=" +
    API_KEY +
    "&base=" +
    base +
    "&date=" +
    date;

  try {
    const respond = await fetch(url);

    if (!respond.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataHistorical = await respond.json();
    return dataHistorical;
  } catch (error) {
    console.log(error);
  }
};

export { indexLatest, indexHistorical };
