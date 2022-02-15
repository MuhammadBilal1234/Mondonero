import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import moment from 'moment';

const SectionStyles = styled.section`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }

  & > div {
    margin: 8rem 0;
  }

  .body-medium {
    font-size: 3.5rem;
  }
  
  .heading-02 {
    font-size: 5rem;
  }
  
  @media (max-width: 700px) {
    .body-medium {
      font-size: 1.8rem;
    }

    .heading-02 {
      font-size: 3rem;
    }
  }

  .item {
    margin-top: 2rem;
    display: grid;
    grid-gap: 2rem;

    @media (max-width: 700px) {
      margin-top: 2rem;
      grid-gap: 1rem;
    }
  }

  @media (min-width: 700px) {
    .row {
      grid-gap: 6rem;
    }
  }

  .row {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 1fr auto;

    p {
      text-transform: uppercase;
    }
  }
`;

// This was previously for only two days, but I updated it to be 7 days instead of 2.
// No loop used as I didnt want to rewrite the switch from 2 to 7 days.

export default function ScheduleTable({ events }) {
  const day1 = moment().format('YYYY-MM-DD');
  const day2 = moment().add(1, 'days').format('YYYY-MM-DD');
  const day3 = moment().add(2, 'days').format('YYYY-MM-DD');
  const day4 = moment().add(3, 'days').format('YYYY-MM-DD');
  const day5 = moment().add(4, 'days').format('YYYY-MM-DD');
  const day6 = moment().add(5, 'days').format('YYYY-MM-DD');
  const day7 = moment().add(6, 'days').format('YYYY-MM-DD');

  const eventsDay1 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day1) > -1
  );
  const eventsDay2 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day2) > -1
  );
  const eventsDay3 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day3) > -1
  );
  const eventsDay4 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day4) > -1
  );
  const eventsDay5 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day5) > -1
  );
  const eventsDay6 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day6) > -1
  );
  const eventsDay7 = events.filter(
    (event) => event.node.start.dateTime.indexOf(day7) > -1
  );

  return (
    <SectionStyles>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day1}
        </Moment>
        <div className="item">
          {eventsDay1.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day2}
        </Moment>
        <div className="item">
          {eventsDay2.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day3}
        </Moment>
        <div className="item">
          {eventsDay3.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day4}
        </Moment>
        <div className="item">
          {eventsDay4.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day5}
        </Moment>
        <div className="item">
          {eventsDay5.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day6}
        </Moment>
        <div className="item">
          {eventsDay6.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Moment className="heading heading-02" format="DD.MM.YYYY">
          {day7}
        </Moment>
        <div className="item">
          {eventsDay7.map((event) => (
            <div className="body-medium row" key={event.node.id}>
              <p>{event.node.summary}</p>
              <div>
                <Moment format="kk:mm">{event.node.start.dateTime}</Moment>-
                <Moment format="kk:mm">{event.node.end.dateTime}</Moment>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionStyles>
  );
}
