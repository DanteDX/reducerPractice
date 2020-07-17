import React from 'react';
import SongList from './components/songList';

export default function App(){
  return(
    <div className="mainContainer">
      <SongList style={{backgroundColor:'#333'}} />
    </div>
  )
}