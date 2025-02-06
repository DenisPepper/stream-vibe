import './Content.scss';

export default function Content(props) {
  const { children } = props;
  return <main className='content'>{children}</main>;
}
