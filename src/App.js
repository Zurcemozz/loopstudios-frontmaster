import CreationDesktop from './Components/CreationDesktop';
import Creations from './Components/Creations';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Interactive from './Components/Interactive';
import Showcase from './Components/Showcase';

const App =() => {
  return (
    <>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <CreationDesktop />
      <Footer />
    </>

  );
}

export default App;
