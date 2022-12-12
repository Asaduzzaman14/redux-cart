import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>

    </div>
  );
}

export default App;
