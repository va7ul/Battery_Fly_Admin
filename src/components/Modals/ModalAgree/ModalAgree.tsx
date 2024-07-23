import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { theme } from '../../../styles/theme';
import { Box, Btn } from './ModalAgree.styled';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background: `${theme.colors.gradientYellow}`,
  },
};

ReactModal.setAppElement('#modal-root');

type ModalAgreeProps = {
  children: ReactNode;
  isModalAgreeOpen: boolean;
  handleCloseAgreeModal: () => void;
};

export const ModalAgree: React.FC<ModalAgreeProps> = ({
  children,
  isModalAgreeOpen,
  handleCloseAgreeModal,
}) => {
  return (
    <ReactModal isOpen={isModalAgreeOpen} style={customStyles}>
      <Box>
        {children}
        <Btn type="button" onClick={handleCloseAgreeModal}>
          <div>Гаразд</div>
        </Btn>
      </Box>
    </ReactModal>
  );
};
