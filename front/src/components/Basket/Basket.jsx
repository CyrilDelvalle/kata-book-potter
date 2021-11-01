import React from "react";
import BasketWrapper from "./BasketWrapper";

function Basket({ price }) {
  return (
    <BasketWrapper>
      {price > 0
        ? `Votre panier est de ${price} €`
        : `Aucun livre dans votre panier`}
    </BasketWrapper>
  );
}

export default Basket;
