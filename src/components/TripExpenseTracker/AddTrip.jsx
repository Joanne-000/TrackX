import { useState, useEffect } from "react";
import { create } from "../../services/expensesServices";
import { useNavigate } from "react-router";
import { indexHistorical } from "../../services/currencyServices";

const div = {
  padding: "0px 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  alignItems: "center",
};

const divFieldset = {
  width: "fit-content",
  display: "flex",
  justifyContent: "center",
};

const today = new Date().toISOString().split("T")[0];

const AddTrip = ({ rateData, addSavedData, base }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Date: "",
    Code: "",
    Expenses: "",
    Converted: "",
    Base: "",
    Rates: "",
  });
  const [dataHistorical, setHistorical] = useState();
  const [codes, setCodes] = useState();

  useEffect(() => {
    if (rateData) {
      console.log(Object.keys(rateData).sort());
      setCodes(Object.keys(rateData).sort());
    }
  }, [rateData]);

  const fetchData = async (base, date) => {
    const data = await indexHistorical(base, date);
    setHistorical(data);
  };

  const handleChange = async (event) => {
    setFormData({
      ...formData,
      Base: base,
      [event.target.name]: event.target.value,
    });
    fetchData(base, formData.Date);
  };

  const setData = async () => {
    const value = Number(dataHistorical.rates[formData.Code]).toFixed(2);
    const convertedAmount = (Number(formData.Expenses) * value).toFixed(2);

    const data = await create({
      ...formData,
      Rates: value,
      Converted: convertedAmount,
    });

    addSavedData(data);
    console.log(data);
    setFormData({
      Date: "",
      Code: "",
      Expenses: "",
      Converted: "",
      Base: "",
      Rates: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData();

    navigate("/TripExpensesTracker");
  };

  return (
    <div style={div}>
      <h2>Add your trip expenses</h2>
      <fieldset style={divFieldset}>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              name="Date"
              type="date"
              value={formData.Date}
              onChange={handleChange}
              max={today}
            ></input>
          </label>
          <br />
          <label>
            Currency Code:
            <select
              name="Code"
              type="text"
              value={formData.Code}
              onChange={handleChange}
            >
              {codes &&
                codes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
            </select>
          </label>
          <br />
          <label>
            Total Expenses:
            <input
              name="Expenses"
              type="number"
              min="1"
              value={formData.Expenses}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddTrip;
