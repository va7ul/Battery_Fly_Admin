import styled from 'styled-components';

export const StyledLoader = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 50%;
  background-image: url('${props => props.gif}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
