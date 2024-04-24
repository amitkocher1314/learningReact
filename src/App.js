import ExpenseItem from "./components/ExpenseItem";
import ExpenseItemtask7 from "./components/ExpenseItemtask7";
function App() {
  //WE BUILD ARRAY OF OBJECT WHICH CONTAIN ALL VALUES THEN INSIDE RETURN STATEMENT WE APPLY LOOP 
  const expenses = [
    {id:1,date:new Date(2024,4,23),title:"Insurance",price:50,location:"Bangalore"},
    {id:2,date:new Date(2023, 9, 25),title:"Book",price:20,location:"Delhi"},
    {id:3,date:new Date(2023, 6, 25),title:"pen",price:5,location:"Hyderabad"},
    {id:4,date:new Date(2023, 11, 25),title:"laptop",price:2000,location:"Mumbai"}
    ];
  return (<>
    
       <h1>Learn React Started</h1>   
      <ExpenseItem></ExpenseItem>
      <h1>TASK 8 updation of task 7 with loop used</h1>
      {/*  <ExpenseItemtask7
       date={new Date(2024,4,23)}
       title="Insurance"
       price={90}
       location="Bangalore"
       ></ExpenseItemtask7>
       <ExpenseItemtask7
        date={new Date(2023, 3, 25)}
        title="Book"
        price= {20}
         location="Delhi"
      ></ExpenseItemtask7>
      <ExpenseItemtask7
        date={new Date(2023, 10, 11)}
        title="Pen"
        price={5}
        location="Hyderabad"
      ></ExpenseItemtask7>
      <ExpenseItemtask7
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price={200}
        location="Mumbai"
      ></ExpenseItemtask7> */}
     { expenses.map((numb,index) => {
        return(
          <ExpenseItemtask7
            key={numb.id}
            date={numb.date}
            title={numb.title}
            price={numb.price}
            location={numb.location}

          ></ExpenseItemtask7>
        );
      })
      }
    
 </>
  );
}

export default App;
