import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="border border-sky-200 card bg-base-100 shadow-xl p-4 hover:bg-green-50 ease-in-out duration-500">
        <figure className="bg-blue-100 py-8 rounded-2xl">
          <img src={image} className="h-41.5" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-xs bg-green-200 text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed my-1"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>⭐ {rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
