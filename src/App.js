import './App.css';

//the below two lines are to import the react-slick and carousal. By importing it here we could get it in all our pages because of the parent -> child inhertance 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
