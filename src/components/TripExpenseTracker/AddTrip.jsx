import { useState } from "react";
import { create } from "../../services/expensesServices";
import { useNavigate } from "react-router";
import { indexHistorical } from "../../services/currencyServices";

const AddTrip = ({ addSavedData, base }) => {
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
    const value = Intl.NumberFormat("en-US").format(
      Number(dataHistorical.rates[formData.Code]).toFixed(2),
    );
    const convertedAmount = Intl.NumberFormat("en-US").format(
      Number(formData.Expenses) * Number(value).toFixed(2),
    );

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
    <>
      <h2>Add your trip expenses</h2>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              name="Date"
              type="date"
              value={formData.Date}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Currency Code:
            <input
              name="Code"
              type="text"
              value={formData.Code}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <label>
            Total Expenses:
            <input
              name="Expenses"
              type="number"
              value={formData.Expenses}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </fieldset>
    </>
  );
};

export default AddTrip;
