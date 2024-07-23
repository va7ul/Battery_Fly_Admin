import { TextField, styled } from '@mui/material';

export const Field = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.text.primary,
    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-input': {
    height: '51px',
    padding: '0px 0px',
  },
  '& .MuiFormLabel-root': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    top: '0px',
    '&.Mui-focused': {
      fontSize: '14px',
      color: theme.palette.text.primary,
      transform: 'translate(10px, -18px) scale(1)',
    },
  },
  '& .MuiFormLabel-filled': {
    transform: 'translate(10px, -18px) scale(1)',
  },
  '& .MuiInputBase-root': {
    width: '476px',
    height: '51px',
    padding: '0px 12px',
    fontSize: '14px',
    fontFamily: theme.typography.fontFamily,
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid hoverColor.main`,
    },
  },
  '& .MuiFormLabel-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    transform: 'translate(10px, -20px)',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '12px',
    fontWeight: '500',
    color: theme.palette.error,
  },
}));
