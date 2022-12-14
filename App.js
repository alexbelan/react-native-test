import { Provider } from 'react-redux'
import AppNavigations from './src/navigations/AppNavigations';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
}
