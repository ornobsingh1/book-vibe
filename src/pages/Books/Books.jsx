import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;
