import { RouterProvider } from "react-router-dom";
import Signup from "./components/google/Signup";
import router from "./routers/router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
