import React from 'react';
import { IGuest } from './type';

interface IProps {
  posRecord: IGuest[];
}

const Cacher: React.FC<IProps> = ({ posRecord }) => {
  return (
    <div>
      <h2>캐시어</h2>
      {posRecord.map(({ id, coffee }) => {
        return (
          <div key={id}>
            {id}번 손님 {coffee} 주문완료
          </div>
        );
      })}
    </div>
  );
};

export default Cacher;
