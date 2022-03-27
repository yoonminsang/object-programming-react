import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/button';
import AliceController from './alice-controller';

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

type TLocation = '문 밖' | '문 안';

const AliceInWonderland: React.FC = () => {
  const [print, setPrint] = useState<number | TLocation | null>(null);

  const [height, setHeight] = useState<number>(130);
  const [location, setLocation] = useState<TLocation>('문 밖');

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

  const onGoOutside = useCallback(() => {
    if (location === '문 안') {
      return alert('이미 문 안입니다.');
    }
    if (height < 40 || height > 80) {
      return alert('키가 40이상 80이하여야 문을 들어갈 수 있습니다.');
    }
    alert('문 안으로 들어갑니다');
    setLocation('문 안');
  }, [height, location]);

  return (
    <Wrapper>
      <Print>{print}</Print>
      <FlexRow>
        <Button onClick={onPrintHeight}>키</Button>
        <Button onClick={onPrintLocation}>위치</Button>
      </FlexRow>
      <FlexRow>
        <AliceController onChangeHeight={onChangeHeight} onGoOutside={onGoOutside} />
      </FlexRow>
    </Wrapper>
  );
};

export default AliceInWonderland;
