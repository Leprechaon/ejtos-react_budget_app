import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert('The value cannot exceed the limit of £20,000');
            return;
          }
        if (event.target.value < budget - remaining) {
            alert('You can not reduce the budget value lower than the spending');
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
