import React from 'react'
import { books } from './books'
import Book from './Book'
const Booklist = () => {
        return ( <
            div className = "booklist" > {
                books.map((book, index) => {
                    return <Book key = { book.id } {...book } > < /Book>;
                })
            }

            <
            /div>);

        }

        export default Booklist