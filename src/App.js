import React,{useState} from 'react'
import Recipe from './Recipe'

function App() {

  const [search,setSearch] = useState('');
  const [data,setData] = useState('');

  const changeHandler = (e) => setSearch(e.target.value)

  const YOUR_APP_ID = "83975b2e";
  const YOUR_APP_KEY ="7850a87521896b6669483cbb5908db01";


  const submitHandler = (e)=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      resp=>resp.json()
      ).then(data=>setData(data.hits))
  }

  return (
    <div>
       <center><br/>
      <div className='card' style={{"backgroundColor":"Beige"}} >
        <div className='card-body'>
          <h3 className='card-title'>Food Recipe App</h3>
          <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler}/><br/><br/>
           <input type="submit" value="Search Recipe" class="btn btn-primary"/><br/><br/>
          </form>
          {data.length >=1 ? <Recipe data={data}/> : null}  
        </div>
      </div>
      </center> 
    </div>
  );
}

export default App;
