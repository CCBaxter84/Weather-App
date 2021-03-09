import NavButton from './NavButton';

function Header() {
  return (
    <header>
      <NavButton name='Home' path='/'/>
      <NavButton name='Table View' path='/TableView'/>
      <NavButton name='Chart View' path='/ChartView'/>
      <NavButton name='Track' path='/Track'/>
    </header>
  );
}

export default Header;