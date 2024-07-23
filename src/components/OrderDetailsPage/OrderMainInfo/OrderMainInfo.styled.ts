import styled from 'styled-components';

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
`;

export const TextTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.textDisabled};
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const Sum = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
`;

export const Discount = styled.p<{ discount: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  span {
    color: ${props =>
      props.discount ? props.theme.colors.success : 'inherit'};
  }
`;

export const Total = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: end;
  border: none;
  font-size: 24px;
  font-weight: 600;
`;
