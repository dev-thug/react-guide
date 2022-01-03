import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(selectedYear)
    }

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpense.length > 0) {
        expensesContent = filteredExpense.map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
        )
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expense;