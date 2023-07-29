import Head from "next/head";
import App from "@/components/App";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta property="og:title" content="Little Lemon" />
        <meta property="og:site_name" content="Little Lemon" />
        <meta property="og:url" content="" />
        <meta property="og:description" content="Little Lemon Restaurant" />
        <meta property="og:type" content="" />
        <meta property="og:image" content="/Logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Little Lemon</title>
      </Head>
      <App />
    </div>
  );
}
