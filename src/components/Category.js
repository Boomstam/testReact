import {ProductLine} from "./ProductLine";
import {Note} from "./Note";

export function Category(props) {
    const {category} = props;
    return <div>
        <h2>{category.name}</h2>
        <Note noteHolder={category} />
        <div>
            {category.products.map(p => <ProductLine product={p} key={p.name} />)}
        </div>
    </div>
}