import nonfictionalData from "../nonfiction.json"

export default function NonFiction() {
  return (
    <div>
      <h1 data-testid="books-container-title">Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonfictionalData.map((el,i)=><BookCard key={i} author={el.author} img={el.img} price={el.price} title={el.title} year={el.year} />)}
      </div>
    </div>
  );
}
