import React,{useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const[tours,setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id); {/* agr tour.id ka id aur removeTour ka id alg hai  to usko filter krke newTours me daal dena
                                                               kyuki removeTour me hm wo jgh daal rhe hai jo not interested me hai*/}
    setTours(newTours);
  }

  if(tours.length==0){  /*mtlb hmne sara card hta diya hai to kya dikhna chaheye */
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className="App">
       <Tours tours={tours} removeTour = {removeTour}></Tours>  {/*as a prop tours naam ka component pass kr diye Tours me aur remove tour v*/}
    </div>
  )
};

export default App;
