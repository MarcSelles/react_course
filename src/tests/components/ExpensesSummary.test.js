import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test ('should render the summary with items correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test ('should render the summary with one item correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test ('should render the summary without items correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});