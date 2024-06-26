import "./ExpenseItem.css" ;
function ExpenseItemtask7(props){
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
const month = months[props.date.getMonth()];
const year = props.date.getFullYear();
const day = props.date.getDate();
          return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        </div>
      <div className="expense-item__location">{props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
   
}
export default ExpenseItemtask7