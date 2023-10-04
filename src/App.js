import Homepage from "./Pages/Homepage";
import './App.css';
import { Route ,Routes} from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
export const url="http://localhost:5000"

function App() {
  return (
    <div className="App">
      
      <Routes>
       <Route path="/" element={<Homepage/>}  />
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
