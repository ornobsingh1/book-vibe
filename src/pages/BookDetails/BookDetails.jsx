import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = Number(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id)
  }

  return (
    <>
      <div className="flex justify-center items-center my-16 p-3">
        <div>
          <img className="w-60 shadow-2xl" src={image} alt="" />
          <h5 className="text-2xl font-semibold my-4">Book Name: {bookName}</h5>
        </div>
        <div>
          <button onClick={()=> handleMarkAsRead(id)} className="btn btn-accent m-2 shadow-xl">Mark as Read</button>
          <button className="btn btn-info m-2 shadow-xl">Add To WishList</button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
