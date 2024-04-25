import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { id: 1, title: "Insurance",location:"Delhi", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book",location:"haryana", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen",location:"odisha", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop",location:"bangalore", date: new Date(2023, 9, 17), price: 200 },
  ];

  return (<div>
    <h1>Learning React</h1>
    <Expenses transfered={expenses}></Expenses>
</div>)
}

export default App;
