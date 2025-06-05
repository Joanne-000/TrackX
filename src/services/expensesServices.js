const BASE_URL = `https://api.airtable.com/v0/appAeRLzbbbDJxPFN/Table%201?maxRecords=3&view=Grid%20view`;

const indexAirtable = async () => {
  try {
    const respond = await fetch(BASE_URL, {
      headers: {
        Authorization:
          "Bearer patUQQwGtzMj4DbdX.d82f4212b6c59385bd111004b3426467a94fb086d9bfe1985cf6f8794ef13a01",
        "Content-Type": "application/json",
      },
    });

    if (!respond.ok) {
      throw new Error("Failed to fetch data");
    }

    const dataLatest = await respond.json();
    return dataLatest;
  } catch (error) {
    console.log(error);
  }
};

export { indexAirtable };
