import React from 'react'

function Filter({handleFilterDogs, isFilterOn}) {
  return (
    <div id="filter-div">
        {isFilterOn 
        ? <button id="good-dog-filter" onClick={handleFilterDogs}>Filter good dogs: ON</button> 
        : <button id="good-dog-filter" onClick={handleFilterDogs}>Filter good dogs: OFF</button>
}
    </div>
  )
}

export default Filter