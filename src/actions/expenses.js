import database from '../firebase/firebase';

// Component calls action generator
// Action generator returns function
// Component dispatches function
// Function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt }

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

export const startRemoveExpense = (expenseID) => {
    return (dispatch) => {
        return database.ref(`expenses/${expenseID}`)
            .remove()
            .then((snapshot) => {
                dispatch(removeExpense({id: expenseID}));
            }, (e) => console.log(e));
    };
};

// EDIT_EXPENSE
export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            }, (e) => console.log(e));
    };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const databaseExpenses = [];
                snapshot.forEach((childSnapshot) => {
                    databaseExpenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                    });
                });

                dispatch(setExpenses(databaseExpenses));
            })
        };
};