import reducer from '../../reducers/filters';
import moment from 'moment';

const state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set default filter to state',() => {
    const action = {type: '@@INIT'}
    expect(reducer(undefined, action )).toEqual(state);
});

test('should set text filter to state',() => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    }
    expect(reducer(undefined, action )).toEqual(
    {
        text: 'Rent',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set start date filter to state',() => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    }
    expect(reducer( undefined, action )).toEqual(
    {
        ...state,
        startDate: moment()
    });
});

test('should set end date filter to state',() => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    }
    expect(reducer( undefined, action )).toEqual(
    {
        ...state,
        endDate: moment()
    });
});

test('should sort by amount',() => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }
    expect(reducer( undefined, action )).toEqual(
    {
        ...state,
        sortBy: 'amount'
    });
});

test('should sort by date',() => {
    const stateDate = {
        ...state,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE'
    }
    expect(reducer( stateDate, action )).toEqual(
    {
        ...state,
        sortBy: 'date'
    });
});
