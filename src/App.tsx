import "./App.css";
import RoutesConfig from "./config/routes";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RoutesConfig />
      </AuthContextProvider>
    </>
  );
}

export default App;
