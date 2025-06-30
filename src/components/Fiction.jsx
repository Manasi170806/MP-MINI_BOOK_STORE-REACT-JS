import fictionalData from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div>
      <h1 data-testid="books-container-title">Fictional Books</h1>

      <div
        className="books-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {/* Map all Fictional Books here */}
        {fictionalData.map((el,i)=><BookCard key={i} author={el.author} img={el.img} price={el.price} title={el.title} year={el.year} />)}
      </div>
    </div>
  );
}
