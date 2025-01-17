import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartContext from '../productList/CartContext';
import './GlobalNav.css'

function GlobalNav() {
  const expand = 'md';
  const { cartList, setCartList } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(cartList.length);

  useEffect(() => {
    setCartItemCount(cartList.length);
  }, [cartList, cartList.length]);

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/" className="mb-2">Aqua Spirit</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-evenly flex-grow-1 pe-3">
                <Nav.Link href="/">홈</Nav.Link>
                <Nav.Link href="productlist">상품</Nav.Link>
                <Nav.Link href="category">카테고리</Nav.Link>
                <Nav.Link href="shoppingcart">장바구니
                  <div
                    className="cart-item-count"
                    style={{ display: 'inline-block', width: '23px', height: '23px', textAlign: 'center', backgroundColor: 'red', borderRadius: '15px' }}>
                    <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>{cartItemCount}</span>
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default GlobalNav;
