import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";

const AreaProdutos = styled.main`

`
const AreaCards = styled.section`
    display: grid;grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`

function CardProduto({data}) {
    const {items} = data
    return (
        <AreaProdutos>
            <h1 className="display-3">Nossos Produtos</h1>

            <AreaCards>
                {
                    items.map(({product})=>(
                        <Card style={{maxWidth:'350px',minWidth:'320px',display:'flex'}}>
                            <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection: 'column'}}>
                            
                                <Image src={`${product.imageObjects[0].large}`} width='150' height='150'/>
                               
                                <Card.Subtitle style={{marginTop:'50px'}}>{product.name}</Card.Subtitle>
                                
                                <Card.Title className='display-6' >R$ {product.priceSpecification.price.toFixed(2).replace('.',',')}</Card.Title>
                                
                                <div style={{marginTop:'25px'}}>
                                    <Button variant="success" style={{marginRight: '25px'}}>Comprar</Button>
                                    <Button variant="outline-primary">Add Sacola</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    ))
                }
            </AreaCards>            
        </AreaProdutos>
    );
}

export default CardProduto;