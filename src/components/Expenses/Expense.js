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
        }
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                {filteredExpense.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                )}
            </Card>
        </div>
    )
}

export default Expense;