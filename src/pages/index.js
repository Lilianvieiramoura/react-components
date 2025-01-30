import Head from "next/head";
import estilos from '@/styles/Home.module.css'
import Topo from "@/components/Topo";
import Card from "@/components/Card";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="estilos.main_container">
        <Topo />
        <section className={estilos.secao_cards}>
          <Card />
          <Card />
          <Card />
        </section>
        <Rodape />
      </div>
    </>
  );
}
