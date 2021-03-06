import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import HelloWorld from '../../HelloWorld/Container/helloWorld';

const history = createBrowserHistory();

export interface Props {
}

export default class App extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
 
    var RoutingApp = (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={HelloWorld} />
          </Switch>
        </div>
      </Router>
    </div>);
    return RoutingApp;
}
}