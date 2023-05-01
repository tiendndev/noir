import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
   return (
      <div>
         <Topbar />
         <Header />
         <Navbar />
         <div className="container">{children}</div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
