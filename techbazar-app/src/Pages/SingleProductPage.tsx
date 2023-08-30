import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { singleProduct } from "../Redux/ProductReducer/reducer";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export interface cartItem extends singleProduct {
  quantity: number;
}

export const SingleProductPage = () => {
  const { id } = useParams();
  const [alert, setAlert] = useState<Boolean>(false);
  const [data, setData] = useState<singleProduct>({
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    brand: "",
  });

  useEffect(() => {
    axios.get(`https://techbazaar.onrender.com/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  function addToCart() {
    const dat: cartItem = { quantity: 1, ...data };
    axios
      .post(`https://techbazaar.onrender.com/Carts`, dat)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setAlert(true);
  }

  return (
    <DIV>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      {alert && (
        <Alert status="success">
          <AlertIcon />
          Added to cart
        </Alert>
      )}
      <div className="structure">
        <div className="image">
          <h1 className="title">{data?.title}</h1>
          <br />
          <img src={data?.image} alt="" />
        </div>
        <div className="details">
          <h4>{data?.title}</h4>
          <br />
          <h3>{data?.description}</h3>
          <p>
            Headphones are a pair of padded speakers which you wear over your
            ears in order to listen to a radio or recorded music, or for using a
            phone without other people hearing it
          </p>
          <h3 className="price">₹{data?.price}</h3>

          <button className="btn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <br />

      <h1 className="simT">Similar Products</h1>
      <br />
      <div className="sim">
        <div>
          <img
            src="https://www.bhphotovideo.com/images/images2500x2500/samsung_np300e5k_l04us_15_6_notebook_3_1258546.jpg"
            alt=""
          />
          <h2>Samsung Notebook 3</h2>
        </div>
        <div>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6413/6413248ld.jpg"
            alt=""
          />
          <h2>Nitro 5 acer gaming laptop</h2>
        </div>
        <div>
          <img src="https://www.techpowerup.com/img/16-10-12/52c.jpg" alt="" />
          <h2>ASUS rogue gaming keyboard</h2>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.c0Bg5NYgpf9BcfR2Gp3W5wHaHa?pid=ImgDet&rs=1"
            alt=""
          />
          <h2>Logitech gaming Headphone</h2>
        </div>
      </div>
      <br />
      <Footer />
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: 0px;
  width: 100%;
  .structure {
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 20px;
    box-shadow: rgba(187, 187, 187, 0.25) 0px 13px 27px -5px,
      rgba(113, 113, 113, 0.3) 0px 8px 16px -8px;
    padding: 40px;
  }
  .image {
    width: 45%;
    text-align: center;
    margin-bottom: 10px;
    
  }
  .image:hover {
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
  .image > img {
    height: 300px;
    margin: auto;
    margin-bottom: 10px;
  }
  .details {
    margin-top: 4%;
    font-size: 22px;
    
    width: 45%;
    padding: 10px;
  }
  .details > h4 {
    font-weight: 600;
    font-size: 26px;
    margin-bottom: -26px;
  }
  .details > p {
    font-size: 16px;
    margin:10px 0px 10px 0px
    
  }
  .details > h3 {
    font-size: 22px;
  }
  .title {
    font-size: 26px;
    font-weight: 500;
    margin-top: 50px;
  }
  .btn {
    padding: 10px;
    width: 140px;
    font-size: 18px;
  }
  .price {
    color: green;
    font-size: 25px;
    margin-top: 10px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  button {
    background-color: #00472f;
    color: white;
    border-radius: 6px;
    width: 20%;
    box-shadow: #00472f 0px 5px 15px;
  }
  button:hover {
    background-color: #00593b;
  }
  .ron {
    display: flex;
    width: 70%;
    height: 60px;
    background-color: #00472f;
    justify-content: space-around;
    align-items: center;
  }
  .ron > div {
    width: 20%;
    height: 50px;
    border-radius: 50%;
  }
  .ron > div:hover {
    width: 25%;
    height: 55px;
  }
  .black {
    background-color: black;
  }
  .white {
    background-color: white;
  }
  .grey {
    background-color: grey;
  }
  .c {
    font-size: large;
    color: #00472f;
  }
  .sim {
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
  }

  .sim > div:hover{
    transform: scale(1.03);
    transition: 0.2s ease-in-out;
  }
  .sim > div {
    width: 22%;
    box-shadow: rgba(144, 144, 144, 0.25) 0px 13px 27px -5px,
      rgba(113, 113, 113, 0.3) 0px 8px 16px -8px;
    text-align: center;
    margin: auto;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 20px;
    padding:26px
  }
  .sim > div > img {
    height: 160px;
    margin: auto;
    margin-bottom:20px
  }
  .sim > div > h2 {
    font-size:16px;
    font-weight: 500;
  }

  .simT {
    font-size: 26px;
    margin:50px 0px 20px 0px;
    font-weight: 500;
    text-align: center;
  }
`;
