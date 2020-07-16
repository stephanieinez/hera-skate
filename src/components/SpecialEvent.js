import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`

const EventContent = styled.img`
  width: calc(100% - 2rem);
  max-width: 50rem;
`

const SpecialEvent = ({ image, url }) => (
  <a href={url}>
    <EventContainer>
      <EventContent src={image} alt="" />
    </EventContainer>
  </a>
)

SpecialEvent.propTypes = {
  image: PropTypes.string,
  url: PropTypes.string
};

export default SpecialEvent
