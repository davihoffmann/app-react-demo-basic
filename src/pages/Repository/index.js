import React from 'react';

export default function Repository(prop) {
  const { match } = prop;

  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
