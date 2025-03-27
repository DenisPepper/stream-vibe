import '@/styles';
import Head from '@/layouts/Head';
import Content from '@/layouts/Content';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function (props) {
  const { children, title, url } = props;

  return (
    <>
      <Head title={title} />
      <Header url={url}/>
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
