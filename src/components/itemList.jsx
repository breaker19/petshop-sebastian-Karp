import { Col  } from "react-bootstrap";
import Item from "./ItemDetails";

const ItemList = ({products}) => {
    return (
        <>
            {products.map((product) => (
                <Col style={ {border: "solid 1px red", width:"30%", marginRight: 20,}} key={product.id}>
                    <Item key={product.id} product={product} />
                </Col>
                
            ))}
        </>






    )
}

export default ItemList;