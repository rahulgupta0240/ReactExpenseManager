import React from 'react';
import CategoryListing from '../navigation/SideCategoryListing/CategoryListing';
import ExpenseList from '../expenseManager/ExpenseList/ExpenseList';
import ExpenseAddOrEdit from '../expenseManager/ExpenseAddOrEdit/ExpenseAddOrEdit';
import Divider from '@material-ui/core/Divider';
import './DashboardContainer.css';
function DashboardContainer() {
  return (
    <div className="conatiner dashboard">
      <div className="row">
        <div className="col-md-2">
          <CategoryListing />
        </div>
        
        <Divider orientation="vertical" flexItem />
        <div className="col-md-6">
          <ExpenseList />
        </div>
        
        <Divider orientation="vertical" flexItem />
        <div className="col-md-3">
          <ExpenseAddOrEdit />
        </div>
      </div>
    </div>
  );
}

export default DashboardContainer;
