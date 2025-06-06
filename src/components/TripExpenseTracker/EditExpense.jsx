const EditTrip = () => {
  return (
    <fieldset>
      <label>
        Date:<input type="date"></input>
      </label>
      <br />
      <label>
        Currency Code:<input type="text"></input>
      </label>
      <br />
      <label>
        Total Expenses:<input type="number"></input>
      </label>
      <br />
    </fieldset>
  );
};

export default EditTrip;
