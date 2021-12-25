export const AMERICANO = '아메리카노';
export const LATTE = '카페라떼';

export type ICoffee = typeof AMERICANO | typeof LATTE;

export interface IGuest {
  id: number;
  coffee: ICoffee;
}

export interface IMakeCoffee extends IGuest {
  making: boolean;
}
