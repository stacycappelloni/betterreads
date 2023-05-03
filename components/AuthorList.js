import styled from "styled-components"
import Author from "./Author"

function inKeys(authorNameList, name, authorCountries, country){
    for (let index = 0; index < authorNameList.length; ++index){
        if (authorNameList[index] == name && authorCountries[index] == country){
            return true;
        }
    }
    return false;
}

export default function AuthorList({authors}){
    authors.books = []
    const authorData = []
    const authorKeys = []
    const authorCountries = []
    for (let index = 0; index < authors.length; ++index){
        if (!(inKeys(authorKeys, authors[index].author, authorCountries, authors[index].country))){
            authorKeys.push(authors[index].author);
            authorCountries.push(authors[index].country);
            authorData.push(authors[index]);
        }

    }

    return <Wrapper>
        {authorData.map(a => <Author name={a.author} country={a.country} book={a.title}/>)}
    </Wrapper>
}

const Wrapper = styled.div`
display: flex; 
flex-direction: row; 
flex-wrap: wrap;`