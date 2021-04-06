import './App.css';
import configureStore from './store/configureStore';
// import getVisibleExpenses from './selectors/expenses'
import { startSetExpenses } from './actions/expenses';
// import { sortByAmount, searchByText } from './actions/filters';
// import filters from './reducers/filters';
import AppRouter from './routers/appRouter';
import { Provider } from 'react-redux';

const store = configureStore();

var App = () => { return <p>Loading...</p> }

store.dispatch(startSetExpenses()).then(App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>)
})

export default App;
