import CardList from "./components/CardList";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="bg-pink-200 max-w-screen-md mx-auto">
      <CardList />
    </div>
  );
};

export default App;
