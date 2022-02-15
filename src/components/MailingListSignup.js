import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  position: relative;
  p {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    width: 100%;
    padding-top: 2rem;
    font-size: 1.5rem;
    text-transform: none;

    @media (min-width: 861px) {
      font-size: 2rem;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
    }

    &.error,
    &.success {
      opacity: 1;
    }

    &.error {
      color: red;
    }
  }
`;

const FormStyles = styled.form`
  display: flex;

  input[type='text'] {
    border: 1px solid var(--text);
    border-right: none;
    color: var(--text);
    width: 100%;
    padding: 1rem;
  }
  button {
    padding: 0 1rem;
    text-transform: uppercase;
    border: 1px solid var(--text);
    color: var(--text);
  }
`;

export default function MailingListSignup() {
  const [email, setEmail] = useState('');

  const [mailChimpResponse, setMailChimpResponse] = useState({
    result: null,
    msg: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    const response = await addToMailchimp(email);
    setMailChimpResponse({
      result: response.result,
      msg: response.msg,
    });
    setTimeout(() => {
      setMailChimpResponse({
        result: null,
        msg: null,
      });
      setEmail('');
    }, 3000);
  };

  return (
    <ContainerStyles>
      <FormStyles onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">→</button>
      </FormStyles>
      <p className={mailChimpResponse.result}>
        {mailChimpResponse.msg && mailChimpResponse.msg.indexOf('<') > -1
          ? mailChimpResponse.msg.split('<')[0]
          : mailChimpResponse.msg}
      </p>
    </ContainerStyles>
  );
}
