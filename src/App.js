import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/Data";

function App() {

  const cards= data.map(item => {
    return(
      <Card
      key={item.id}
      {...item}
      />
    );
  })
  return (
    <div className="App">
      <Navbar />
      <section className="Card--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
