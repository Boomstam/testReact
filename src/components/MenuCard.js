import {Container, Navbar, Row} from 'react-bootstrap';
import {CATEGORIES_DATA} from "../data/data";
import {Category} from "./Category";

export function MenuCard(props) {
    const {menuData} = props;
    return <Container className="pt-5">
        <Row className="pt-2">
            <h1>Menu</h1>
        </Row>
        <Row>
            {menuData.map(c => <Category category={c} key={c.name} />)}
        </Row>
    </Container>
}