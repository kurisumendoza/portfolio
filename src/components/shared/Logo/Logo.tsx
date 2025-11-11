import logo from '../../../assets/logo/logo.svg';

const Logo = ({ className }: { className: string }) => (
  <img src={logo} alt="" className={className} />
);

export default Logo;
