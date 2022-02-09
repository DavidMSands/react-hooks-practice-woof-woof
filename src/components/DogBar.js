import React from 'react'
import Dog from './Dog'

function DogBar({ dogs, handleSlectedDog }) {
  return (
    <div id="dog-bar">
        {dogs.map(dog => (
            <Dog name={dog.name} isGoodDog={dog.isGoodDog} id={dog.id} handleSlectedDog={handleSlectedDog} />
        ))}
        
    </div>
  )
}

export default DogBar
