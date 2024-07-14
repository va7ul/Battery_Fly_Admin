import styled from 'styled-components';

export const StyledLoader = styled.div<{ gif: string }>`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-image: url('${props => props.gif}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
