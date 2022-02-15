import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContactoPage from './src/pages/ContactoPage';
import HomePage from './src/pages/HomePage';
import NosotrosPage from './src/pages/NosotrosPage';
import NovedadesPage from './src/pages/NovedadesPage';


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
