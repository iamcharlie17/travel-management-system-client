
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Nav';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;