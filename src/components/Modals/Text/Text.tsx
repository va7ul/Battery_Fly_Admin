import { ReactNode } from 'react';
import { Text } from './Text.styled.styled';

export const TextAgree: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Text>{children}</Text>;
};
