import { useEffect, useState } from "react"
import { getStickers } from '../helpers/getStickers'

export const useFetchStickers = ( sticker ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getStickers( sticker )
            .then( imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    }) 
            })
    }, [ sticker ])


    

    return state
}
