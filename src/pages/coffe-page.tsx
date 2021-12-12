import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const AMERICANO = '아메리카노';
const LATTE = '카페라떼';

type ICoffee = typeof AMERICANO | typeof LATTE;

interface IGuest {
  id: number;
  coffee: ICoffee;
}

interface IMakeCoffee extends IGuest {
  making: boolean;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CoffePage: React.FC = () => {
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
    <>
      <h1>커피 공화국</h1>
      <Grid>
        <div>
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
        </div>
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
        <div>
          <h2>바리스타</h2>
          {makeCoffees.map(({ id, coffee, making }) => {
            const text = making ? '제조 완료' : '제조중';
            return (
              <div key={id}>
                {id}번 손님 {coffee} {text}
              </div>
            );
          })}
        </div>
      </Grid>
    </>
  );
};

export default CoffePage;
