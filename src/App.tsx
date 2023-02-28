import React from 'react';
import theme from "./theme";
import './App.css';
import {ThemeProvider} from "@mui/material";
import {store} from './services/store'
import {BrowserRouter} from 'react-router-dom';
//@ts-ignore
import {Provider} from 'react-redux'
import AppRouter from "./AppRoutes";
import {Layout} from "./component/Layout";
import CustomGlobalSnackBar from "./component/customMUIComponents/CustomGlobalSnackBar";

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <div className="App">
              <CustomGlobalSnackBar/>
              <Layout>
                <AppRouter/>
              </Layout>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
