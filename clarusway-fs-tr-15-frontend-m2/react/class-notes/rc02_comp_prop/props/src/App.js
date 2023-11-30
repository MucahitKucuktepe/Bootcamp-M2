import { Card } from "./components/card";

function App() {
  return (
    <div className="App">
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg"
        tel="+495567890034"
      />
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2023/11/24/19/11/road-8410533_1280.jpg"
        tel="+45473456735467"
      />
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg"
        tel="+236524562456"
      />
      <Card
        name="Ahmet"
        src="https://cdn.pixabay.com/photo/2023/11/24/19/11/road-8410533_1280.jpg"
        tel="5653462456235"
      />
    </div>
  );
}

export default App;
