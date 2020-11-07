import './App.css';
import React,{useEffect,useState} from "react"
import db from "./firebase"
import {Bar} from "react-chartjs-2"
import {NotificationContainer, NotificationManager} from 'react-notifications';


function App() {
  
 const [tesla,setTesla]=useState([])
 const [ford,setFord]=useState([])
 const [BMW,setBMW]=useState([]) 
 const [audi,setAudi]=useState([])
 const [ferrari,setFerrari]=useState([])
 const [maserati,setMaserati]=useState([])
 const [toyota,setToyota]=useState([])
 const [bentley,setBentley]=useState([])
 const [mclaren,setMcLaren]=useState([])
 const [lamborghini,setLamborghini]=useState([])
 var data_array=[{id:'Tesla',length:tesla},{id:'Ford',length:ford},{id:'BMW',length:BMW},{id:'Audi',length:audi},{id:'Ferrari',length:ferrari},{id:'Maserati',length:maserati},{id:'Toyota',length:toyota},{id:'Bentley',length:bentley},{id:'McLaren',length:mclaren},{id:'Lamborghini',length:lamborghini}]
   

 const state = {
  labels: ['Tesla','Ford','BMW','Audi','Ferrari','Maserati','Toyota,','Bentley','McLaren','Lamborghini'],
  datasets: [
    {
      label: 'Tweet length',
      height:'400',
      backgroundColor: 'grey',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [tesla,ford,BMW,audi,ferrari,maserati,toyota,bentley,mclaren,lamborghini]
    },
    
  ]
}


  
useEffect(() => { 
  var arr=[],sum=0
    db.collection("Tesla").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setTesla(sum)
    if(sum<85)
      NotificationManager.warning(`Tesla tweet average ${Math.floor(sum)}`,'Warning!',  3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Ford").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setFord(sum)
    if(sum<85)
    NotificationManager.warning( `Ford tweet average ${Math.floor(sum)}`,'Warning!', 3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Ferrari").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setFerrari(sum)
    if(sum<85)
    NotificationManager.warning( `Ferrari tweet average ${Math.floor(sum)}`,'Warning!', 3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("BMW").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setBMW(sum)
    if(sum<85)
    NotificationManager.warning(`BMW tweet average ${Math.floor(sum)}`,'Warning!',  3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Lamborghini").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setLamborghini(sum)
    if(sum<85)
    NotificationManager.warning( `Lamborghini tweet average ${Math.floor(sum)}`,'Warning!', 3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("McLaren").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setMcLaren(sum)
    if(sum<85)
    NotificationManager.warning( `McLaren tweet average ${Math.floor(sum)}`, 'Warning!',3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Bentley").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setBentley(sum)
    if(sum<85)
    NotificationManager.warning(`Bentley tweet average ${Math.floor(sum)}`,'Warning!',  3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Maserati").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setMaserati(sum)
    if(sum<85)
    NotificationManager.warning( `Maserati tweet average ${Math.floor(sum)}`,'Warning!', 3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Audi").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setAudi(sum)
    if(sum<85)
    NotificationManager.warning( `Audi tweet average ${Math.floor(sum)}`,'Warning!', 3000);
  }
  ) 
},[]);
useEffect(() => {
  var arr=[],sum=0
  db.collection("Toyota").onSnapshot((snapshot) =>{
    arr=snapshot.docs.map((doc) => doc.data().length)
    arr.reverse()
    for(let i=0;i<10;i++)
    sum+=arr[i]
    sum=sum/10
    setToyota(sum)
    if(sum<85)
    NotificationManager.warning(`Toyota tweet average ${Math.floor(sum)}`,'Warning!',  3000);
  }
  ) 
},[]);
  
  
  
  return (
    <div className="Container">
        
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Moving average of Tweets length of 10 different hashtags for last 10 tweets',
              fontSize:40,
              color:'brown'
            },
            
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <div className="notification">
        <NotificationContainer/>
        </div>
        <div className="Table">
          <table>
            <tbody>
            <tr>
              <th>🔺</th>
            {
            data_array.sort((a,b)=>b.length-a.length).map((ele)=>{
             return <th key={ele.id} style={{color:"white"}}>{ele.id}</th>
              })}
              <th>🔻 </th>
          </tr>
          </tbody>
          </table>
        </div>
        
      </div>
  );
}

export default App;
