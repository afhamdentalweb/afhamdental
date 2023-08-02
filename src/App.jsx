import Home from "./pages/Home";
import DSPWhiteClinic35Red from "./pages/DSPWhiteClinic35Red";

import {
  BrowserRouter as Router,
  Route,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route
          exact
          path="/dsp-white-clinic-35-red"
          element={<DSPWhiteClinic35Red />}
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>

    // <>
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route
    //         exact
    //         path="/dsp-white-clinic-35-red"
    //         element={<DSPWhiteClinic35Red />}
    //       />
    //     </Routes>
    //   </Router>
    // </>
  );
}

const Root = () => {
  return (
    <>
      {/* <div>Root</div> */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
