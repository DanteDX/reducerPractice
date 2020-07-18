import React from 'react';
import Books from './components/books';
import BookContextProvider from './contexts/BookContext';

export default function App(){
  return(
    <div className="App">
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  )
}