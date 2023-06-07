import { ClickCounter } from './ClickCounter';
import './index.css';

const App = () => {
  const name = "Shawn there";
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
