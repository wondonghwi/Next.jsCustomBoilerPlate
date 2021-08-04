import React from 'react';
import { css } from '@emotion/react';

const Home = () => {
  return <div css={emotionTest}>New TripStore Emotion 테스트</div>;
};

export default Home;

const emotionTest = css`
  margin-top: 50px;
  padding: 50px;
  margin-bottom: 50px;
  background-color: hotpink;
  color: royalblue;
`;
