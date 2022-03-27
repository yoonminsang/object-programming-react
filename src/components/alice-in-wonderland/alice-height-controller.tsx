import React, { useCallback, useState } from 'react';
import Button from '../common/button';

const ONE_BEVERAGE = 20;
const ONE_CAKE = 50;
const ONE_MUSHROOM = 10;

interface Props {
  onChangeHeight: (height: number) => void;
}

const AliceHeightController: React.FC<Props> = ({ onChangeHeight }) => {
  const [, setBeverage] = useState<number>(200); // ml
  const [, setCake] = useState<number>(1000); // g
  const [, setMushromm] = useState<number>(100); // g

  const onDrkinkBeverage = useCallback(() => {
    setBeverage((beverage) => {
      if (beverage < ONE_BEVERAGE) {
        alert('음료수가 없습니다');
        return beverage;
      }
      return beverage - ONE_BEVERAGE;
    });
    onChangeHeight(-100);
  }, [onChangeHeight]);

  const onEatCake = useCallback(() => {
    setCake((cake) => {
      if (cake < ONE_CAKE) {
        alert('케익이 없습니다');
        return cake;
      }
      return cake - ONE_CAKE;
    });
    onChangeHeight(+80);
  }, [onChangeHeight]);

  // 부채질
  const onFan = useCallback(() => {
    onChangeHeight(+70);
  }, [onChangeHeight]);

  const onEatMushroom = useCallback(() => {
    setMushromm((mushroom) => {
      if (mushroom < ONE_MUSHROOM) {
        alert('버섯이 없습니다');
        return mushroom;
      }
      onChangeHeight(-50);
      return mushroom - ONE_MUSHROOM;
    });
  }, [onChangeHeight]);

  return (
    <>
      <Button isRound onClick={onDrkinkBeverage}>
        음료를 마시다
      </Button>
      <Button isRound onClick={onEatCake}>
        케이크를 먹다
      </Button>
      <Button isRound onClick={onFan}>
        부채질하다
      </Button>
      <Button isRound onClick={onEatMushroom}>
        버섯을 먹다
      </Button>
    </>
  );
};

export default React.memo(AliceHeightController);
