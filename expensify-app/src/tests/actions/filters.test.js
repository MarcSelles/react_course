import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by amount action object', () => {
    const sort = sortByAmount();
    expect(sort).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action object', () => {
    const sort = sortByDate();
    expect(sort).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set provided text filter action object', () => {
    const text = 'Rent'
    const textFilter = setTextFilter(text);
    expect(textFilter).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate set default text filter action object', () => {
    const textFilter = setTextFilter();
    expect(textFilter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

