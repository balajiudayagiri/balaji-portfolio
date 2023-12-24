import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { AppRoutes } from './Utils/RoutesConstant';
import Home from './Home/Home';
import { ModalProvider } from './Utils/ModalProvider';
import About from './components/About/About';

// Define your components for each route
const Contact = () => <h1>Contact</h1>;

function App() {
  return (
    <ModalProvider>
      <Header />
      <Routes>
        <Route path={AppRoutes.ROOT} element={<Home />} />
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT_ME} element={<About />} />
        <Route path={AppRoutes.CONTACT_ME} element={<Contact />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
