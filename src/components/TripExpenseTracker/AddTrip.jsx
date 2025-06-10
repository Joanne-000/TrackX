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

const AddTrip = ({ rateData, addSavedData }) => {
  const baseRate = "SGD";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Date: "",
    Code: "SGD",
    Expenses: 1,
    Converted: "",
    Base: "",
    Rates: "",
  });
  const [dataHistorical, setHistorical] = useState();
  const [codes, setCodes] = useState();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (rateData) {
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
      Base: baseRate,
      [event.target.name]: event.target.value,
    });
    fetchData(baseRate, formData.Date);

    if (formData.Date !== "" && formData.Code !== "" && formData.Expenses > 0) {
      setDisabled(false);
    }
  };

  const setData = async () => {
    const value = Number(dataHistorical.rates[formData.Code]).toFixed(2);
    const convertedAmount = (
      Number(formData.Expenses).toFixed(2) / value
    ).toFixed(2);

    const data = await create({
      ...formData,
      Rates: value,
      Converted: convertedAmount,
    });

    addSavedData(data);
    setFormData({
      Date: "",
      Code: "SGD",
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
            Base Currency:
            <select name="Code" type="text" value={formData.Base} disabled>
              <option>{formData.Base}</option>
            </select>
          </label>
          <br />
          <br />
          <label>Your trip details:</label>
          <br />
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
          <br />

          <button type="submit" disabled={disabled}>
            Add
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default AddTrip;
