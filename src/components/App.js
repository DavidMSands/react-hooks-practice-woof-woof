import React, { useState, useEffect} from "react";
import DogBar from "./DogBar";
import RenderDog from "./RenderDog";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})
  const [filterDogs, setFilterDogs] = useState([])
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [showRenderDog, setShowRenderDog] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(data => {
      setDogs(data)
      setFilterDogs(data)
    })
  }, [])
  
  function handleSlectedDog (id) {
   const currentDog = dogs.filter(dog => dog.id === id) 
   setSelectedDog(currentDog[0])
   if(showRenderDog === false) {
    setShowRenderDog(true)
    }
  }

  function handleFilterDogs () {
    if(isFilterOn) {
      setFilterDogs(dogs)
      setIsFilterOn(false)
    } else {
      const goodDogs = dogs.filter(dog => dog.isGoodDog === true)
      setIsFilterOn(true)
      setFilterDogs(goodDogs)
    }
  }
  

  return (
    <div className="App">
      <Filter handleFilterDogs={handleFilterDogs} isFilterOn={isFilterOn} />
      <DogBar dogs={filterDogs} handleSlectedDog={handleSlectedDog} />
      <RenderDog 
      name={selectedDog.name} 
      image={selectedDog.image} 
      id={selectedDog.id}
      isGoodDog={selectedDog.isGoodDog}
      showRenderDog={showRenderDog}
      />
    </div>
  );
}

export default App;
