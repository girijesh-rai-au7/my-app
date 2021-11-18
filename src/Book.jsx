import React from 'react';
const Book = (props) =>{
  const{author,image ,id} = props;
  const clickHandler = (author)=>{
    console.log(author)
  }
    return (
      <div>
      <h3>{id}</h3>
      <h1 onClick = {() => console.log(author)}>{author}</h1>
      <img  src = {image} alt = '' />
      <button onClick = {()=>clickHandler(author)}>  Clickme</button>
      

      </div>);
  }
  export default Book;