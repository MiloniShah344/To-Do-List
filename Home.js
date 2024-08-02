import React,{useState} from "react";
import './Home.css'
import img from './img1.jpg'
import { useNavigate } from "react-router-dom";

function Home (props){
    let navigate = useNavigate()

    // const len = 0;
    const [arr, setArr] = useState([]);
    const[data,setData] = useState({});
    const[del,doDel] = useState(true);
    const [count,setCount] = useState(1);
    const[update,doUpdate] = useState(true);

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
            // let x = arr
            let data1 = data
            setCount(count+1)
            data1.id = count;
            arr.push(data1)
            setArr(arr);
            setData({title: "", ingrediants: "", time: ""})
            // setArr([...arr, {...data, id: arr.length+1}])
            console.log(arr)
    }
    const handleUpdate = (idx)=>{
        setData(arr[idx])
    }
    const handleUpdate1 = ()=>{
        let idx = arr.findIndex((val)=>(val.id==data.id))
        let arr1 = arr
        arr1[idx] = data
        setArr(arr1)
        setData({title: "", ingrediants: "", time: ""})
        doUpdate(!update)
    }
    const handleDelete = (e)=>{  
        let idx = arr.findIndex((val)=>(val.id==e))
        arr.splice(idx,1)
        doDel(!del)
    }

    const handleLogout = ()=>{
        navigate('/')
    }

    return(
        <>

            <div className="head">
                Cook Book
                <button className="logout" onClick={()=>{handleLogout()}}>
                    Logout
                </button>
            </div><br/>
            <div class="row">
            
            <div class="col-md-6">
            <form>
            <div className="table ">
                
                <label>Title:&nbsp;&nbsp;</label>
                <input type="text" value={data.title} id="title" className="form-control form-control-lg" onChange={(e)=>{handleChange(e,'title')}}/><br/>

                <label for="exampleFormControlTextarea1" class="form-label">Ingredients:&nbsp;&nbsp;</label>
                <textarea class="form-control" value={data.ingrediants} id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{handleChange(e,'ingrediants')}}></textarea><br/>

                <label>Cooking Time:&nbsp;&nbsp;</label>
                <input type="text" value={data.time} id="name" className="form-control form-control-lg" onChange={(e)=>{handleChange(e,'time')}}/><br/><br/>
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
                </button>&nbsp;&nbsp;&nbsp;
                <button type="submit" onClick={()=>{handleUpdate1()}} className="update">
                    Update
                </button>
            </div><br/><br/>
            <div class="row">
            {arr.map((val,index)=>(
                
                <div class="col-md-4">
            <div class="card mb-3 card1" style={{maxWidth: '18rem'}}>
            <div class="card-header"><b>Receipe {val.id}</b></div>
            <div class="card-body">
                <h5 class="card-title">{val.title}</h5>
                <p class="card-text">Ingrediants: {val.ingrediants}</p>
                <p class="card-text">Cooking Time: {val.time}</p>
                <button type="submit" onClick={(e)=>{handleUpdate(index)}} className="upd">
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
            

            {/* {data.map((val)=>(
            <div class="card text-bg-success mb-3 card1">
                <div class="card-header">Receipe {val.id}</div>
                <div class="card-body">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            ))} */}
        </>
    )
}

export default Home;