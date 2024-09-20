import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./ProductCompoReturn.css"


import CartContext from './CartContext';
import Button from 'react-bootstrap/Button';
import ProductDetail from './ProductDetail';
import { Alert } from 'bootstrap';





function removebtag(text) {
    return text.replace(/<\/?b>/g, '');
}

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductList(props) {
    const commas = addCommas(props.price)
    const titleDel = removebtag(props.title)
    const { cartList, setCartList } = useContext(CartContext);

    const handleAddToCart = () => {
        const item = { title: props.title, image: props.image, price: props.price, id: props.id, brand: props.brand };
        const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
        const isItemInCart = cartList.some(cartItem => cartItem.id === item.id);
        if (isItemInCart) {
            alert('이미 담겨 있는 상품입니다!')
        } else {
            cartList.push(item);
            localStorage.setItem('cartList', JSON.stringify(cartList));
            setCartList(cartList); // 장바구니 아이콘 옆의 숫자 업데이트
        }
    };


    useEffect(() => {
        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }


    }, [setCartList]);

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', border: '4px solid white', borderRadius: '10px' }}>
            <Col className='productList' style={{ width: '80%', height: "100%" }}>
                <Card>
                    <Card.Img className='card-img' variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title className="text-truncate">{titleDel}</Card.Title>
                        <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
                            {commas} 원
                        </Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ marginRight: '10px', display: 'inline-block' }}>
                                <ProductDetail props={props} />
                            </div>
                            <div style={{ marginLeft: '10px', display: 'inline-block' }}>
                                <Button variant="info" size='m' as="input" type="button" value="장바구니 담기" onClick={handleAddToCart} />
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default ProductList;
