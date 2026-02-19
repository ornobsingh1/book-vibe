import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Books data={data} />
    </div>
  );
};

export default Home;
