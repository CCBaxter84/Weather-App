import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import TableView from './TableView';
import ChartView from './ChartView';
import PropTypes from 'prop-types';

// Use React Router to render last button clicked in Header
function Pages({ data, setField, currentLocation, error }) {
  return (
    <Switch>
      <Route exact path='/'>
        <Home currentLocation={currentLocation} data={data}/>
      </Route>
      <Route exact path='/TableView'>
        <TableView
          data={data}
          setField={setField}
          currentLocation={currentLocation}
          error={error}
        />
      </Route>
      <Route exact path='/ChartView'>
        {data.length > 0 ? <ChartView data={data} currentLocation={currentLocation}/> : '...Loading Chart'}
      </Route>
    </Switch>
  );
}

Pages.propTypes = {
  data: PropTypes.array.isRequired,
  setField: PropTypes.func.isRequired,
  currentLocation: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired
}

export default Pages;