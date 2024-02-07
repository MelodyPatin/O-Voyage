import NavBar from '../../../Reusable/NavBarNico/NavBarNico';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import LastPart from './LastPart/LastPart';
import Footer from '../../../Reusable/Footer/Footer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBar />
      <Header />
      <Presentation />
      <LastPart />
      <Footer />
    </div>
  );
};

export default HomePage;
