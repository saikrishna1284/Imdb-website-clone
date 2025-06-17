
import { Box,Typography, styled } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
  width:40%;
  display:flex;
  flex-direction:column;
  align-items:baseline;
  padding-left:25px;
  & > p{
    color:yellow;
    font-weight: 600;
    font-size:18px;
    margin-bottom:10px;
  }
`;
const Poster = styled('img')({
    width:77
    
});

const Wrapper = styled(Box)`
 color:#FFFFFF;
 display:flex;
 & > p{
    margin-left:20px;
 }
`

const UpNext = ({movies}) => {
  return (
    <div>
      <Component>
         <Typography>UPNext</Typography>
         {
             movies.splice(0,3).map(movie =>(
            <Wrapper>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
                <Typography>{movie.original_title}</Typography>
            </Wrapper>

             ))
         }
      </Component>
    </div>
  )
}

export default UpNext
