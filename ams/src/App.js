import React from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./themes";
import AllRoutes from "./routes";
import Header from "./pages/Header";
// import Loader from "./common/components/Loader";
// import GenericErrorBox from "./common/components/GenericErrorBox";
// import AlertModal from "./common/components/AlertModal";
// import GenericDialogBox from "./common/components/GenericDialogBox";
// import IdleTimerComponent from "./common/components/IdleTimerComponent";
// import { RefreshTokenComponent } from "./pages/FifteenGH/UserVerification/RefreshTokenComponent";

export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <RefreshTokenComponent /> */}
        <ThemeProvider theme={theme}>
          {/* <Loader /> */}
          <Header/>
          <Box id="appContainer">
            {/* <GenericModal /> */}
            {/* <IdleTimerComponent/> */}

            {/* error modal */}
            {/* <GenericErrorBox />
          <GenericDialogBox />
          <AlertModal /> */}
            <AllRoutes />
          </Box>
        </ThemeProvider>
      </Provider>
    </>
  );
}