import React from "react";

export default function MainSection() {
  let [meme, setImageUrl] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  let [allMemes, setallMemes] = React.useState("");
  // Leaned how to use an API and fetch the data one time after an event was called
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memeObject) => setallMemes((prevData) => memeObject.data.memes));
  }, []);

  function handOnChange(event) {
    let { value, name } = event.target;
    setImageUrl((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleOnClick() {
    let arrayOfMemes = allMemes;
    let randomImageObject =
      arrayOfMemes[Math.floor(Math.random() * arrayOfMemes.length)];
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
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handOnChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handOnChange}
        />
      </div>
      <button className={"btn--newImg"} onClick={handleOnClick}>
        Get a new meme image 🖼{" "}
      </button>
      {/* conditional rendering to create img incase there is no image url */}
      <div className="div-frame">
        {meme.randomImage && (
          <img className="img--meme" src={meme.randomImage} />
        )}
        <div className="div--upper-text">{meme.topText}</div>
        <div className="div--bottom-text">{meme.bottomText}</div>
      </div>
    </main>
  );
}
