import React, { useContext, useEffect } from 'react';
import ValueReturn from './Value';
import CartContext from '../productList/CartContext';

function ShoppingCart({ check, setCheck }) {
    const { cartList, setCartList } = useContext(CartContext);

    useEffect(() => {

        const savedCartList = JSON.parse(localStorage.getItem('cartList'));
        if (savedCartList) {
            setCartList(savedCartList);
        }
        console.log(savedCartList)
    }, [setCartList]);

    return (
        <>
            {cartList.map((item, index) => (
                <ValueReturn
                    key={index}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    id={item.id}
                    check={check}
                    setCheck={setCheck}
                    
                />
            ))}

        </>
    );
}

export default ShoppingCart;
