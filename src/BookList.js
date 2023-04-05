import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css'
import './BookCover.css'

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/books')
      .then(response => {
        setBooks(response.data.map(book => ({
          id: book.isbn,
          title: book.name,
          author: book.authors[0],
          year: book.released.slice(0, 4)
        })));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
	<div class="book">
		<div class="book-cover">
			<div>
				<h1>Mr. Jegan</h1>
				<div class="separator"></div>
				<h2>by Whitewholf</h2>
			</div>
		</div>
		<div class="book-content">
        <div className="book-list-container">
     <center><h1>Book List</h1></center> 
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <h2 className="book-title">{book.title}</h2>
            <p className='book-id'>ID: {book.id}</p>
            <p className="book-author">Author: {book.author}</p>
            <p className="book-year">Year: {book.year}</p>
          </li>
        ))}
      </ul>
    </div>
		</div>
	</div>
</main>
    
  );
}

export default BookList;



