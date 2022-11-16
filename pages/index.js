import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import CardProduto from './Components/CardProduto/CardProduto';

import { api } from './services/api'

export default function Home() {
  const [data,setData] = useState(null)

  const [sacola,setSacola] = useState([])

  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    ;(async ()=>{
      
      try{
        const response = await api()
        setData(response.data)
        console.log(data)
      }catch(error){
        console.log(error)
      }finally{
        setCarregando(false)
      }

    })()
  }, []);

  return (
    <>
      <Head>
        <title>Desafio Front-End | Daniel_GLaser</title>
      </Head>
      {carregando && <Spinner/>}
      <Container>
        { data && <CardProduto data={data}/>}
      </Container>
    </>
  )
}
