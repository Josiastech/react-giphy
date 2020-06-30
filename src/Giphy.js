import React, { useState } from 'react'

export const Giphy = () => {

  const [categories, setCategories] = useState(['a', 'b', 'c'])
  const handleAdd = () => {
    setCategories( cats => [...cats, 'HunterXHunter'] );
  }

  return (
    <>
      <h2>Giphy App</h2>
      <hr />

      <button onClick={handleAdd}>Click </button>

      <ol>
        {
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
