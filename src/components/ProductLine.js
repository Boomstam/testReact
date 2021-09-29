import {ProductSize} from "./ProductSize";
import {Note} from "./Note";

export function ProductLine(props) {
    const {product} = props;
    if (!product.name) return null;
    return <div className="productLine">
        <div>{product.name}
            <ProductSize product={product} />
            <Note noteHolder={product} />
        </div>
        <div>{product.price}</div>
    </div>
}