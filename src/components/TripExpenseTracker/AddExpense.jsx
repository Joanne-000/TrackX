import { useState } from "react";
import { create } from "../../services/expensesServices";
import { useNavigate } from "react-router";

const AddTrip = ({ addSavedData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Date: "",
    Code: "",
    Expenses: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await create(formData);
    addSavedData(data);
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
