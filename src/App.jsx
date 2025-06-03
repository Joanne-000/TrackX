import { indexLatest, indexHistorical } from "./services/currencyServices";
import Homepage from "./pages/Homepage";
import GCER from "./pages/GCER";
import TET from "./pages/TET";

export default function App() {
  const handleLatest = () => {
    const fetchData = async () => {
      const dataLatest = await indexLatest();
      console.log("dataLatest", dataLatest);
    };
    fetchData();
  };

  const handleHistorical = () => {
    const fetchData = async () => {
      const dataHistorical = await indexHistorical("2025-03-02");
      console.log("dataHistorical", dataHistorical);
    };
    fetchData();
  };

  return (
    <>
      <button onClick={handleLatest}>Check Latest data</button>
      <button onClick={handleHistorical}>
        Check Historical data 2025-03-05
      </button>
      <br />

      <Homepage />
      <GCER />
      <TET />
    </>
  );
}
