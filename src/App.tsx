import { ClickCounter } from './ClickCounter';
import './index.css';

const App = () => {
  return (
    <>
      <h1>Hello world there</h1>
      <p>{process.env.name}</p>
      <p>{process.env.NODE_ENV}</p>
      <ClickCounter />
    </>
  );
};

export { App };
