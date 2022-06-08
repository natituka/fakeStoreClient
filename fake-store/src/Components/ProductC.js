import Button from "./Button";

export default function ProductC({ product }) {
    return <div className="product">
        <img src={product.image} /><br />
        {product.title}<br />
        <Button/><br />
        {product.price} $<br />
        {product.description}
    </div>
}
