import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'
import useSWR from 'swr'
import {useRouter} from "next/router"
import Book from "../components/Book"

//function to fetch a particular URL and return the data as json 
//copy + paste to any project, basically always the same 
const fetcher = url => fetch(url).then(r => r.json())

export default function BookDetail() {
    const router = useRouter() //get access to our router object
    const { title } = router.query //gives us access to the end of the url 
    //localhost:3000/Lolita => title = "Lolita"
  //first param is the path of the api endpoint (what will be fetched)
  //second param is the fetcher function that should execute to get the data 
  const {data, error} = useSWR(`api/books/${title}`, fetcher)

  //any time fetching data, want 3 types of front end styled 
  
  //if the api encounters an error, this will render 
  if (error){
    return <Main>Error!</Main>
  }

  //if the data has not been resolved yet, this renders 
  if (!data || data.length === 0){ //could put a loading spinner/placeholder; can also set default data fetched before the page loads (see weather app)
    return <Main>Loading...</Main>
  }

  //if the data comes back as expected, this renders (ideal situation)
  return (
    <Container>
      <Head>
        <title>Better Reads</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Book title={data[0].title} author={data[0].author} link={data[0].link} pages={data[0].pages}></Book>
      </Main>
    </Container>
  )
}