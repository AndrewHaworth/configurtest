import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./common-components/Header";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./common-components/Footer";
import Data from "./pages/Data";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 1rem;
`;

const App = () => (
  <>
    <Header />
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Data" component={Data} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={NoPage} />
      </Switch>
    </PageWrapper>
    <Footer />
  </>
);

export default App;
