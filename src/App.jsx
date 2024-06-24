// import axios from "axios";
// import { useEffect, useState } from "react";

// import Slidbar from "./components/Slidbar";
import GenerativeAi from "./components/GenerativeAi";

function App() {
  // const [myData, setMyData] = useState([]);
  // const [error, setError] = useState("");

  // /* useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setError(error.message));
  // }, []); */

  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    /*     <div>
      <h1>Hello</h1>
      {error !== "" && <h2>{error}</h2>}
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        );
      })}
    </div> */
    // <h1>Hello</h1>
    <>
      <GenerativeAi />
    </>
  );
}

export default App;
