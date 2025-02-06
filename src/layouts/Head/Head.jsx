import { Head } from 'minista';

export default function (props) {
  const { title } = props;

  return (
    <Head htmlAttributes={{ lang: 'en' }}>
      <title>Stream Vibe | {title}</title>
      <script src='/src/main.js' type='module' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest'></link>
    </Head>
  );
}
