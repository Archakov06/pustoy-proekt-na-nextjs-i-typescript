import Head from 'next/head';

declare global {
  interface Window {
    ace: any;
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Пустой проект на NextJS + TypeScript</title>
        <main>А это главная часть</main>
      </Head>
    </>
  );
}
