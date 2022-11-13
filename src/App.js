import './App.css';
// import CounterView from './features/counter/CounterView';

import Postlist from './features/posts/Postlist';
import AddPostsForm from './features/posts/AddPostsForm';

function App() {
  return (
    <div className="App">
      {/* <CounterView /> */}
      <AddPostsForm />
      <Postlist />
    </div>
  );
}

export default App;
