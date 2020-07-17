import React,{ useState } from 'react';
import Form from './form';
import {v4} from 'uuid';

export default function SongList(){
    const [ songs,setSongs ] = useState([]);
    const passValue = (something)=>{
        setSongs([...songs,{title:something,key:v4()}])
    }

    const handleDelete = (tt) => {
        let song1 = songs.filter(function(song){
            return song.title !== tt
        }); 
        setSongs(song1);
    }

    return(
        <div className="songList">
            <ul>
                {
                    songs.map(function(song){
                        return(
                            <div key={song.key}>
                                <li>{song.title}</li>
                                <button onClick={()=> {handleDelete(song.title)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </ul>

            <Form passValue={passValue} />
            
        </div>
    )
}