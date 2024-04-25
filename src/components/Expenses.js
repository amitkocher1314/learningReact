import "./Expenses.css";
import ExpenseItem from "./ExpenseItem"
function Expenses(props){
   return(<div className="expenses">
    {props.transfered.map((number)=>{
        return(
          <ExpenseItem
          Key={number.id}
          title={number.title}
          date={number.date}
          price={number.price}
          location={number.location}
          ></ExpenseItem>
        )
      })
      
  }
  </div> )
}

export default Expenses;