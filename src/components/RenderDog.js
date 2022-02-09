import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

function RenderDog({name, image, isGoodDog, showRenderDog, id }) {
const [goodDog, setGoodDog] = useState(isGoodDog)
    
function handleGoodDog () {
    setGoodDog(goodDog => !goodDog)
    
}

useEffect(() => {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        isGoodDog: goodDog,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}, [goodDog])

  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {showRenderDog 
        ? <div id="dog-info">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            {goodDog ? <button onClick={handleGoodDog}>Good Dog!</button> : <button onClick={handleGoodDog}>Bad Dog!</button>}
        </div>
        : null
    }
    </div>
  )
}

export default RenderDog