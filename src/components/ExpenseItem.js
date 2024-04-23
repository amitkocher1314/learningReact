import "./ExpenseItem.css" ;
function ExpenseItem(){
    const expensedate = new Date(2024, 4, 23).toISOString();
    const expensetitle = "Insurance";
    const expenseloc = "Bangalore";
    const expenseamount = "50"
    return(<>
    <p>This is Expense Item</p>
    <p>Food - $5</p>

    <p>Petrol - $20</p>
    
   <p>Movie - $10</p> 

   <h1>TASK 4 </h1>
      <div className="expense-item"> 15 August 2023
      <div className="expense-item__location">
        Delhi
      </div>
       </div>
      <div className="expense-item__description">
        <h2>Book</h2>
        <div className="expense-item__price">$10</div>
      </div>

   <h1>Task 6</h1>
   <div className="expense-item">
      <div>{expensedate}</div>
      <div className="expense-item__location">{expenseloc}</div>
      <div className="expense-item__description">
        <h2>{expensetitle}</h2>
        <div className="expense-item__price">${expenseamount}</div>
      </div>
    </div>
   </>
   )
   
}
export default ExpenseItem;