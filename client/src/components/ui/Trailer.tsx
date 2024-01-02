import React from 'react';
import YouTube from 'react-youtube';

interface TrailerProps {
  trailerURL: string | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Trailer = ({ trailerURL, isOpen, setIsOpen }: TrailerProps) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    document.body.style.overflow = 'auto';
    return null;
  }

  document.body.style.overflow = 'hidden';

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      controls: 1,
      autoplay: 1,
    },
  };

  return (
    <div
      onClick={handleCloseModal}
      className='fixed top-0 left-0 flex justify-center items-center z-40 w-screen h-screen bg-black/80 backdrop-blur-xl p-8 md:p-12 lg:p-28'
    >
      <div className='aspect-video w-full'>
        <YouTube videoId={trailerURL} className='aspect-video' iframeClassName='aspect-video' opts={opts} />
      </div>
    </div>
  );
};

export default Trailer;