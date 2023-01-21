import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="/images/luca-movie.jpg" />
            </Background>
            <ImageTitle>
                <img src="/images/luca-pixar.webp" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButon>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButon>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                <img src="/images/group-icon.png" />
                </GroupButton>
            </Controls>
            <SubTitle>
                1 hr 35 min - 2021 - Animation - U/A7+
            </SubTitle>
            <Description>
                The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 30vw;
    min-width: 200px;
    max-width: 300px;

    img{
        
        width: 70%;
        height:100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0 15px;
margin-right: 22px;
display: flex;
align-items: center;
height: 50px;
background: rgb(240, 240, 240);
border: none;
letter-spacing: 1.5px;
cursor: pointer;


&:hover{
    background: rgb(198, 198, 198);
}

`

const TrailerButon = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(240, 240, 240);
    color: rgb(240, 240, 240);
    
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgb(240, 240, 240);
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;
    }
`

const GroupButton = styled(AddButton)`
    background: rgba(0, 0, 0, 0.8);

`
const SubTitle = styled.div`
    color: rgb(240, 240, 240);
    font-size: 15px;
    min-height: 20px;
    margin-top: 25px;
`

const Description = styled.div`
        line-height: 1.4;
        font-size: 19px;
        margin-top: 16px;
        color: rgb(240, 240, 240);
`

