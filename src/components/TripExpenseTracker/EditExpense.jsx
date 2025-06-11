import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { show } from "../../services/expensesServices";

const EditTrip = ({ editSavedData, savedData, rateData }) => {
  const { tripId } = useParams();
  const [selectedTrip, setSelectedTrip] = useState();
  console.log(tripId);

  useEffect(() => {
    const fetchTrip = async () => {
      const trip = await show(tripId);
      setSelectedTrip(trip);
      console.log(trip);
    };
    fetchTrip();
    // if(savedData){
    //   console.log(savedData)

    //   const currentTrip = savedData.filter(item => item.id === tripId)
    //   setSelectedTrip({
    //     // Date: currentTrip.fields.Date,
    //     // Code: currentTrip.fields.Code,
    //     // Expenses: currentTrip.fields.Expenses,
    //     // Converted: currentTrip.fields.Converted,
    //     // Base: currentTrip.fields.Base,
    //     // Rates: currentTrip.fields.Rates,
    //   })
    //   console.log(currentTrip)

    // }
  }, [tripId]);

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
