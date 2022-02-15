import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import DonationFaqs from '../components/DonationFaqs';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import SupportLinks from '../components/SupportLinks';
import BlockText from '../components/BlockText';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);

  > div {
    &.description {
      margin-bottom: 16rem;

      @media (max-width: 700px) {
        margin-bottom: 4rem;
      }
    }
  }
`;

export default function SupportPage({ data: { support, balance } }) {
  return (
    <>
      <SEO title="Support" />
      <SectionStyles>
        <Heading title="Support" type="02" />
        <div className="body-large description">
          <BlockText rawText={support._rawText} />
        </div>
        <SupportLinks links={support.links.links} />
        <DonationFaqs faqs={support.faqSection.faqs} balance={balance.data} />
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    support: sanitySupport {
      id
      _rawText
      links {
        links {
          _key
          linkText
          linkUrl
          title
          image {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
      faqSection {
        faqs {
          answer
          question
        }
      }
    },
    
  }
`;
