import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-20 px-16 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold my-4">Books to freshen up your book self</h1>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
