import { StyledLoader } from './CustomLoader.styled';

export const CustomLoader = () => {
  const gif = 'https://media1.tenor.com/m/LJ8is9KE6C0AAAAd/pedro-racoon.gif';

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '90vh',
      }}
    >
      <StyledLoader gif={gif} />
    </div>
  );
};
