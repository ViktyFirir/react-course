import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton'; 
import Button from './components/Button/Button';

const data = [
  {
    title: 'Подготовка к обновлению курсов',
    text: 'Горные походы открывают удивительные природные ландшафты и новые маршруты.',
    date: new Date(2026, 10, 1)
  },
  {
    title: 'Поход в горы',
    text: 'Думал, что не дойду, но вид на вершине стоил всех усилий и стёртых ног.',
    date: new Date(2026, 9, 15)
  }
];

function App() {
  return (  
    <>
      <h1>Заголовок</h1>
      <p className="subtitle">Какой-то текст</p>

      <Button />

      <button className="new-memory">
        Новое воспоминание
      </button>

      <div className="journal-list">
        <CardButton>
          <JournalItem 
            title={data[0].title} 
            text={data[0].text} 
            date={data[0].date} 
          />
        </CardButton>

        <CardButton>
          <JournalItem 
            title={data[1].title} 
            text={data[1].text} 
            date={data[1].date} 
          />
        </CardButton>
      </div>
    </>
  );
}

export default App;