import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="wrapper">
      <Sidebar></Sidebar>

        <div className="main">
            
        <Navbar></Navbar>

        <main class="content">
            <div className="container-fluid p-0">
                <Dashboard></Dashboard>
            </div>
        </main>

        <Footer></Footer>

        </div>
    </div>
  );
}

export default App;
