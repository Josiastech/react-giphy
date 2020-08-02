import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiphyGrid } from './components/GiphyGrid'


export const Giphy = () => {

  const [categories, setCategories] = useState(['a', 'b', 'c'])
  // const handleAdd = () => {
    // setCategories( cats => [...cats, 'HunterXHunter'] );
  // }

  return (
    <>
      <h2>Giphy React</h2>
      <AddCategory setCategories={setCategories }/>
      <hr />

      <ol>
        {
          categories.map( category => (
            <GiphyGrid key={category} category={category}></GiphyGrid>
            )
          )
        }
      </ol>
    </>
  )
}
