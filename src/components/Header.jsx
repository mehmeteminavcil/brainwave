import { brainwave } from "../assets";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 border-b bg-n-8/90 backdrop-blur-sm border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={brainwave} width={90} height={40} />
        </a>
        <nav className="fixed hidden"></nav>
      </div>
      Lorem
    </div>
  );
};

export default Header;
