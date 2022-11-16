import Head from "next/head";
import { useEffect, useState } from "react";
import { Card, Container, Nav } from "react-bootstrap";

function sacola() {

    const [data, setData] = useState(null)

    useEffect(() => {
        ;(async ()=>{
          
          try{
            const response = await api()
            setData(response.data)
          }catch(error){
            console.log(error)
          }finally{
            
          }
        })()
      }, []);

    return (
        <>
            <Head>
                <title>Desafio Front-End | Sacola</title>
            </Head>
            <Container>
                <Card>
                    <Card.Header>
                        <Nav variant='tabs' defaultActiveKey='#sacola'>
                            <Nav.Item>Sacola</Nav.Item>
                            <Nav.Item>Pagamento</Nav.Item>
                            <Nav.Item>Confirmação</Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card> 
            </Container>
        </>
    );
}

export default sacola;