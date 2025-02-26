import classNames from 'classnames';
import './Logo.scss';

export function Logo(props) {
  const { loading = 'lazy', className } = props;
  const title = 'Home';
  const classList = classNames(className, 'logo');
  return (
    <a className={classList} href='/' title={title} aria-label={title}>
      <img className='logo__image' src='/logo.svg' alt='' width={199} height={60} loading={loading}></img>
    </a>
  );
}
