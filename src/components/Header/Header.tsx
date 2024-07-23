import { Navigation } from './Navigation/Navigation';
import { StyledHeader, DesktopWrapper } from './Header.styled';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { useAuth } from 'utils/hooks';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <>
        <img src={logo} alt="logo" style={{ width: '177px' }} />
        {isLoggedIn && (
          <DesktopWrapper>
            <Navigation />
            <ProfileButton />
          </DesktopWrapper>
        )}
      </>
    </StyledHeader>
  );
};
