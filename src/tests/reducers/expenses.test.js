import reducer from '../../reducers/expenses';
import moment from 'moment';
import state from '../fixtures/expenses';

test('should set default state',() => {
    const action = {};
    expect(reducer(undefined, action)).toEqual( [] )
});

test('should add expense to state',() => {
    const action = {
        type: "ADD_EXPENSE",
        expense:{
            id: "3",
            description:"Rent",
            amount:109500,
            note:"This is the rent",
            createdAt: moment(0)
        }
    };
    expect(reducer(state, action)).toEqual(
        [...state, action.expense]
    )
});

test('should remove expense to state',() => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: state[1].id
    };
    expect(reducer(state, action)).toEqual(
        [state[0], state[2]]
    )
});

test('should not remove expense if id is not found to state',() => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    };
    expect(reducer(state, action)).toEqual(state)
});

test('should edit expense to state',() => {
    const action = {
        type: "EDIT_EXPENSE",
        id: state[1].id,
        updates: {
            description: "Coffeeeeeee",
            amount: 100,
            note: "I love Coffee",
            createdAt: moment(0).add(5, 'days')
        }
    };
    expect(reducer(state, action)).toEqual(
        [ 
            state[0], {
            id: state[1].id,
            description: "Coffeeeeeee",
            amount: 100,
            note: "I love Coffee",
            createdAt: moment(0).add(5, 'days')
            }, state[2]
        ]
    )
});

test('should not edit expense if expense is not found to state',() => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "2"
    };
    expect(reducer(state, action)).toEqual(state)
});