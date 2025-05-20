import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Đảm bảo bạn có file này hoặc sửa lại đường dẫn
import Layout from '../components/Layout'; // Layout dùng chung

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
