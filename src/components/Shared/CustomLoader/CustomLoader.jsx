// import { StyledLoader } from './CustomLoader.styled';

// export const CustomLoader = () => {
//   const gif = 'https://media1.tenor.com/m/LJ8is9KE6C0AAAAd/pedro-racoon.gif';

//   return (
//     <div
//       style={{
//         display: 'grid',
//         placeItems: 'center',
//         height: '90vh',
//       }}
//     >
//       <StyledLoader gif={gif} />
//     </div>
//   );
// };

import Backdrop from '@mui/material/Backdrop';
import { StyledLoader } from './CustomLoader.styled';

export const CustomLoader = ({ isLoading }) => {
  const gif = 'https://media1.tenor.com/m/LJ8is9KE6C0AAAAd/pedro-racoon.gif';

  return (
    <div>
      <Backdrop
        sx={{ color: '#000000', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <StyledLoader gif={gif} />
      </Backdrop>
    </div>
  );
};
