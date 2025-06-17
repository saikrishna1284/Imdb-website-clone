import React from "react";
import {useEffect ,useState} from "react";
import Header from '../components/Header';
import Banner from "../components/Banner";
import { categoryMovies } from "../services/api";
import { MOVIES_API_URL } from '../consonats/consonats';
import { Box ,styled} from "@mui/system";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";
 

const Wrapper = styled(Box)`
  display:flex;
  padding:20px 0;
`;
const Component = styled(Box)`
  padding:0 115px;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {   
    const getData = async () =>{
      let response = await categoryMovies(MOVIES_API_URL);
       setMovies(response.results);
    }
    getData();
   },[])
  return (
    <>
     <Header/>

      <Component>
        <Wrapper>
         <Banner movies={movies}/>
         <UpNext movies={movies}/>
        </Wrapper>
          <Slide movies={movies}/>
          <Slide movies={movies}/>
          <Slide movies={movies}/>
          <Slide movies={movies}/>
          <Slide movies={movies}/>
          

      </Component>
    </>
  )
}

export default Home
