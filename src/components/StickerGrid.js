import React from 'react'
import { useFetchStickers } from '../hooks/useFetchStickers'
import StickerGridItem from './StickerGridItem'

const StickerGrid = ({ sticker }) => {

    const {data: images , loading} = useFetchStickers( sticker )
 
    return (
        <>
            <h3>{ sticker }</h3>

            { loading && <p className='card animate__animated animate__flash'>Loading...</p>  }

            <div className='card-grid'>
                    {
                        images.map( ( img ) => (
                        <StickerGridItem  key={ img.id } {...img} />
                        ))
                    } 
            </div>

        </>
    )
}

export default StickerGrid
