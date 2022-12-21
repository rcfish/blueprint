import './App.css';
import Navigation from './Navigation';
import Core from './Core';
import ExTabs from './Tabs';

function App() {
  return (
    <div class="bp4-dark">
      <Navigation />
      <main class="content-wrapper" role="main">
        <Core />
        <ExTabs />
      </main>
    </div>
  );
}

export default App;
