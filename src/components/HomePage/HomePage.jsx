import NavBarNico from '../Reusable/NavBarNico/NavBarNico';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import LastPart from './LastPart/LastPart';
import Footer from '../Reusable/Footer/Footer';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBarNico />
      <Header />
      <Presentation />
      <LastPart />
      <Footer />
    </div>
  );
};

export default HomePage;
