import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Sidebar';
import Header from './Header';
// import Header from "./Header.js"
// import Sidebar from "./Sidebar.js"

  

function App() {
  return (
    <div className="App">
          
            <div className="container invoice">
              <Header/>
                    <section >
                    <Sidebar/>
                </section>
        </div>

                


    </div>
        

  );
}

export default App;

