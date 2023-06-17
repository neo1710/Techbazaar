import { Button, Heading, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomePageProductsCard from "../Components/HomePageProductsCard";
import speaker from "../Images/speaker.svg";
import bag from "../Images/bag.svg";
import headphoneBuds from "../Images/headphoneBuds.svg";
import watch from "../Images/watch.svg";
import camera from "../Images/camera.svg";
import pinkHeadphone from "../Images/pinkHeadphone.svg";
import blackHeadphone from "../Images/blackHeadphone.svg";
import bottol from "../Images/bottol.svg";
import blueSpeaker from "../Images/blueSpeaker.svg";
import greenBuds from "../Images/greenBuds.svg";
import macBook from "../Images/macBook.svg";
import mobile from "../Images/mobile.svg";
import wallet from "../Images/wallet.svg";
import zebronic from "../Images/zebronic.svg";

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

      <div style={{ margin: "60px 80px 0px 80px" }}>
        <Heading fontSize="24px" margin={"0px 0px 36px 0px"}>
          Today's Best Deals For You
        </Heading>
        <div className="productCards">
          <HomePageProductsCard
            image={speaker}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="HomePod Mini"
          />
          <HomePageProductsCard
            image={watch}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="Smart Watch"
          />
          <HomePageProductsCard
            image={pinkHeadphone}
            price="$52.30"
            text="Pink Gold Strap, Free Size"
            title="AirPods Max"
          />
          <HomePageProductsCard
            image={bottol}
            price="$10"
            text="Pink Gold Strap, Free Size"
            title="Pendletone Water Bottol"
          />
          <HomePageProductsCard
            image={camera}
            price="$61"
            text="Pink Gold Strap, Free Size"
            title="Pink Camera"
          />
          <HomePageProductsCard
            image={bag}
            price="$11"
            text="Pink Gold Strap, Free Size"
            title="Hand Bags Pink"
          />
          <HomePageProductsCard
            image={blackHeadphone}
            price="$9"
            text="Pink Gold Strap, Free Size"
            title="Black & Blue Headphone"
          />
          <HomePageProductsCard
            image={headphoneBuds}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="Black Headphone Buds"
          />
        </div>
      </div>

      <div style={{ margin: "60px 80px 0px 80px " }}>
        <Heading fontSize="24px" margin={"0px 0px 36px 0px"}>
          Choose By Brand
        </Heading>

        <div
          style={{
            display: "grid",
            gap: "22px",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0A4daktaFO2YPy_PXJ-gQ9ZBWCePNib_NFyfhRk24g&usqp=CAU&ec=48665699"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Steples
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/boulder/sprouts-logo-e4e8d80f5056a36_e4e8d8cf-5056-a36a-071fb0c1945e7c79.png"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Spouts
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://seeklogo.com/images/G/grocery-outlet-logo-D3B06DC84B-seeklogo.com.png"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Grosery Outlet
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://media.licdn.com/dms/image/C560BAQEqg-5hBXz4lw/company-logo_200_200/0/1595613376638?e=2147483647&v=beta&t=SpoLuHLjwNB3EpAlls98d4E3x9_rl4sdUHsbJRbYt4Q"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Mollie stones
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://s3.amazonaws.com/media.locally.net/logo-270x270/2_2016-02-22-10-57-06.gif"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Sports Basement
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://static.ambitionbox.com/assets/v2/images/rs:fit:200:200:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3RoZS1jb250YWluZXItc3RvcmUuanBn.webp"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Container Store
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Target
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
          <div className="brandCard">
            <div
              style={{
                width: "50px",
                borderRadius: "50px",
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/e4fcf7xwnbuzevlchapd"
                alt="image"
              />
            </div>
            <div>
              <Heading fontSize={"18px"} fontWeight={"600"}>
                Bevmo!
              </Heading>
              <Text>Delivery with in 24 hrs</Text>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: "60px 80px 0px 80px " }}>
        <Heading fontSize="24px" margin={"0px 0px 36px 0px"}>
          Get Up To 70% Off
        </Heading>

        <div className="offerCards">
           <div style={{width:"23%", borderRadius:"12px", background:"#FFE8E5"}}>
            <Heading fontSize={"18px"} margin={"16px 18px 0px 18px"}>Save</Heading>
            <Heading fontSize={"30px"} margin={"2px 18px 0px 18px"} color="#AD564D" >$100</Heading>
            <Text fontSize={"14px"}  margin={"16px 18px 20px 18px"}>Exploring Our Furniture And home Furnishing Range</Text>
            <div style={{height:"200px"}}>
                <img style={{width:"100%",height:"100%" ,objectFit:"cover", borderRadius:"0px 0px 12px 12px"}} src="https://thumbs.dreamstime.com/b/lot-chairs-pink-background-d-render-furniture-mock-color-182221838.jpg" alt="image" />
            </div>
           </div>
           
           <div style={{width:"23%", borderRadius:"12px", background:"#E1F1FF"}}>
            <Heading fontSize={"18px"} margin={"16px 18px 0px 18px"}>Save</Heading>
            <Heading fontSize={"30px"} margin={"2px 18px 0px 18px"} color="#46739A" >$110</Heading>
            <Text fontSize={"14px"}  margin={"16px 18px 20px 18px"}>Exploring Our Furniture And home Furnishing Range</Text>
            <div style={{height:"200px"}}>
                <img style={{width:"100%",height:"100%" ,objectFit:"cover", borderRadius:"0px 0px 12px 12px"}} src="https://t3.ftcdn.net/jpg/00/76/96/36/360_F_76963662_WuX2v8xDTapShA8gNKe6NN51NJfPbmzy.jpg" alt="image" />
            </div>
           </div>
           <div style={{width:"23%", borderRadius:"12px", background:"#FFEEE5"}}>
            <Heading fontSize={"18px"} margin={"16px 18px 0px 18px"}>Save</Heading>
            <Heading fontSize={"30px"} margin={"2px 18px 0px 18px"} color="#9E6D51" >$130</Heading>
            <Text fontSize={"14px"}  margin={"16px 18px 20px 18px"}>Exploring Our Furniture And home Furnishing Range</Text>
            <div style={{height:"200px"}}>
                <img style={{width:"100%",height:"100%" ,objectFit:"cover", borderRadius:"0px 0px 12px 12px"}} src="https://img.freepik.com/premium-psd/book-mockup-isolated-soft-color-background_78895-1964.jpg?w=2000" alt="image" />
            </div>
           </div>
           <div style={{width:"23%", borderRadius:"12px", background:"#FFECF1"}}>
            <Heading fontSize={"18px"} margin={"16px 18px 0px 18px"}>Save</Heading>
            <Heading fontSize={"30px"} margin={"2px 18px 0px 18px"} color="#A35369" >$40</Heading>
            <Text fontSize={"14px"}  margin={"16px 18px 20px 18px"}>Exploring Our Furniture And home Furnishing Range</Text>
            <div style={{height:"200px"}}>
                <img style={{width:"100%",height:"100%" ,objectFit:"cover", borderRadius:"0px 0px 12px 12px"}} src="https://img.freepik.com/premium-photo/beautiful-girls-bag-pastel-mint-color-pink-background_72402-2380.jpg?w=2000" alt="image" />
            </div>
           </div>
         <div>

         </div>
        </div>
      </div>

      <div className="poster">

        <div className="greeBox">
          <Heading fontSize={"44px"} marginBottom={"20px"}>Get 5% Cash Back On $200</Heading>
          <Text fontSize={"18px"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad explicabo beatae pariatur laudantium est! Exercitationem, maiores.</Text>
          <button >Learn More</button>
        </div>
      </div>
     
      <div style={{ margin: "60px 80px 0px 80px" }}>
        <Heading fontSize="24px" margin={"0px 0px 36px 0px"}>
          Weekly Populer Products
        </Heading>
        <div className="productCards">
          <HomePageProductsCard
            image={mobile}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="HomePod Mini"
          />
          <HomePageProductsCard
            image={zebronic}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="Smart Watch"
          />
          <HomePageProductsCard
            image={macBook}
            price="$52.30"
            text="Pink Gold Strap, Free Size"
            title="AirPods Max"
          />
          <HomePageProductsCard
            image={greenBuds}
            price="$10"
            text="Pink Gold Strap, Free Size"
            title="Pendletone Water Bottol"
          />
          <HomePageProductsCard
            image={blueSpeaker}
            price="$61"
            text="Pink Gold Strap, Free Size"
            title="Pink Camera"
          />
          <HomePageProductsCard
            image={wallet}
            price="$11"
            text="Pink Gold Strap, Free Size"
            title="Hand Bags Pink"
          />
          <HomePageProductsCard
            image={blackHeadphone}
            price="$9"
            text="Pink Gold Strap, Free Size"
            title="Black & Blue Headphone"
          />
          <HomePageProductsCard
            image={headphoneBuds}
            price="$20"
            text="Pink Gold Strap, Free Size"
            title="Black Headphone Buds"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
