import styled from 'styled-components';

export const ContentWrapper = styled.ul`
  font-size: 15px;
  font-weight: 400;
  padding: 0px 110px;
`;

export const StyledOrdersHistoryEl = styled.li`
  font-size: 15px;
  font-weight: 400;
  padding: 20px 0px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;

  :first-child {
    font-weight: 600;
  }

  p:not(:first-child) {
    text-align: center;
  }
`;

export const getStatusColor = props => {
  switch (props.type) {
    case 'Нове':
      return props.theme.colors.warning;
    case 'В роботі':
      return props.theme.colors.hoverColor;
    case 'Скасовано':
      return props.theme.colors.error;
    case 'Доставлено':
      return props.theme.colors.success;
    default:
      return;
  }
};

export const StyledText = styled.p`
  font-weight: 700;
  color: ${getStatusColor};
`;

export const OrderDetailsContainer = styled.div`
  grid-column: 1/6;
  background: rgba(244, 170, 0, 0.1);
  padding: 5px 10px;
`;

export const OrderDetailsList = styled.ul`
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  li {
    display: grid;
    grid-template-columns: 100px 250px repeat(3, 1fr);
    padding-top: 15px;
    padding-bottom: 15px;

    :not(:last-child) {
      border-bottom: 1px solid rgba(157, 157, 157, 0.3);
    }
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
`;

export const Sum = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const Discount = styled.p`
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
