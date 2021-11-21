// import { ThemeProvider } from "@mui/material";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CardDisplay from "./Todaysbuild/CardDisplay";
import HeaderPart from "./Todaysbuild/HeaderPart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProject from "./Todaysbuild/CreateProject";
import RegisterUser from "./Todaysbuild/RegisterUser";
import EdithPage from "./Todaysbuild/EdithPage";

// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import { theme } from "./Components/GlobalTheme";
// import HeaderView from "./Components/HeaderView";
// import HomeScreen from "./Components/HomeScreen";
// import Body1 from "./Projects/Body1";
// import Body2 from "./Projects/Body2";
// import ProjectHeader from "./Projects/ProjectHeader";
function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <HeaderPart />
          <Routes>
            <Route path="/" element={<CardDisplay />} />
            <Route path="/create" element={<CreateProject />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/edit/:id" element={<EdithPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

// <QueryClientProvider client={queryClient}>

// <Router>

//   <ProjectHeader />
//   <Routes>
//     <Route path="/" element={<HomeScreen />} />
//     <Route path="about" element={<About />} />
//     <Route path="bodyPage" element={<Body1 />} />
//     <Route path="bodyp" element={<Body2 />} />
//   </Routes>
// </Router>

// </QueryClientProvider>
