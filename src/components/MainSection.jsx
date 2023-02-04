import meme from "../assets/memeimg.png";

export default function MainSection() {
  return (
    <main className="main--content">
      <form>
        <div className="div--input">
          <input type="text" />
          <input type="text" />
        </div>
        <button className="btn--newImg">Get a new meme image 🖼 </button>
      </form>

      <img className="img--meme" src={meme} alt="" />
    </main>
  );
}
