import { Logo } from '@/components/Logo';
import './Header.scss';
import classNames from 'classnames';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Movies & Shows', href: '/movies' },
  { label: 'Support', href: '/support' },
  { label: 'Subscriptions', href: '/subscriptions' },
];

export default function Header(props) {
  const { url } = props;

  return (
    <header className='header'>
      <div className='header__inner container'>
        <Logo loading='eager' />
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            {navItems.map(({ label, href }) => (
              <li className='header__nav-item' key={href}>
                <a className={classNames('header__nav-link', { 'is-active': href === url })} href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
