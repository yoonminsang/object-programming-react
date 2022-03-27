import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/button';

const ONE_BEVERAGE = 20;
const ONE_CAKE = 50;
const ONE_MUSHROOM = 10;

type TLocation = '문 밖' | '문 안';

const Wrapper = styled.div``;

const Print = styled.div`
  display: flex;
  justify-content: center;
  height: 1rem;
`;

const FlexRow = styled.div`
  display: flex;
  margin: 10px;
`;

const AliceInWonderland: React.FC = () => {
  const [print, setPrint] = useState<number | TLocation | null>(null);

  const [height, setHeight] = useState<number>(130);
  const [location, setLocation] = useState<TLocation>('문 밖');

  const [beverage, setBeverage] = useState<number>(200); // ml
  const [cake, setCake] = useState<number>(1000); // g
  const [mushroom, setMushromm] = useState<number>(100); // g

  const onPrintHeight = useCallback(() => {
    setPrint(height);
  }, [height]);

  const onPrintLocation = useCallback(() => {
    setPrint(location);
  }, [location]);

  const onChangeHeight = useCallback((changeHeight: number) => {
    setHeight((height) => {
      if (height + changeHeight < 20) {
        return 20;
      }
      return height + changeHeight;
    });
  }, []);

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

  const onGoOutside = useCallback(() => {
    if (height < 40 || height > 80) {
      return alert('키가 40이상 80이하여야 문을 들어갈 수 있습니다.');
    }
    setLocation('문 밖');
  }, [height]);

  return (
    <Wrapper>
      <Print>{print}</Print>
      <FlexRow>
        <Button onClick={onPrintHeight}>키</Button>
        <Button onClick={onPrintLocation}>위치</Button>
      </FlexRow>
      <FlexRow>
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
        <Button isRound onClick={onGoOutside}>
          문을 통과하다
        </Button>
      </FlexRow>
    </Wrapper>
  );
};

export default AliceInWonderland;
