import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selector/expenses-total';
import selectExpenses from '../selector/expenses';
import numeral from 'numeral';
let locales = require('numeral/locales');
numeral.locale('nl-nl');

export const ExpensesSummary = (props) => (
    <div>
        <h2>
            Viewing {props.expenses.length} expense{props.expenses.length === 1 ? '' : 's'} totalling {numeral(expensesTotal(props.expenses)/100).format('$0,0.00')}
        </h2>
    </div>
);

const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpensesSummary);