import { useReducer} from "react";
import { reducer, initialState } from "./reducer";

const UseReducerExample = () => {
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, catImage } = state;
  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true);
    //? 1. İsteğin başladığı aşama (START)
    dispatch({ type: "START", payload: "" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setCatImage(data[0].url);
      // setError("");
      //? 2. İsteğin başarılı bitti aşama (SUCCESS)
      dispatch({ type: "SUCCESS", payload: data[0].url });
    } catch (error) {
      // setError("DATA CAN NOT BE FETCHED");
      // setCatImage("");
      //? 3. İsteğin başarısız bitti aşama (FAİL)
      dispatch({ type: "FAİL", payload: "DATA CAN NOT BE FETCHED" });
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };
  console.log(error);
  console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducerExample;
