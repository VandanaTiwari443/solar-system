// import React, { useState } from 'react';


// function Hook() {

//   const [count, setCount] = useState(0);



//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');

  
//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     alert(Username: ${username}\nEmail: ${email});
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#ccfff5' }}>
//       <h1><strong>I am heading</strong></h1>

//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Count Increment</button>

//       <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }



import React, { useState, useEffect, useMemo } from 'react';

function App() {
  count [value,setValue]=useState(0)
  const [heading,setHeading]=useState("")
  const inputRef = useRef(null);

const OnChange=()=>{
  inputRef.current.style.color="Red"
}

  const Increment=()=>{
    // count.current = count.current+1
    setValue((prev)=>prev+1)
    // console.log(count)

  }

  // const [cardItems, setCardItems] = useState([
  //   { item_id: "apple", item_price: 20, item_quantity: 2 },
  //   { item_id: "mango", item_price: 30, item_quantity: 3 },
  // ]);

  //  Memoized total price
//   const totalPrice = useMemo(() => {
//     console.log("Calculating total price...");
//     return cardItems.reduce((total, item) => {
//       return total + item.item_price * item.item_quantity;
//     }, 0);
//   }, [cardItems]);
//   console.log(totalPrice)

//   // // Log to console
//   // useEffect(() => {
//   //   console.log("Cart Items:");
//   //   cardItems.forEach(item => {
//   //     console.log(
//   //       `${item.item_id} - ₹${item.item_price} × ${item.item_quantity} = ₹${item.item_price * item.item_quantity}`
//   //     );
//   //   });
//   //   console.log(`Total Price: ₹${totalPrice}`);
//   // }, [cardItems, totalPrice]);

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <ul>
//         {cardItems.map((item, index) => (
//           <li key={index}>
//             {item.item_id} - ₹{item.item_price} × {item.item_quantity} = ₹{item.item_price * item.item_quantity}
//           </li>
//         ))}
//       </ul>
//       <h3>Total Price: ₹{totalPrice}</h3>
//     </div>
//   );
// }

  return(
    {value}
    <button >)

export default App;

