import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const Giphy = () => {

  const [categories, setCategories] = useState(['a', 'b', 'c'])
  // const handleAdd = () => {
    // setCategories( cats => [...cats, 'HunterXHunter'] );
  // }

  return (
    <>
      <h2>Giphy App</h2>
      <AddCategory setCategories={setCategories }/>
      <hr />

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
