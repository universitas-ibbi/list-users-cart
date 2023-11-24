import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CartList() {
  const { userId } = useParams();
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}/carts`)
      .then((response) => response.json())
      .then((json) => setCart(json.carts));
  }, []);

  return (
    <div className="container">
      <h1>List User's Cart</h1>
      <button className="btn btn-primary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="row">
        {cart.length !== 0 ? (
          cart[0]?.products.map((product) => (
            <div className="col-12" key={product.id}>
              <CartItem key={product.id} product={product} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <h3>User's Cart is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
}

function CartItem({ product }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.thumbnail} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <ul className="list-group">
                <li className="list-group-item">Price : {product.price}</li>
                <li className="list-group-item">
                  Quantity : {product.quantity}
                </li>
                <li className="list-group-item">Total : {product.total}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
