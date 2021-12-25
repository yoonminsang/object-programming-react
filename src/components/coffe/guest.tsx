import React from 'react';
import { ICoffee, IGuest } from './type';

interface IProps {
  onOrderHandler: (coffee: ICoffee) => void;
  guestList: IGuest[];
  AMERICANO: ICoffee;
  LATTE: ICoffee;
}

const Guest: React.FC<IProps> = ({ onOrderHandler, guestList, AMERICANO, LATTE }) => {
  return (
    <>
      <h2>손님</h2>
      <button type="button" onClick={() => onOrderHandler(AMERICANO)}>
        아메리카노 주문
      </button>
      <button type="button" onClick={() => onOrderHandler(LATTE)}>
        라떼 주문
      </button>
      {guestList.map(({ id, coffee }) => {
        return (
          <div key={id}>
            {id}번 손님 {coffee} 주문중
          </div>
        );
      })}
    </>
  );
};

export default Guest;
