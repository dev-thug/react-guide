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

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
                {props.items.map(expense =>
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                )}
            </Card>
        </div>
    )
}

export default Expense;