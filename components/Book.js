import styled from 'styled-components'

export default function Book({title, author, pages, link}){
    return <BookWrapper>
        <BookTitle>{title}</BookTitle>
        <h3>by {author}</h3>
        <p>Number of pages: {pages}</p>
        <a href={link}>Learn More</a>
    </BookWrapper>
}

const BookWrapper=styled.article`
border: 15px solid #a67f65; 
border-radius: 10px; 
padding: 1.75rem;
font-size: 1.55rem;
margin: 0.55rem;
background-color: #fff;
color: #4a2812;
max-width: 500px
`

const BookTitle = styled.h1`
font-family: serif;
font-size: 3rem;`

