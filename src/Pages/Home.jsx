import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Countries from "../components/Countries";
import LatestSpots from "../components/LatestSpots";
import Reviews from "../components/Reviews";


const Home = () => {
    return (
        <div>
            <Banner/>
            <LatestSpots/>
            <Countries/>
            <Reviews/>
            <ContactUs/>
        </div>
    );
};

export default Home;