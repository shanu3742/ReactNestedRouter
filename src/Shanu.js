import React from 'react'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Health from './Health'
import Ing from './Ing'
import Shanu1 from './Shanu1'
import Time from './Time'

const Shanu = () => {
    return (
        <div>
            hello shanu

<Link to='time'> Time Page</Link>
<Link to='Health'> Health Page</Link>
<Link to='ing'> Ing Page</Link>
            <Routes>
            <Route path='/' element={<Shanu1 />} />
            <Route path='time' element={<Time />}/>
            <Route path='Health/*' element={<Health />}/>
            <Route path='ing' element={<Ing />}/>

            </Routes>

        </div>
    )
}

export default Shanu
