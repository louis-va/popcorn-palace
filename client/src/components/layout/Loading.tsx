import Icon from "../common/Icon";
import AuthModal from "../auth/AuthModal";
import Container from "./Container";
import Nav from "./Nav";

const Loading = () => {
  return (
    <>
      <AuthModal />
      <Container>
        <div className="min-h-screen flex flex-col flex-grow">
          <Nav />
          <div className="w-full h-full flex justify-center items-center flex-grow pb-20">
            <Icon name='spinner' className='w-8 h-8 animate-spin opacity-75'/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Loading;