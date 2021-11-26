import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const DashboardGraphs = () => {
    return (
        <>
        <div>
          Hello Graph  
        </div>
        
        <Link to='invoices'>InvoPage</Link>
        </>
    )
}

export default DashboardGraphs
