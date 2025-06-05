const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.airtable.com/v0/appAeRLzbbbDJxPFN/Table%201?maxRecords=3&view=Grid%20view`;

const category = "";

const indexLatest = async (base) => {
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
