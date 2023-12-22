import { ReactNode } from 'react';
import Card from './Card';
import Button from './Button';
import Icon from './Icon';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const handleCloseModal = (e: any) => {
    // Check if the click happened directly on the parent div, not its children
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    document.body.style.overflow = 'auto';
    return null;
  }

  document.body.style.overflow = 'hidden';

  return (
    <div onClick={handleCloseModal} className='fixed top-0 left-0 flex justify-center items-center z-40 w-screen h-screen bg-black/80 backdrop-blur-xl'>
      <Card className='relative z-50 max-w-md'>
        <Button 
          type='tertiary'
          size='round'
          onClick={() => {setIsOpen(false)}}
          className='absolute top-2 right-2'
        >
          <Icon name='close' className='w-3 h-3'/>
        </Button>
        {children}
      </Card>
    </div>
  );
};

export default Modal;