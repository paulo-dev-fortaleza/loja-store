const Layout = () => {
  return (
    <div className="min-h-screen fleimport Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
x flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
