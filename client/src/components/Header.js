import NavButton from './NavButton';

function Header() {
  return (
    <header>
      <NavButton name='Home' path='/'/>
      <NavButton name='Table View' path='/TableView'/>
      <NavButton name='Chart View' path='/ChartView'/>
      <button onClick={() => console.log('Modal pops up')}>Track</button>
    </header>
  );
}

export default Header;