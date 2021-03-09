import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import TableView from './TableView';
import ChartView from './ChartView';
import Track from './Track';

function Pages() {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/TableView'>
          <TableView />
        </Route>
        <Route exact path='/ChartView'>
          <ChartView />
        </Route>
        <Route exact path='/Track'>
          <Track />
        </Route>
      </Switch>
    </main>
  );
}

export default Pages;