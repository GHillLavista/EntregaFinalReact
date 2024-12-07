const ItemDetail = ({ product }) => {
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
      </div>
    )
  }
  export default ItemDetail