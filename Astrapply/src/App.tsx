import "./App.css";
import Home from "./pages/home";
import Dash from "./pages/dash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import wave from "./assets/wave.svg";

const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="siteContainer" style={{ backgroundImage: `url(${wave})` }}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/dash" element={<Dash></Dash>}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
