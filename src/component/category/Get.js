import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ProductList from "../productList/ProductList";

function Get({ brand, list, setList, filteredItems = [] }) {
    const clientId = "C88k7kKQEPtcbHOYYaRs";
    const clientSecret = "5XoMjg7Tdx";

    useEffect(() => {
        if (brand) { // 브랜드 값이 있을 때만 실행
            fetch(
                `/v1/search/shop?query=${brand}수영복&filter=used:false&sort=sim&display=100&start=1`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": clientId,
                    "X-Naver-Client-Secret": clientSecret,
                },
            })
                .then((response) => response.json())
                .then((json) => setList(json.items));
        }
    }, [brand]); // brand 값이 변경될 때마다 실행



    return (
        <>
            {filteredItems.length > 0 ? ( // 필터링된 아이템으로 조건 변경
                <Row xs={1} md={2} lg={4} className="g-4">
                    {filteredItems.map((item, index) => (
                        <Col key={index}>
                            <ProductList
                                title={item.title}
                                image={item.image}
                                price={item.lprice}
                            />
                        </Col>
                    ))}
                </Row>
            ) : null}
        </>
    )
}

export default Get;