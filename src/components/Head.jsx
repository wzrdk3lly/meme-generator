import trollImage from "../assets/Troll.png";

export default function Head() {
  return (
    <div className="div--head">
      <div className="div--h1">
        <img className="img--troll" src={trollImage} />
        <h1 className="h1--head">Meme Generator</h1>
      </div>{" "}
      <p> Wzrdk3lly's React Project</p>
    </div>
  );
}
