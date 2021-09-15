import React from "react";
import { Button, Carousel } from "react-bootstrap";
import Card from "./Card";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__banner">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              width="1500"
              className="carousel__image"
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="1500"
              className="carousel__image"
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="homepage__content">
        <div className="homepage__card-layout">
          <Card type="single-content" />
          <Card type="multiple-content" />
          <Card type="single-content" />
          <Card type="multiple-content" />
          <Card type="single-content" />
          <Card type="multiple-content" />
        </div>
      </div>
      <div className="homepage__footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default HomePage;
