import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import MainPage from "./pages/Main";
import ArticlePage from "./pages/articles/[id]";
import ErrorPage from "./pages/Error";
import "./styles/scss/common.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
