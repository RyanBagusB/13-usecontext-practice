import React from 'react';
import { community } from '../utils/content';

function Community() {
  return (
    <>
      <h1>{community['id'].header}</h1>
      <span className="subheader">{community['id'].subheader}</span>
      <p>{community['id'].paragraph}</p>
    </>
  );
}

export default Community;
