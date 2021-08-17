import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { Home } from './pages/Home';
import { NewHome } from "./pages/NewHome";

import {AuthContextProvider} from './contexts/AuthContext'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms/new" component={NewHome}/>
          <Route path="/rooms/:id" component={Room}/>
          <Route path="/admin/rooms/:id" component={AdminRoom}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
