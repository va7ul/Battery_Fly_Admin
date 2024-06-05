import styled from 'styled-components';

export const getColor = props => {
  if (props.inStock < props.ordered) {
    return props.theme.colors.error;
  }
};

export const StyledImage = styled.img`
  grid-row: 1/4;
  margin-right: 10px;
  width: 90px;
  height: 90px;
`;

export const StyledName = styled.p`
  grid-row: 1/3;
  height: 54px;
  overflow: hidden;
  color: ${props => props.theme.colors.hoverColor};
`;

export const CapacityWrap = styled.div`
  grid-column: 2/6;
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 10px;
  font-size: 11px;
`;

export const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);

  svg {
    width: 19px;
    height: 19px;
  }
`;

export const SealingHolders = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: ${props => props.theme.colors.success};
    width: 16px;
    height: 16px;
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const QuantityOrdered = styled.p`
  color: ${getColor};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  padding: 7px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }
`;

export const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`;

export const QuantityInStock = styled.p`
  grid-column: 4/5;
  color: ${getColor};
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 5px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 100%;

  & svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.greyOutput};
    transition: ${props => props.theme.transition.main};

    &:hover {
      fill: crimson;
    }
  }
`;
