import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
        <Nav />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/nosotros" exact component={NosotrosPage} />
              <Route path="/contacto" exact component={ContactoPage} />
              <Route path="/novedades" exact component={NovedadesPage} />
            </Switch>
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
