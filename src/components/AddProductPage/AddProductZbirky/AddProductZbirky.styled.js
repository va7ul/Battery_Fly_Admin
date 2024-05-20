import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  padding: 40px 110px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 600;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const StyledField = styled(Field)`
  width: 1060px;
  height: 34px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.textPrimary};
  border: transparent;
  border-radius: 8px;
  background: ${props => props.theme.colors.greyBackgroundPaper};

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};
  font-size: 12px;
`;

export const StyledTextField = styled(Field)`
  width: 1060px;
  height: 102px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.textPrimary};
  border: transparent;
  border-radius: 8px;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 18px 30px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};
  margin-left: auto;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    borderRadius: '6px',
    borderStyle: 'none',
    width: '140px',
    maxHeight: '30px',
    minHeight: '25px',
    border: '1px solid rgb(31, 31, 31)',
    ':hover': { borderColor: 'currentColor', boxShadow: 'none' },
    '@media only screen and (min-width: 1280px)': {
      width: '226px',
      minHeight: '42px',
      borderRadius: '12px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    fontSize: '10px',
    width: '140px',
    border: '1px solid rgb(31, 31, 31)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
      width: '226px',
      borderRadius: '12px',
    },
  }),
  input: styles => ({ ...styles, display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? 'rgb(255, 208, 100)' : undefined,
      color: !isDisabled
        ? isSelected
          ? 'rgb(31, 31, 31);'
          : 'rgb(31, 31, 31);'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'default',
      padding: '2px 8px',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? 'rgb(255, 208, 100)'
            : 'rgb(255, 208, 100)'
          : undefined,
      },
      '@media only screen and (min-width: 1280px)': {
        borderRadius: '6px',
      },
    };
  },
  placeholder: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 8px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: '30px',
    width: '38px',
    '@media only screen and (min-width: 1280px)': {
      height: '42px',
      width: '40px',
    },
  }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  singleValue: styles => ({
    ...styles,
    fontSize: '10px',
    margin: 0,
    padding: '8px',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
};
