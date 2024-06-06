import { Box, Button } from '@mui/material';

export const OrderActionBtn = ({
  status,
  handleApproveClick,
  handleFinishClick,
  handleCancelClick,
}) => {
  return (
    <Box
      sx={{
        marginTop: '10px',
      }}
    >
      {status === 'Нове' && (
        <Button
          variant="contained"
          onClick={handleApproveClick}
          sx={{
            marginLeft: '10px',
            marginRight: 'auto',
            backgroundColor: 'success.main',
            '&:hover': {
              backgroundColor: 'success.main',
            },
          }}
        >
          Підтвердити
        </Button>
      )}
      {status === 'В роботі' && (
        <Button
          variant="contained"
          onClick={handleFinishClick}
          sx={{
            marginLeft: '10px',
            marginRight: 'auto',
            backgroundColor: 'success.main',
            '&:hover': {
              backgroundColor: 'success.main',
            },
          }}
        >
          Виконати
        </Button>
      )}
      {(status === 'Нове' || status === 'В роботі') && (
        <Button
          variant="contained"
          onClick={handleCancelClick}
          sx={{
            marginLeft: '10px',
            marginRight: 'auto',
            backgroundColor: 'error.main',
            '&:hover': {
              backgroundColor: 'error.main',
            },
          }}
        >
          Скасувати
        </Button>
      )}
    </Box>
  );
};
