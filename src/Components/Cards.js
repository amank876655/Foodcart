import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { ADD } from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();
  const send = (e) => {
      dispatch(ADD(e));
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Foodcart</h2>
      <div className="row d-flex justify-content-center text-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>Restaurant: {element.rname}</Card.Title>
                  <Card.Title>{element.fname}</Card.Title>
                  <Card.Text>Price: ₹{element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary" className="col-lg-12" onClick={()=> send(element)}>
                    Add To Cart <i class="fa-solid fa-cart-plus"></i>
                  </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
