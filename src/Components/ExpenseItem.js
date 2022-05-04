import React from 'react'
import './ExpenseItem.css'
import Expenses from './Expenses'

function ExpenseItem( props) {


  return (
      <div className=''>
        <Expenses className="" date={ props.date } title={ props.title } amount={ props.amount }/>
      </div>
  )
}

export default ExpenseItem