const GCER = () => {
  return (
    <>
      <h3>Global Currency Exchange Rate</h3>
      <p>Last update: date & time</p>
      <br />
      <div>
        From:
        <select>
          <option>SGD</option>
        </select>
      </div>
      <br />
      <div>
        Amount:
        <input type="number" defaultValue={1} />
      </div>
      <br />
    </>
  );
};

export default GCER;
