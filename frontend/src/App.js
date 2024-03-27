import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <CardComponent title="Card Title 1" description="This is a wider card with supporting text below as a natural lead-in to additional content." />
          </div>
          <div className="col-sm-4">
            <CardComponent title="Card Title 2" description="This card has supporting text below as a natural lead-in to additional content." />
          </div>
          <div className="col-sm-4">
            <CardComponent title="Card Title 3" description="This is a wider card with supporting text below as a natural lead-in to additional content." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
