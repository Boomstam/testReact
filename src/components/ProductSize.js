export function ProductSize(props){
    const {product} = props;
    if(product.size){
        return <span className="productSize">{" - " + product.size + "cl"}</span>;
    }
    return null;
}