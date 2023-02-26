import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Stake from "./pages/Stake";
import Claim from "./pages/Claim";
import Lock from "./pages/Lock";

import { Connectors } from "web3-react";
// const { InjectedConnector, NetworkOnlyConnector } = Connectors

// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

// const Infura = new NetworkOnlyConnector({
//   providerURL: 'https://mainnet.infura.io/v3/...'
// })

// const connectors = { MetaMask, Infura }

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/stake" component={Stake} />
          <Route exact path="/claim" component={Claim} />
          <Route exact path="/lock" component={Lock} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
