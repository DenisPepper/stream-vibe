import { Logo } from '@/components/Logo';
import './Header.scss';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner container'>
        <Logo loading='eager' />
      </div>
    </header>
  );
}
