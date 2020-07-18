import React, { useReducer,createContext } from 'react';
import {BookReducer} from '../reducers/BookReducer';
import {v4} from 'uuid';

export const BookContext = createContext();

export default function BookContextProvider(props){
    const [ books,dispatch ] = useReducer(BookReducer,[
        {title:'JS Programming',author:'Shadman Martin',id:1}
    ]);
    return(
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

