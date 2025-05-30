import { Navigate, Route, Routes } from "react-router-dom";
// import PermanentDrawer from "../components/PermanentDrawer";
import { HomePage } from "../pages/HomePage";
// import { SideBar } from "../components/SideBar";
// import { Header } from "../components/Header";
// import ColumnsGrid from "../components/ColumnsGrid";
import { MainPage } from "../components/MainPage";
// import StandardImageList from "../components/StandardImageList";
// import { HeaderAppBar } from "../components/HeaderAppBar";

export const MyAppRouter = () => {
  return (
    <>
      {/* <SideBar/>  */}
      {/* <Header />  */}
      {/* <ColumnsGrid /> */}
      <MainPage/> 
      {/* <StandardImageList /> */}
      {/* <PermanentDrawer /> */}
      {/* <HeaderAppBar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

