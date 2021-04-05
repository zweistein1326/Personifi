import './App.css';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses';
import { sortByAmount, searchByText } from './actions/filters';
import filters from './reducers/filters';
import AppRouter from './routers/appRouter';
import { Provider } from 'react-redux';
import moment from 'moment';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
