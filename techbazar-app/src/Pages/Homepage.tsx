import { Button, Heading, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomePageProductsCard from "../Components/HomePageProductsCard";
import speaker from "../Images/speaker.svg"
import bag from "../Images/bag.svg"
import headphoneBuds from "../Images/headphoneBuds.svg"
import watch from "../Images/watch.svg"
import camera from "../Images/camera.svg"
import pinkHeadphone from "../Images/pinkHeadphone.svg"
import blackHeadphone from "../Images/blackHeadphone.svg"
import bottol from "../Images/bottol.svg"

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />

      <div className="bgPoster">
        <div style={{ width: "500px", marginTop: "50px" }}>
          <Heading fontSize="50px" color="#00472F">
            Shopping And Department Store.
          </Heading>
          <Text fontSize="18px" marginTop="30px">
            Shopping is a bit of relaxing hobby from me, which is something
            troubling for the bank balance
          </Text>
          <Button
            marginTop="30px"
            borderRadius="50px"
            background="#00472F"
            color="#fff"
            padding="0px 25px 0px 25px"
            transition=".5s"
            _hover={{
              backgroundColor: "#006040",
              padding: "2px 27px 2px 27px",
              transition: ".5s",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="cardDiv">
        <Heading fontSize="24px" marginBottom={"36px"}>
          Shop Our Top Categories
        </Heading>

        <div className="cardParent">
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Furniture
            </Text>
            <img
              src="https://cutewallpaper.org/25/barber-dark-wallpaper/829824883.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Hand Bag
            </Text>
            <img
              src="https://st3.depositphotos.com/16122460/35400/i/450/depositphotos_354006318-stock-photo-red-stylish-woman-bag-pale.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Books
            </Text>
            <img
              src="https://img.freepik.com/premium-photo/various-fresh-spring-flowers-that-comes-out-book-against-pink-background-love-reading-concept_487960-490.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Tech
            </Text>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/310/649/original/yellow-abstract-background-and-a-realistic-computer-laptop-for-business-vector-illustration.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Sneakers
            </Text>
            <img
              src="https://e0.pxfuel.com/wallpapers/762/523/desktop-wallpaper-jordan-1-chicago-red-jordan-shoes-thumbnail.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Trivel
            </Text>
            <img
              src="https://img.freepik.com/free-photo/travel-concept-with-baggage-passport_23-2149030573.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Art
            </Text>
            <img
              src="https://chatelaine.com/wp-content/uploads/2019/05/great-running-shoes-810x608-1558535869.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Education
            </Text>
            <img
              src="https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-school-education-and-training-publicity-background-image_127572.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="absolute"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Beauty
            </Text>
            <img
              src="https://img.freepik.com/premium-photo/makeup-background-beauty-product-color-surface_153977-620.jpg"
              alt="img"
            />
          </div>
          <div>
            <Text
              color="#fff"
              position="fixed"
              zIndex="1"
              fontSize="24px"
              width="220px"
              textAlign="center"
              marginTop="40px"
              fontWeight="600"
            >
              Hats
            </Text>
            <img
              src="https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0161-Inlineimage14.jpg?v=1552012107"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div style={{ margin: "60px 80px 0px 80px " }}>
        <Heading fontSize="24px" margin={"0px 0px 36px 0px"}>
          Today's Best Deals For You
        </Heading>
        <div className="productCards">
          <HomePageProductsCard
            image= {speaker}
            price="$20"
            text= "Pink Gold Strap, Free Size"
            title="HomePod Mini"
          />
          <HomePageProductsCard
            image= {watch}
            price="$20"
            text= "Pink Gold Strap, Free Size"
            title="Smart Watch"
          />
          <HomePageProductsCard
            image= {pinkHeadphone}
            price="$52.30"
            text= "Pink Gold Strap, Free Size"
            title="AirPods Max"
          />
          <HomePageProductsCard
            image= {bottol}
            price="$10"
            text= "Pink Gold Strap, Free Size"
            title="Pendletone Water Bottol"
          />
          <HomePageProductsCard
            image= {camera}
            price="$61"
            text= "Pink Gold Strap, Free Size"
            title="Pink Camera"
          />
          <HomePageProductsCard
            image= {bag}
            price="$11"
            text= "Pink Gold Strap, Free Size"
            title="Hand Bags Pink"
          />
          <HomePageProductsCard
            image= {blackHeadphone}
            price="$9"
            text= "Pink Gold Strap, Free Size"
            title="Black & Blue Headphone"
          />
          <HomePageProductsCard
            image= {headphoneBuds}
            price="$20"
            text= "Pink Gold Strap, Free Size"
            title="Black Headphone Buds"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
