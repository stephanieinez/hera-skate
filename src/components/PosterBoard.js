import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../utils/device';
import GrassImage from '../images/grass.png';


const BoardContainer = styled.div`
position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
`

const Board = styled.div`
  background-color: white;
  height: 25rem;
  width: calc(100% - 2rem);
  max-width: 60rem;
  border: 2px black solid;
  border-top-left-radius: 16rem 1rem;
  border-top-right-radius: 1rem 14rem;
  border-bottom-right-radius: 14rem 1rem;
  border-bottom-left-radius: 1rem 16rem;
  z-index: 1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const BoardImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 16rem 1rem;
  border-top-right-radius: 1rem 14rem;
  border-bottom-right-radius: 14rem 1rem;
  border-bottom-left-radius: 1rem 16rem;
  height: 100%;
  width: 50%;
    
  &:last-child {
    display: none;
  }

  @media ${device.tablet} { 
    width: 33%;
    &:last-child {
        display: block;
      }
  }
`

const LegContainer = styled.div`
  width: 80%;
  max-width: 50rem;
  margin: -2rem 0;
  display: flex;
  justify-content: space-between;
`

const LegWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Leg = styled.div`
  background-color: white;
  height: 7rem;
  width: 1.5rem;
  border: 2px black solid;
`

const Grass = styled.img`
  transform: ${props => props.flip ? `rotateY(180deg)` : ''}; 
  z-index: 100;
  height: 7rem;
  width: 2rem;
`

const PosterBoard = ({ images }) => (
  <BoardContainer>
    <Board>
      {
        images.map((item, index) =>
          <BoardImage key={`posterimage-${index}`} src={item.image.url} />
        )
      }
    </Board>
    <LegContainer>
      <LegWrapper>
        <Leg />
        <Grass src={GrassImage} />
      </LegWrapper>
      <LegWrapper>
        <Grass flip src={GrassImage} />
        <Leg />
      </LegWrapper>
    </LegContainer>
  </BoardContainer>
)

PosterBoard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })),
};

export default PosterBoard
