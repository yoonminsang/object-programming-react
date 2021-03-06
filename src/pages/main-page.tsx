import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <>
      <h1>객체지향의 사실과 오해</h1>
      <nav>
        <li>
          <Link to="/coffe">커피 공화국</Link>
        </li>
        <li>
          <Link to="/AliceInWonderland">이상한 나라의 앨리스</Link>
        </li>
      </nav>
    </>
  );
};

export default MainPage;
