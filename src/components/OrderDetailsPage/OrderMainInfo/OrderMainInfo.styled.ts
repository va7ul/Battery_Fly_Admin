import styled from 'styled-components';

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const PaymentInfo = styled.div`
  width: 70%;
  display: grid;
  gap: 8px;
`;

export const DiscountInfo = styled.div`
  width: 30%;
  display: grid;
`;
export const DiscountTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const DiscountInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const Input = styled.input`
  width: 100px;
  padding: 5px;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }
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
