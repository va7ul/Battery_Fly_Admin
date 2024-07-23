import styled from 'styled-components';

export const ContentWrapper = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding: 0px 110px 40px;
`;

export const OrderDetailsContainer = styled.div`
  grid-column: 1/6;
  background: rgba(225, 225, 225, 0.7);
  padding: 5px 10px;
`;

export const OrderDetailsList = styled.ul`
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  li {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 100px 250px repeat(3, 1fr);
    padding-top: 15px;
    padding-bottom: 15px;

    :not(:last-child) {
      border-bottom: 1px solid rgba(157, 157, 157, 0.3);
    }
  }
`;
