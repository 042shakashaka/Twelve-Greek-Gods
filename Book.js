import React from 'react'

const Book = (props) => {
    const { img, title, character, button, description } = props;
    const clickHandler = () => { alert('hello world') };
    return (<
        article className="book">
        <img className="img" src={img}
            alt="" />
        <h1> {character} </h1>
        <h2> {title} </h2>
        <h3 className='description'>{description}</h3>
        <button className="btn" onClick={clickHandler}>{button}</button>
    </article>
    );
};


export default Book