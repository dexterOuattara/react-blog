import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";
import RecentPosts from "./RecentPosts";

const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img alt="dexter ouattara" src={props.src} />
    </div>
  );
};
const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card>
        <div
          className="galleryPost"
          style={galleryStyle}
          style={{ width: "100%" }}
          className="galleryPost"
          style={galleryStyle}
        >
          <ImageGallery 
            largeImageWidht="70%"
            smallWigth="30%"
          />
          <section style={{ width: "70%" }}>
            <div className="">
              <img
                alt="dexter ouattara"
                src={require("../../blogPostImages/pavillons.png")}
              />
            </div>
          </section>
          <section className={"sideImageWrapper"} style={{ width: "30%" }}>
            <SideImage
              height={sideImageHeight}
              src={require("../../blogPostImages/fitness-blog-post.jpg")}
            />

            <SideImage
              height={sideImageHeight}
              src={require("../../blogPostImages/memories-from.jpg")}
            />

            <SideImage
              height={sideImageHeight}
              src={require("../../blogPostImages/fitness-blog-post.jpg")}
            />
          </section>
        </div>
      </Card>

      <section className="HomeContainer">
        <RecentPosts style={{ width: "70%" }} />
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
