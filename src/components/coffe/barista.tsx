import React from 'react';
import { IMakeCoffee } from './type';

interface IProps {
  makeCoffees: IMakeCoffee[];
}

const Barista: React.FC<IProps> = ({ makeCoffees }) => {
  return (
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
  );
};

export default Barista;
