import React from 'react'
import {apiKey} from '../contants/apiKey';

export const GiphyGrid = ({category}) => {

    const getGif = async() => {
        
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=spiderman`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        console.log(data);
        
        const gifs = data.map(img => {
            // debugger
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGif();

    return (
        <div>
            <h3> {category} </h3>
        </div>
    )
}
