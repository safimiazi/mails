import { Banner } from "../../components/Home/Banner/Banner";
import Communication from "../../components/Home/Communication/Communication";
import HomeService from "../../components/Home/HomeService/HomeService";
import HomeProdect from "../../components/Home/Product/HomeProduct";
import Write from "../../components/Home/Write/Write";

const Home = () => {
    return (
        <div className="space-y-10">
            <Banner/>
            <Write/>
            <HomeProdect/>
            <HomeService/>
            <Communication/>
        </div>
    );
};

export default Home;