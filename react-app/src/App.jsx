import './App.css'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton' 

function App() {
  const data = [
    {
      title:'Что-то учим',
      text:'Какой-то текст',
      date: new Date(),
    },
    {
      title:'Что-то учим 2222',
      text:'Какой-то текст 2222',
      date: new Date(),
    },
  ]

    return (
    <>
      <h1>Заголовок</h1>
      <p>Какой-то текст</p>
      <Button/>
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
      <CardButton>
        
          Новая запись
        
      </CardButton>
    </>
  );
}


export default App
