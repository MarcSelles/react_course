import selectExpenseTotal from '../../selector/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const totalValue = selectExpenseTotal([]);
    expect(totalValue).toBe(0);
});
test('should correctly add up a single expense', () => {
    const totalValue = selectExpenseTotal([expenses[0]]);
    expect(totalValue).toBe(195);
});
test('should correctly add up multiple expenses', () => {
    const totalValue = selectExpenseTotal(expenses);
    expect(totalValue).toBe(114195);
});