import React from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Heading from './Heading';

const SectionStyles = styled.section`
  h2 {
    @media (max-width: 700px) {
      margin-bottom: 4rem;
    }
  }
`;

const AccordionStyles = styled.div`
  .item {
    padding-bottom: 6rem;
    border-bottom: 1px solid var(--text);

    @media (max-width: 700px) {
      padding-bottom: 2rem;
    }

    &:not(:first-of-type) {
      margin-top: 6rem;
    }

    &__button {
      width: 100%;
      text-align: left;
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      color: var(--text);
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      cursor: pointer;

      &:focus {
        outline: 0;
      }

      &:after {
        content: '+';
        display: inline-block;
      }
    }
    &__panel {
      transition: var(--transition);
      padding: 4rem 0 2rem;

      @media (max-width: 700px) {
        padding: 2rem 0 1rem;
      }
    }
  }
`;

const BalanceStyles = styled.div`
  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }
`;

export default function DonationFaqs({ faqs, balance: funds }) {
  return (
    <SectionStyles>
      <Heading title="Donation FAQs" type="02" />
      {funds && parseFloat(funds.balance) > 0 && (
        <BalanceStyles>
          <h1 className="balance">
            <p>Fund Raised</p>
            <p>{funds.balance} {funds.currency}</p>
          </h1>
        </BalanceStyles>
      )}
      <AccordionStyles>
        <Accordion allowZeroExpanded="true" className="body-large">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} className="item">
              <AccordionItemHeading className="item__heading">
                <AccordionItemButton className="item__button">
                  {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="item__panel">
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionStyles>
    </SectionStyles>
  );
}
