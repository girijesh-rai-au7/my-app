import React from 'react'
import Book from './Book'
import {bookarray} from './bookarray.js'

const Booklist = () =>{
    
    return(
        <section>
        {bookarray.map((book )=>{
            return(
                <Book key = {book.id} {...book} />
            );
        })}
        </section>
    
    );
}
export default Booklist