import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  margin: 0 auto;
  z-index: 3;

  background-color: ${props => props.theme.colors.greyBackgroundPaper};
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.25);

  align-items: center;
  max-width: 1280px;
  padding: 0 110px;
`;

export const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
