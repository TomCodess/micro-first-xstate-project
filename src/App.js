import { counterMachine } from './counterMachine';
import { useMachine } from '@xstate/react';

import './App.css';

function App() {
  const [state, send] = useMachine(counterMachine);
  return (
    <div className="App">
      <h1>Tom's first xstate counter</h1>
      <h2>{state.context.count}</h2>
      <button onClick={() => send('INCREMENT')}>Increment</button>
      <button onClick={() => send('DECREMENT')}>Decrement</button>
    </div>
  );
}

export default App;