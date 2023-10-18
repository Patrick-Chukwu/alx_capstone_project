// JavaScript code for handling budget calculations


const incomeItems = [];
const expenseItems = [];

const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');
const totalIncome = document.getElementById('total-income');
const totalExpenses = document.getElementById('total-expenses');
const availableBalance = document.getElementById('available-balance');

const incomeDescription = document.getElementById('income-description');
const incomeAmount = document.getElementById('income-amount');
const expenseDescription = document.getElementById('expense-description');
const expenseAmount = document.getElementById('expense-amount');
const addIncomeButton = document.getElementById('add-income');
const addExpenseButton = document.getElementById('add-expense');

// Add income and expense items
addIncomeButton.addEventListener('click', () => {
    const description = incomeDescription.value;
    const amount = parseFloat(incomeAmount.value);

    if (description && !isNaN(amount) && amount > 0) {
        incomeItems.push({ description, amount });
        updateBudget();
        incomeDescription.value = '';
        incomeAmount.value = '';
    }
});

addExpenseButton.addEventListener('click', () => {
    const description = expenseDescription.value;
    const amount = parseFloat(expenseAmount.value);

    if (description && !isNaN(amount) && amount > 0) {
        expenseItems.push({ description, amount });
        updateBudget();
        expenseDescription.value = '';
        expenseAmount.value = '';
    }
});

// Update the budget summary
function updateBudget() {
    const totalIncomeValue = incomeItems.reduce((total, item) => total + item.amount, 0);
    const totalExpensesValue = expenseItems.reduce((total, item) => total + item.amount, 0);
    const availableBalanceValue = totalIncomeValue - totalExpensesValue;

    totalIncome.textContent = totalIncomeValue;
    totalExpenses.textContent = totalExpensesValue;
    availableBalance.textContent = availableBalanceValue;
}

// Initialize the budget summary
updateBudget();
