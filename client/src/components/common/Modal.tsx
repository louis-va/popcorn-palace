import { ReactNode } from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, setIsOpen, children, className }: ModalProps) => {
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
    <div onClick={handleCloseModal} className='fixed p-4 top-0 left-0 flex justify-center items-center z-40 w-screen h-screen bg-black/80 backdrop-blur-xl'>
      <Card className={`${className} relative z-50 max-w-md`}>
        <Button 
          variant='tertiary'
          size='round'
          onClick={() => {setIsOpen(false)}}
          className='absolute -top-[2.75rem] right-0'
        >
          <Icon name='close' className='w-4 h-4'/>
        </Button>
        {children}
      </Card>
    </div>
  );
};

export default Modal;