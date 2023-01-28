import React from 'react';
import logo from "../../assests/logo.png";
import Home from "../../assests/Home.png";
import "./Ware.css"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Ship from "../Ship"


const Warehouse = () => {
  
  const[countries,setCounties]=useState()
  const[warehous,setwares]=useState(false)
  const[waredata,setwareDAta]=useState()
  const[renderCountries,setrnder]=useState(false)
  const email = useLocation();
  const navigate = useNavigate();
  const userEmail=email.state.email
  const[newContvisible,setneContvisiblity]=useState(true)
  const [addnewcont,setnewcont]=useState("")
  const[ newwarevisible,setwarevisible]=useState(false)
  const [country , setcountry] = useState("");
  const [product , setproduct] = useState("");
  const [id,setid] = useState("12");
  const [ProductName , setProductName] = useState("");
  const [qty,setqty]= useState("");
  const [newproname,setnewproname]=useState("")
  const[newproquant,setnewproquant]=useState(12)
  const [ newPrductvisible,setnewprductvisible]=useState(false)
  
  console.log(id)

  const productname=(e)=>{
    setnewproname(e.target.value)
  }
  const productquantity=(e)=>{
    setnewproquant(e.target.value)
  }

// const[addnewware,setnewware]=useState("")
const[newwarequantity,setrnewwarequantity]=useState(30)

  // const [emaile,setEmail]=useState("")
  console.log(countries)
const warequant=(e)=>{
  setrnewwarequantity(e.target.value)
}

const getWarehouses=async(email,country)=>{
  try{
    const response= await axios.get(`http://localhost:5000/ware/${email}/${country}`)
            console.log(response)
            // console.log(data)
    setwareDAta(response.data)
  }
  catch(error){
    console.log(error)
  }
}
//--------------------------------add warehouse---------------------(final)
const addwarehouse=async (email,country)=>{
  let wuid=`${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
  try {
    const response = await axios.post(`http://localhost:5000/add_ware/${email}/${country}`,{
      warehouseuid:wuid,
      // quantity:quantity
    });
    // window.location.reload()
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
 
}



//-------------------------------------delete wareohuse-----------(final)

const delware =async (email,uid)=>{
try {
  const response = await axios.get(`http://localhost:5000/del_ware/${email}/${uid}`);
  console.log(response.data);
}
catch (error) {
  console.log(error);
}
}

//-----------------------------------------------
const wareDelete= async(e)=>{
  console.log(e.target.value)
await delware(userEmail,e.target.value)
console.log(country)
 await getWarehouses(userEmail,country)
// handle()
// warechange()
}
//---------------------------------------------------------------------------------
const onwareadd=async ()=>{
await addwarehouse(userEmail,country)
await getWarehouses(userEmail,country)


}
  const countyadd=(e)=>{
    setnewcont(e.target.value)
  }
  const onconuntadd=async ()=>{
    await addCountry(userEmail,addnewcont)
    setnewcont("")
    setneContvisiblity(false)
    warechange()
  }
  //-------------------------------------add country--------------------------------------------
  const addCountry=async (email,country)=>{
    try {
      const response = await axios.post(`http://localhost:5000/add_ware/${email}`,{
        country:country,
        warehouseuid:`${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
        owner:email
      });
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
   
  }
  //-----------------------------------------------------------------------
  const newCont=()=>{
    if(newContvisible){
      
    }
  }
  // console
  const [ware,setWare]=useState(false);

  const getCounties=async ()=>{
      try {
        const response = await axios.get(`http://localhost:5000/ware/${userEmail}`);
        console.log(response.data)
        setCounties(response.data)
        // console.log(data)
        // setallwarehouse(response.data);
      }
      catch (error) {
        console.log(error);
      }
    
    }
    const warechange = async()=>{
    await getCounties()
    setrnder(true)
    
    // console.log(countries)
  }

  console.log(qty);

  const [wareitem,setwareitem] = useState([]);
  const [warehouseId,setwarehouseId] = useState([
    {id:1,max_quantity:100},
    {id:2,max_quantity:100},
    {id:3,max_quantity:100}
  ]);
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


const date=new Date();
const  clickHandle= async ()=>{
    try {
      const response = await axios.get("http://localhost:5000/ware/nipun@gmail.com");
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  
  
}


const handle = async(e)=>{
  console.log(e.target.value)
  console.log(userEmail)
  setcountry(e.target.value)
  await getWarehouses(userEmail,e.target.value)
  console.log(waredata)
  // window.location.reload()
  // const urlcountry = `http://127.0.0.1:5000/ware/${userEmail}/${country}`;
  // axios.get(urlcountry).
  // then((response)=>{
  //   console.log(response);
  //   const ware = response.data;
  //   setwareitem(ware);
  // })
  // .catch(error=>console.log(error));
}

//---------------------geT countries------------------------(final)
// const getCounties=async ()=>{
//   try {
//     const response = await axios.get(`http://localhost:5000/ware/${email}`);
//     console.log(response.data);
//     setallwarehouse(response.data);
//   }
//   catch (error) {
//     console.log(error);
//   }

// }
//-------------------------------
//-------------------to add countries with warhouse-----------------------(final)


//---------------------------------------------------



//--------------------------addproducts---------------------------(final)
const addProduct =async (email,country,uid,product,quantity)=>{
  try {
    const response = await axios.post(`http://localhost:5000/add_product/${userEmail}/${country}/${uid}`,{
      product:product,
      quantity:quantity,
    });
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
}

const onproductadd= async()=>{
  console.log(setid)
  await addProduct(userEmail,country,id,newproname,newproquant)
  await getProduct(userEmail,country,id)
  newPrductvisible(false)

}
//----------------get products----------------------------------(final)
const getProduct =async (email,country,id)=>{
try {
  const response = await axios.get(`http://localhost:5000/get_product/${email}/${country}/${id}`);
  console.log("this is warehouse id ")
  // console.log(setwarehouseId)
  console.log(response.data);
  setwareitem(response.data)

}
catch (error) {
  console.log(error);
}
}




const handleqty = async (e)=>{
  console.log(e.target.value)
  setid(e.target.value)
await getProduct(userEmail,country,id)
console.log(wareitem)
console.log(product)
  // const urlcountry = `http://127.0.0.1:5000/ware/${email}/${country}/${e.target.value}`;
  // axios.get(urlcountry).
  // then((response)=>{
  //   console.log(response);
  //   const ware = response.data[0]
  //   setwarehouseId(ware);
  // })
  // .catch(error=>console.log(error));
}
//-------------------------------------------delete countries-------(final)

const delCountry =async (email,country)=>{
try {
  const response = await axios.get(`http://localhost:5000/del_country/${email}/${country}`);
  console.log(response.data);
}
catch (error) {
  console.log(error);
}
}



const delCont =async (e)=>{
  console.log(e.target.value)
  await delCountry(userEmail,e.target.value)
  warechange()

}

//-------------------------------------------------------------------

//-----------------------------delete product-----------------------(final)
const delproduct =async ()=>{
try {
  const response = await axios.get("http://localhost:5000/del_product/nipun@gmail.com/2023028665612");
  console.log(response.data);
}
catch (error) {
  console.log(error);
}
}

//-------------------editproduct-------------------(final)----------------------
const editProduct=async ()=>{
try {
  const response = await axios.post("http://localhost:5000/edit_product/nipun@gmail.com/china/2023028665617/Oil",{
    product:"Water",
    quantity:10,
  });
  console.log(response.data);
}
catch (error) {
  console.log(error);
}

}


//------------------------------------------------------------------------

//--------------------------------ship-----------------------------------
const ship=async ()=>{
const date=new Date()
const date1=new Date()
const shipdate=`${date.getDate()}${date.getMonth()}${date.getFullYear()}`
const shipmentid=`${date1.getFullYear()}${date1.getMonth()}${date1.getDate()}${date1.getDay()}${date1.getHours()}${date1.getMinutes()}${date1.getSeconds()}`
console.log(shipdate)
try {
  const response = await axios.post("http://localhost:5000/ship/nipun@gmail.com/India/2023028665618/oil",{
    destination:"China",
    shipdate:shipdate,
    shipmentid:shipmentid,
    quantity:20
  });
  console.log(response.data);
}
catch (error) {
  console.log(error);
}

}

//--------------------------------------------------------------------------------------------
//------------------------------shipwed status--------------------------------------------------------
const shippments =async ()=>{
try {
  const response = await axios.get("http://localhost:5000/shipment/nipun@gmail.com");
  console.log(response.data);
}
catch (error) {
  console.log(error);
}
}


const deleteCountry=async ()=>{
  try {
    const response = await axios.post("http://localhost:5000/waredelete/nipun@gmail.com/Pakistan",{
      data:1
    });
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
 
}
const deleteProduct=async ()=>{
  try {
    const response = await axios.post("http://localhost:5000/waredelete_product/nipun@gmail.com/china/coke",{
      data:1
    });
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
 
}



  //-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
  const url = `http://127.0.0.1:5000/ware/${email}`;
  const submit = async()=>{
    await axios.get(url).
    then((response)=>{
      console.log(response);
      const ware = response.data;
      // setallwarehouse(ware);
    })
    .catch(error=>console.log(error));
  }

  const editproduct = (e) =>{
    setproduct(e.target.value);
    const data = document.querySelector(".edit");
    data.style.display = "block";
  }
  const savedata = ()=>{
    const urlcountryproduct = `http://127.0.0.1:5000/ware/${email}/${country}/${product}`;
    const res = axios.post(urlcountryproduct,{
      product:ProductName,
      quantity:qty
    })
    if(res.status == 200){
      handleqty();
    }
  }
  const [user,setuser] = useState({
    id:id,
    country:country
  })

  const shipdata = ()=>{
    navigate("/ship",{state:{user}})
  }

  return (
    <>
    <div className='warehouse'>

      <div className="side-bar">
        <div className='logoh2'>
            <img src={logo} alt="" className='img1'/>
            <h2 className='h22'>Shipper
            Solution</h2>
        </div>
            <div className="ulll">
                <ul>
                    <h4 onClick={warechange}>Warehouses</h4>
                    <h4>Shipments</h4>
                    <h4>Oders</h4>
                    <h4>Make an Order</h4>
                </ul>
            </div>
            <div className='lggou'>
            <button className='logout'>Logout</button>
            </div>
      </div>
      {/* <hr className='hr'/> */}
      <div className="overview">
        <div className="nav">
            <button className='btnn1'>Wed 15 Jun, 12:10:12</button>
            <button className='btnn2'>Make an Order</button>
        </div>
        <div className='btw'>
        <h1>Overview</h1>
        </div>
        <div className='dataoverall'>
          <div className="one">
           <div className="onee">
            <p>Warehouse</p>
            <p>222</p>
           </div>
           <img src={Home} alt="" className='imgone'/>
          </div>
          <div className="one">
          <div className="onee">
            <p>Pending Shipment</p>
            <p>60</p>
           {/* <img src={Home} alt="" className='imgone'/> */}
           </div>
           <img src={Home} alt="" className='imgone'/>
          </div>
          <div className="one">
          <div className="onee">
            <p>Orders</p>
            <p>2000</p>
           </div>
           <img src={Home} alt="" className='imgone'/>
          </div>
          <div className="one">
          <div className="onee">
            <p>Delivered</p>
            <p>3600</p>
           </div>
           <img src={Home} alt="" className='imgone'/>
           {/* <img src={home} alt="" /> */}
          </div>
        </div>
        <div className="allwaredata">
        <div className="waredata">
          <h3>Warehouses</h3>
          <div className='ulllii'>
              <p>country</p>
              <p>Used</p>
              <p>Max Quantity</p>
          </div>
          {renderCountries &&
            countries?.map((item,index)=>{
              return( 
                <>
              <div className='ulllii1'>
                <p className='p1' >{item.country}</p>
                {/* <p className='p2'>{item.quantity}</p>
                <p className='p3'>{item.max_quantity}</p> */}
              <button className='viewbtn' value={item.country} onClick={handle}>View</button>
              <button className='delbtn' value={item.country} onClick={delCont}>Delete</button>
              </div>
              <hr />
                </>
              )
            })
          } 
                    {
            newContvisible?(<div style={{display:"flex"}}>
            <input onChange={countyadd} placeholder='country'/><button onClick={onconuntadd}>save</button>
            </div>
            ):<></>
          }
          <h2 style={{
            "textAlign":"center",
            "marginTop":"0px",
            "fontSize":"17px",
            "color":"#7B58DF"
          }} onClick={()=>{setneContvisiblity(true)}}>Add Country +</h2>
        </div>  
        <div className="waredata">
          <h3>Warehouses List</h3>
          <div className='ulllii'>
              <p>Warehouse Id's</p>
              <p>Quantity</p>
          </div>
          {
            waredata?.map((item,index)=>{
              return( 
                <>
              <div className='ulllii1'>
                <p className='p1' >{item.warehouseuid}</p>
                <p className='p2'>{item.quantity}</p>
              <button className='viewbtn' value={item.warehouseuid} onClick={handleqty}>View</button>
              <button className='delbtn'value={item.warehouseuid}onClick={wareDelete}>Delete</button>
              </div>
              <hr />
                </>
              )
            })
          } 

          <h2 style={{
            "textAlign":"center",
            "marginTop":"0px",
            "fontSize":"17px",
            "color":"#7B58DF"
          }} onClick={onwareadd}>Add Warehouse+</h2>
        </div>  
        <div className="waredata">
          <h3>{country}</h3>
          <div className='ulllii'>
              <p>Products</p>
              <p>Quantity</p>
              <p>Volume</p>
          </div>
          {
            wareitem?.map((item,index)=>{
              return( 
                <>
              <div className='ulllii1'>
                <p className='p1' >{item.item}</p>
                <p className='p2'>{item.quantity}</p>
                {/* <p className='p3'>{item.volume}</p> */}
              <button className='viewbtn' value={item.id}  onClick={editproduct}>Edit</button>
              <button className='delbtn'>Delete</button>
              <button className='shipbtn' onClick={shipdata}>Ship</button>
              </div>
              <hr />
                </>
              )
            })
          } 
          {
                       newPrductvisible?(<div style={{display:"flex"}}>
                       <input onChange={productname} placeholder='country'/><input onChange={productquantity} placeholder='country'/><button onClick={onproductadd}>save</button>
                       </div>
                       ):<></>      
          }
            <h2 style={{
            "textAlign":"center",
            "marginTop":"0px",
            "fontSize":"17px",
            "color":"#7B58DF"
          } } onClick={()=>{setnewprductvisible(true)}}>Add Products +</h2>
        </div>  
        </div>
        <div className="edit">
           <p>{product}</p>
           <input type="text" name='ProductName' placeholder='Product Name' onChange={(e)=>setProductName(e.target.value)} />
           <input type="text" name='qty' placeholder='Quantity' onChange={(e)=>setqty(e.target.value)} />
           <button className='btnsave' onClick={savedata}>Save</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Warehouse
