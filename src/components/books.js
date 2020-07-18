import React ,{ useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { v1, v4 } from 'uuid';

export default function Books(){
    const { books, dispatch } = useContext(BookContext);
    const addBook = ()=>{
        dispatch({type:'ADD_BOOK',book:{
            title:'ALgorithms',
            author:'Dipto',
            id: v4()
        }})
    }

    const deleteBook = () => {
        dispatch({type:'REMOVE_BOOK',id:1})
    }
    return(
        <div className="bookList">
            {
                books.map((book)=>{
                    return(
                        <li key={book.id}>{book.title}---{book.author}</li>
                    )
                })
            }

            <button onClick={addBook}>ADD</button>
            <button onClick={deleteBook}>DELETE</button>
        </div>
    )
}