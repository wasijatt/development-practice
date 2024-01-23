import { useState ,useEffect } from 'react'
import { Inter } from 'next/font/google'
import LoginComponent from './LoginComponent'
import form from './form'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [count, setCount] = useState(100);
  const [color , setColor] = useState("red");
  const [counter , setCounter]= useState(0)


  const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const[loading , setLoading] = useState(true)
  

  // map property
  const cars = ["audi", "mustang", "jim", "wasi-brands"]
  
  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 3000);
  });
  function increment (){ setCount(prevCount => prevCount +5)}
  function decrement (){ setCount(prevCount => prevCount -5)}
  function blue() { setColor(<LoginComponent/>)}
  function Yellow() {setColor("yellow")}
  function green() {setColor("green")}  
  function black() {setColor("black")}
  function purple() {setColor("purple")}
  function Car(props) {
       return <li>this is my new {props.brand}</li>
       }

  useEffect(() => {
    const fetchData = async() => {
        try{
            const respone  = await fetch("https://goweather.herokuapp.com/weather/ny")
            const result = await respone.text();
            setData(result);
        }
        catch(error){
            setError()
        }
        finally{
            setLoading(false)

        }
    }
    fetchData();
},[]);

if (loading){
   return(
    <LoginComponent/>
   )
};
if (error){
    return(
    <p>Error:{error.message}</p>
    )
}
  return (
    <main
      className={`m-2  ${inter.className}`}
    >

    
      <button className='p-4' onClick={blue}>blue</button>
      <button className='p-4' onClick={Yellow}>Yellow</button>
      <button className='p-4' onClick={green}>green</button>
      <button className='p-4' onClick={black}>black</button>
      <button className='p-4' onClick={purple}>purple</button>
      
      <div> this color is {color}</div>
      <div className='flex flex-col'>
        <button className='m-2' onClick={increment}>increment</button>
      <div className='ml-[48%]'>{count}</div>
      <button className='m-2' onClick={decrement}>decrement</button>
      </div>
      <div>this is a counter {counter}</div>
      <LoginComponent/>
      <form/>

      
      <div>
        <p className='m-2 bg-[#7700ff] text-white'>data:{data}</p>
    </div>


<ul>
{cars.map((car) => <Car brand={car}/>)}
</ul>





    {/* <h1>cars.map((car) => <Car {brand = car} />)</h1> */}
    </main>
  )
  }