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

store.dispatch(addExpense({ title: 'Water Bill', amount: 45, date: moment.now() }))
store.dispatch(addExpense({ title: 'Electricity Bill', amount: 100, date: moment.now() }))
store.dispatch(addExpense({ title: 'Gas Bill', amount: 60, date: moment.now() }))
store.dispatch(searchByText())
store.dispatch(sortByAmount())

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


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
