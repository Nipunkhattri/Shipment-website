const getCounties=async (email)=>{
    try {
      const response = await axios.get(`http://localhost:5000/ware/${email}`);
      console.log("this is the response")
      console.log(response.data);
      // setallwarehouse(response.data);
    }
    catch (error) {
      console.log(error);
    }
  
  }
  
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
  //----------------------getwarehouses------------------------(final)
  const getWarehouses=async ()=>{
    try {
      const response = await axios.get("http://localhost:5000/ware/nipun@gmail.com/Sri_lanka");
      console.log(response.data[0]);
    }
    catch (error) {
      console.log(error);
    }
  
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
  
  const addCountry=async ()=>{
    try {
      const response = await axios.post("http://localhost:5000/add_ware/nipun@gmail.com",{
        country:"China",
        warehouseuid:`${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
        owner:"nipun@gmail.com"
      });
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
   
  }
  //---------------------------------------------------
  //--------------------------------add warehouse---------------------(final)
  const addwarehouse=async ()=>{
    let wuid=`${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
    try {
      const response = await axios.post("http://localhost:5000/add_ware/nipun@gmail.com/India",{
        warehouseuid:wuid,
      });
      window.location.reload()
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
   
  }
  
  
  
  
  //--------------------------addproducts---------------------------(final)
  const addProduct =async ()=>{
    try {
      const response = await axios.post("http://localhost:5000/add_product/nipun@gmail.com/India/2023028665612",{
        product:"oil",
        quantity:30,
        volume:12
      });
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  //----------------get products----------------------------------(final)
  const getProduct =async ()=>{
  try {
    const response = await axios.get("http://localhost:5000/get_product/nipun@gmail.com/Sri_lanka/2023028652053");
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
  }
  //-------------------------------------------delete countries-------(final)
  
  const delCountry =async ()=>{
  try {
    const response = await axios.get("http://localhost:5000/del_country/nipun@gmail.com/Sri_lanka");
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
  }
  
  //-------------------------------------delete wareohuse-----------(final)
  
  const delware =async ()=>{
  try {
    const response = await axios.get("http://localhost:5000/del_country/nipun@gmail.com/warehouseid");
    console.log(response.data);
  }
  catch (error) {
    console.log(error);
  }
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
  
  
  