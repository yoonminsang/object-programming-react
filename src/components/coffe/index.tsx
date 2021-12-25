import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Barista from './barista';
import Cacher from './cacher';
import Guest from './guest';
import { AMERICANO, ICoffee, IGuest, IMakeCoffee, LATTE } from './type';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Coffee: React.FC = () => {
  const guestId = useRef(0);
  const [guestList, setGuestList] = useState<IGuest[]>([]);
  const [posRecord, setPosRecord] = useState<IGuest[]>([]);
  const [makeCoffees, setMakeCoffees] = useState<IMakeCoffee[]>([]);

  const onMakeCoffeesHandler = useCallback((id: number, coffee: ICoffee) => {
    const nextMakeCoffee = { id, coffee, making: false };
    setMakeCoffees((makeCoffee) => [...makeCoffee, nextMakeCoffee]);
    if (coffee === AMERICANO) {
      setTimeout(() => {
        setMakeCoffees((makeCoffees) => {
          const index = makeCoffees.findIndex((makeCoffee) => makeCoffee.id === id);
          console.log(`${id}번 손님 주문하신 커피 나왔습니다`);
          setGuestList((guestList) => guestList.filter((guest) => guest.id !== id));
          return [...makeCoffees.slice(0, index), { id, coffee, making: true }, ...makeCoffees.slice(index + 1)];
        });
      }, 3000);
    } else {
      setTimeout(() => {
        setMakeCoffees((makeCoffees) => {
          const index = makeCoffees.findIndex((makeCoffee) => makeCoffee.id === id);
          setGuestList((guestList) => guestList.filter((guest) => guest.id !== id));
          return [...makeCoffees.slice(0, index), { id, coffee, making: true }, ...makeCoffees.slice(index + 1)];
        });
      }, 6000);
    }
  }, []);

  const onPosRecordHandler = useCallback(
    (id: number, coffee: ICoffee) => {
      const random = Math.random();
      const time = random < 0.5 ? 2000 : 4000;
      setTimeout(() => {
        const nextRecord = { id, coffee };
        setPosRecord((posRecord) => [...posRecord, nextRecord]);
        onMakeCoffeesHandler(id, coffee);
      }, time);
    },
    [onMakeCoffeesHandler],
  );

  const onOrderHandler = useCallback(
    (coffee: ICoffee) => {
      const nextId = guestId.current + 1;
      guestId.current = nextId;
      const nextGuest = { id: nextId, coffee };
      setGuestList((guestList) => [...guestList, nextGuest]);
      onPosRecordHandler(nextId, coffee);
    },
    [onPosRecordHandler],
  );

  return (
    <Wrapper>
      <div>
        <Guest onOrderHandler={onOrderHandler} guestList={guestList} AMERICANO={AMERICANO} LATTE={LATTE} />
      </div>
      <div>
        <Cacher posRecord={posRecord} />
      </div>
      <div>
        <Barista makeCoffees={makeCoffees} />
      </div>
    </Wrapper>
  );
};

export default Coffee;
