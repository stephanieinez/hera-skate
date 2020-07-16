import React from "react"
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventContainer = styled.div`
  margin: 5rem 2rem 2rem 2rem;
`

const TitleImage = styled.img`
 width: 10rem;
`

const EventWrapper = styled.div`
  display: flex;
`

const DateAndTime = styled.p`
  font-weight: bold;
`

const Event = styled.p`
  margin-left: 1rem; 
`

const Events = ({ events, titleImage, titleText }) => (
  <EventContainer>
    <TitleImage src={titleImage} alt={titleText} />
    {
      events.map((event, index) =>
        <EventWrapper>
          <h3>
            {new Date(event.dateAndTime).toLocaleDateString()}
            @ {new Intl.DateTimeFormat("en", {
              timeStyle: "short"
            }).format(new Date(event.dateAndTime))}:
          </h3>
          <h3>
            {event.description}
          </h3>
        </EventWrapper>
      )
    }
  </EventContainer>
)

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    dateAndTime: PropTypes.string
  })),
  titleImage: PropTypes.string,
  titleText: PropTypes.string,
};

export default Events