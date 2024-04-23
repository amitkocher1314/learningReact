import ExpenseItem from "./components/ExpenseItem";
import ExpenseItemtask7 from "./components/ExpenseItemtask7";
function App() {
  return (<>
    <div>
       <h1>Learn React Started</h1>   
      <ExpenseItem></ExpenseItem>
      <h1>TASK 7</h1>
       <ExpenseItemtask7
       date={new Date(2024,4,23)}
       title="Insurance"
       price="50"
       location="Bangalore"
       ></ExpenseItemtask7>
       <ExpenseItemtask7
        date={new Date(2023, 3, 25)}
        title="Book"
        price="20"
         location="Delhi"
      ></ExpenseItemtask7>
      <ExpenseItemtask7
        date={new Date(2023, 10, 11)}
        title="Pen"
        price="5"
        location="Hyderabad"
      ></ExpenseItemtask7>
      <ExpenseItemtask7
        date={new Date(2023, 1, 14)}
        title="Laptop"
        price="200"
        location="Mumbai"
      ></ExpenseItemtask7>
      
     </div>
 </>
  );
}

export default App;
