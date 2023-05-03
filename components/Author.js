import styled from 'styled-components'

export default function Author({name, country, book}){
    return <AuthorWrapper>
        <AuthorName>{name}</AuthorName>
        <CountryText>From: {country}</CountryText>
        <BookTitles>One book they wrote is: {book}</BookTitles>
    </AuthorWrapper>
}

const AuthorWrapper=styled.article`
border: 15px solid #a67f65; 
border-radius: 10px; 
padding: 1.75rem;
font-size: 1.55rem;
margin: 0.55rem;
background-color: #fff;
color: #4a2812;
max-width: 500px;
`

const AuthorName = styled.h2`
font-family: serif;
font-size: 3rem;`

const CountryText = styled.p`
font-family: sans-serif`

const BookTitles = styled.p`
font-family: sans-serif`