import meme from "../assets/memeimg.png";
import memeData from "../memesData.jsx";
import React from "react";

export default function MainSection() {
  let [imageUrl, setImageUrl] = React.useState("");

  function handleOnClick() {
    let arrayOfImages = memeData.data.memes;
    let randomImageObject =
      arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];

    setImageUrl(randomImageObject.url);
  }
  return (
    <main className="main--content">
      <div className="div--input">
        <input type="text" />
        <input type="text" />
      </div>
      <button className={"btn--newImg"} onClick={handleOnClick}>
        Get a new meme image 🖼{" "}
      </button>
      {/* conditional rendering to create img incase there is no image url */}
      {imageUrl && <img className="img--meme" src={imageUrl} />}
    </main>
  );
}
