import React from 'react';
import Layout from './src/components/Layout';
import Provider from './src/components/provider';

export const wrapRootElement = Provider;

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function onClientEntry() {
  window.addEventListener('load', () => {
    document.body.className += ' transition';
  });
}
