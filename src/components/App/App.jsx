import ActivityResume from '../Pages/ActivityResume/ActivityResume';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityResume
          number={10}
          activityTitle={'Parlement de Budapest'}
          avatar={true}
          address={'3 Rue du Blaireau'}
          price={15}
          openDays={'Lundi Mardi Vendredi'}
          openTime={'8h-15h'}
          url={'http://le-site-du-blaireau.com'}
          description={'Super visite à faire'}
          activityCategory={'culture'}
        />
      </header>
    </div>
  );
}

export default App;