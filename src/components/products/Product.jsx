import "./product.css"

function Product() {
  return (
    <div className="product_card">
      <div className="header_product">
        <div className="name">Nombre del producto</div>
      </div>
      <div className="body_product">
        <div className="image">Imagen del producto</div>
      </div>
      <div className="footer_product">
        <div className="btn_addCarrito">Ver descripción</div>
      </div>
    </div>
  )
}

export default Product