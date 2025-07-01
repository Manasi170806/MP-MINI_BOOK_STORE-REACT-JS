export default function BookCard(props) {
  return (
    <div data-testid="book-card" className="book-card">
      <img src={props.img} alt={""} className="book-card-img"/>
      <b>
        <div data-testid="book-card-title" className="book-card-title">
          {props.title}
          <span className="book-card-year"> &nbsp;&nbsp;{props.year}</span>
        </div>
      </b>
      <div data-testid="book-card-author" className="book-card-author">{props.author}</div>
      <div data-testid="book-card-price" className="book-card-price">{props.price}</div>
    </div>
  );
}
