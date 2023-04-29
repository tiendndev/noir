import Topbar from './Topbar';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

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
