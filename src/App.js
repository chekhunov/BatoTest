import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Home } from './pages';
import { Header,Footer} from './components';
import AppContext from './context';

const App = ({appState}) => {
  const [popupContent, setPopupContent] = React.useState([]);

  return (
    <AppContext.Provider value={{appState,  popupContent, setPopupContent}}>
      <Header appState={appState} />
      <Route path="/" exact><Home  appState={appState} /></Route>
      <Footer appState={appState} />
      {/* <Popup /> */}
    </AppContext.Provider>
  );
};

export default App;
