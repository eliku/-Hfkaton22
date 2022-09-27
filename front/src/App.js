import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import DCandidetes from './components/DCandidates';
import ChatBotOut from './components/chatbot';


function App() {
  return (
    <Provider store={store}>
      <DCandidetes />
      <ChatBotOut />
    </Provider>

  );
}

export default App;
