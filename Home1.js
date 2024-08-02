import React,{useState} from "react";
import './Home.css'
import img from './img1.jpg'

function Home1 (props){

    // const len = 0;
    const [arr, setArr] = useState([]);
    const[data,setData]=useState({});
    const[del,setDel]=useState(true);

    const handleChange = (e,type)=>{
        if(type=='title'){
            setData({...data, title : e.target.value})
        }
        if(type=='ingrediants'){
            setData({...data, ingrediants : e.target.value})
        }
        if(type=='time'){
            setData({...data, time : e.target.value})
        }

    }
    const handleAdd = ()=>{
            setArr([...arr, {...data, id: arr.length+1}])
            console.log(arr)
    }
    const handleUpdate = ()=>{
        
    }
    const handleDelete = (e)=>{  
        arr.splice(e-1,1);
        setArr(arr)
        console.log(arr)
        setDel(!del)
    }

    return(
        <>

            <div className="head">
                Home page
                <button className="logout" onClick={()=>{props.loginval()}}>
                    Logout
                </button>
            </div><br/>
            <div class="row">
            
            <div class="col-md-6">
            <form>
            <div className="table ">
                
                <label>Title:&nbsp;&nbsp;</label>
                <input type="text" id="title" className="form-control form-control-lg" onChange={(e)=>{handleChange(e,'title')}}/><br/>

                <label for="exampleFormControlTextarea1" class="form-label">Ingredients:&nbsp;&nbsp;</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{handleChange(e,'ingrediants')}}></textarea><br/>

                <label>Cooking Time:&nbsp;&nbsp;</label>
                <input type="text" id="name" className="form-control form-control-lg" onChange={(e)=>{handleChange(e,'time')}}/><br/><br/>
            </div>
            </form>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <img src={img} alt="image"/>
            </div>
            </div>  
            
            <div>
                <button type="submit" onClick={()=>{handleAdd()}} className="add">
                    Add a Receipe
                </button>
            </div><br/><br/>
            <div class="row">
            {arr.map((val)=>(
                
                <div class="col-md-4">
            <div class="card mb-3 card1" style={{maxWidth: '18rem'}}>
            <div class="card-header"><h5>{val.title}</h5></div>
            <div class="card-body">
                
                {/* <h5 class="card-title">{val.title}</h5> */}
                <p class="card-text">Ingrediants: {val.ingrediants}</p>
                <p class="card-text">Cooking Time: {val.time}</p>
                <button type="submit" onClick={()=>{handleUpdate()}} className="upd">
                    Update
                </button>
                <button type="submit" onClick={(e)=>{handleDelete(val.id)}} className="del">
                    Delete
                </button>
            </div>
            </div>
            </div>
           

            ))}
             </div>
            

            
        </>
    )
}

export default Home1;