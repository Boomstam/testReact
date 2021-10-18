import {ProductLine} from "./ProductLine";
import {Note} from "./Note";
import {Card, Row, Col, Button, Collapse} from 'react-bootstrap';
import {useState} from "react";

export function Category(props) {
    const [open, setOpen] = useState(false);
    const {category} = props;
    //aria-controls="example-collapse-text"
    return <Col md="4" s="auto">
        <Card>
            <Card.Header className="text-white bg-dark">
                <Row>
                    <Col md={4}>
                        <Card.Title>{category.name}</Card.Title>
                    </Col>
                    <Col md={ {span: 2, offset: 6}}>
                        <Button
                            className="text-dark bg-white"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >V</Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="p-0">
                <Collapse in={open}>
                    <div className="p-4">
                        <Note noteHolder={category} />
                        <Card.Text>
                            {category.products.map(p => <ProductLine product={p} key={p.name} />)}
                        </Card.Text>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    </Col>
}