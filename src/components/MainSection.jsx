import React from "react";
import memesData from "../memesData.jsx";
/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */
export default function MainSection() {
  let [meme, setImageUrl] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  let [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleOnClick() {
    let arrayOfImages = allMemeImages.data.memes;
    let randomImageObject =
      arrayOfImages[Math.floor(Math.random() * arrayOfImages.length)];
    setImageUrl((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomImageObject.url,
      };
    });
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
      <div className="div-frame">
        {meme.randomImage && (
          <img className="img--meme" src={meme.randomImage} />
        )}
        <div className="div--upper-text">Upper Text</div>
        <div className="div--bottom-text">Bottom Text</div>
      </div>
    </main>
  );
}
