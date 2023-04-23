import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { showToast } from "../../Components/Alerts/Toast1";

import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

import "./Checkout.css";

function CheckoutPage() {
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart);

  let price = [];

  if (products.length === 0) {
    return <h1>No Products To Buy </h1>;
  }

  products.map((product) => {
    price.push(product.price);
  });

  price = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  let errors = [];

  const handleSubmit = () => {
    let input = document.querySelectorAll("input");
    input.forEach((item) => {
      let value = item.value;
      if (value.trim() === "") {
        errors.push("Please fill in all fields!");
      }
    });
    if (errors.length > 0) {
      showToast(errors[0]);
    } else {
      navigate("/");
      setTimeout(() => {
        showToast("Order Placed Successfully!");
      }, 1000);
    }
  };

  return (
    <>
      <div className="container">
        <div id="Checkout" className="inline">
          <h1>Pay Invoice</h1>
          <div className="card-row">
            <span className="visa"></span>
            <span className="mastercard"></span>
            <span className="amex"></span>
            <span className="discover"></span>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="PaymentAmount">Payment amount</label>
              <div className="amount-placeholder">
                <span>$</span>
                <span>{price}</span>
              </div>
            </div>
            <div className="form-group">
              <label or="NameOnCard">Name on card</label>
              <input
                id="NameOnCard"
                className="form-control"
                type="text"
                maxlength="255"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="CreditCardNumber">Card number</label>
              <input
                id="CreditCardNumber"
                className="null card-image form-control"
                type="text"
              ></input>
            </div>
            <div className="expiry-date-group form-group">
              <label htmlFor="ExpiryDate">Expiry date</label>
              <input
                id="ExpiryDate"
                className="form-control"
                type="text"
                placeholder="MM / YY"
                maxlength="7"
              ></input>
            </div>
            <div className="security-code-group form-group">
              <label htmlFor="SecurityCode">Security code</label>
              <div className="input-container">
                <input
                  id="SecurityCode"
                  className="form-control"
                  type="text"
                ></input>
                <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                <div className="amex-cvc-preview"></div>
                <div className="visa-mc-dis-cvc-preview"></div>
              </div>
            </div>
            <div className="zip-code-group form-group">
              <label htmlFor="ZIPCode">ZIP/Postal code</label>
              <div className="input-container">
                <input
                  id="ZIPCode"
                  className="form-control"
                  type="text"
                  maxlength="10"
                ></input>
              </div>
            </div>
            <Button
              onClick={() => {
                handleSubmit();
              }}
              variant="outlined"
            >
              Pay
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
