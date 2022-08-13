import React, { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "./../../Context/SearchItemContext";

export function ProductCart() {
  let context = useContext(ShoppingCartContext);
  let { display, tooglecart, cart, addtoCart, toogleFavorite, removeFromCart } = context;
  let total = Object.keys(cart).length || 0;
  let productList = Object.entries(cart).map(([sku, { data, quantity }], i) => (
    <Card key={sku} className="m-1" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title className="text-truncate">{data.name}</Card.Title>
        <div className="d-flex">
          <div style={{ height: "100px", maxWidth: "300px" }} className="p-2">
            <Card.Img
              height={"100%"}
              width={"100%"}
              variant="bottom"
              src={data.images}
            />
          </div>
          <div className="d-flex flex-column">
            <div>
              {" "}
              <span>SKU</span> :<span> {data.sku}</span>{" "}
            </div>
            <div>
              {" "}
              <span>Quantity</span> : <span> {quantity}</span>{" "}
            </div>

            <div>
              {" "}
              <span>Price</span> :<span>{data.price * quantity}</span>{" "}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-50  p-1">
            <Button
              onClick={() => {
                toogleFavorite(data);
              }}
              className="w-100"
              variant="outline-success"
            >
              Wishlist
            </Button>{" "}
          </div>
          <div className="w-50 p-1">
            <Button
              onClick={() => {
                removeFromCart(data);
              }}
              className="w-100"
              variant="outline-danger"
            >
              Remove
            </Button>{" "}
          </div>
        </div>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Offcanvas
        placement="end"
        name="end"
        show={display}
        onHide={() => {
          tooglecart(false);
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FontAwesomeIcon icon={faBagShopping} /> {total} Items{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {total ? (
            productList
          ) : (
            <div className="d-flex justify-content-center align-items-center flex-column mb-5">
              <FontAwesomeIcon
                style={{ fontSize: "150px" }}
                icon={faBagShopping}
              />
              <span className="mt-4">Add Some Product to Continue</span>
            </div>
          )}
          {/* NO product Condition  */}
          <div className="d-flex justify-content-center  py-2">
            {" "}
            <Button variant="outline-primary" disabled={!total}>
              Checkout
            </Button>{" "}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
