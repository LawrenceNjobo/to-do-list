
import './App.css';
import Card from './components/Card';
import Paragraph from './components/Paragraph';
import { TodoWrapper } from './components/TodoWrapper';

let list = [
  { title: 'hello world',
    image:"hello.png"
},
  { title: 'hello world',
    image:"hello.png"
},
  { title: 'hello world',
    image:"hello.png"
},
]

function App() {
  return (
    <div className="App">
    <TodoWrapper />
   
    {list.map((item, i)=>{
      return  <Card key={i} title={item.title} imageUrl={item.image} />
    })}
    <Paragraph>
      hdkjfhkjfd <hr />
    </Paragraph>
    </div>
  );
}

export default App;
