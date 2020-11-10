import { useState } from 'react';
import './App.css';
import AddSticker from './components/AddSticker';
import StickerGrid from './components/StickerGrid';

function App() {

  const [stickers, setStickers] = useState(['The Simpsons'])
  
  return (
    <>
      <h2>Sticker App</h2>
      <AddSticker setStickers={ setStickers } />
      <hr/>
        <ol>
          {
            stickers.map( sticker => (
                <StickerGrid key={ sticker } sticker={ sticker } />
            ))
          }
        </ol>
    </>
  )
}

export default App

