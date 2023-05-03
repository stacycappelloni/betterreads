import styled from "styled-components"
import Book from "./Book"

export default function BookList({books}){

    return <Wrapper>
        {books.map(b => <Book title={b.title} author={b.author} pages={b.pages} link={b.link}/>)}
    </Wrapper>
}

const Wrapper = styled.div`
display: flex; 
flex-direction: row; 
flex-wrap: wrap;`