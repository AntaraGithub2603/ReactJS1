import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



/*function CoreConcept({title, description, image}) {
  return <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>

  </li>
}*/

function App() {
  

  return (
    <div>
      <Header />
      <main>
      <CoreConcepts />
    <Examples />
        
      </main>
    </div>
  );
}

export default App;
