import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import TableView from './TableView';
import ChartView from './ChartView';
import PropTypes from 'prop-types';

function Pages({data}) {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/TableView'>
          <TableView data={data}/>
        </Route>
        <Route exact path='/ChartView'>
          <ChartView data={data}/>
        </Route>
      </Switch>
    </main>
  );
}

Pages.propTypes = {
  data: PropTypes.array
}

export default Pages;