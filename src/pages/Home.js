import React from 'react';
import { home } from '../utils/content';

function Home() {
  return (
    <>
      <h1>{home['id'].header}</h1>
      <span className="subheader">{home['id'].subheader}</span>
      <p>{home['id'].paragraph}</p>
    </>
  );
}

export default Home;
