import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_1280.jpg"
        alt=""
        tel="+90 533 193 4518"
      />
      <Card
        name="Jenny"
        src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg"
        alt=""
        tel="+90 533 193 3456"
      />
      <Card
        name="Danny"
        src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg"
        alt=""
        tel="+90 533 193 6565"
      />
      <Card
        name="Rany"
        src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
        alt=""
        tel="+90 533 193 6789"
      />
    </div>
  );
}

export default App;
