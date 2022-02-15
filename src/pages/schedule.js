import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import ScheduleTable from '../components/ScheduleTable';
import SEO from '../components/SEO';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function SchedulePage({ data }) {
  const events = data.schedule.edges;

  return (
    <>
      <SEO title="Schedule" />
      <SectionStyles>
        <Heading style={{margin: '1em auto 0em auto'}} title="Schedule" type="02" />
        <ContainerStyles>
          <ScheduleTable events={events} />
        </ContainerStyles>
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query {
    schedule: allCalendarEvent {
      edges {
        node {
          summary
          start {
            dateTime
          }
          end {
            dateTime
          }
          id
        }
      }
    }
  }
`;
