import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import NewHotstar from './NewHotstar'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import { collection, onSnapshot } from 'firebase/firestore'


function Home() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName);
  let recommends = []; 
  let newHotstars = []; 
  let originals = []; 
  let trending = [];
  
  useEffect(() => {
    const collectionRef = collection(db, "movies");

    onSnapshot(collectionRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type){
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data()} ]
            break;

          case 'new' :
            newHotstars = [...newHotstars, { id: doc.id, ...doc.data()} ]
            break;

            case 'original':
              originals = [...originals, { id: doc.id, ...doc.data()} ]
              break;

            case 'trending' :
              trending = [...trending, { id: doc.id, ...doc.data()} ]
              break;
        }
      });

      dispatch(
        setMovies({
          recommend : recommends,
          newHotstar : newHotstars,
          original: originals,
          trending: trending,
        })
      );
    }); 
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <NewHotstar />
      <Originals />
      <Trending />
    </Container>
  )
}

export default Home

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
