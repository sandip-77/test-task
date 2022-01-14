import React from 'react'
import Chart from '../components/chart/Chart'
import Navbar from '../components/navbar/Navbar'
import Tutorials from '../components/tutorials/Tutorials'
import styles from './home.module.css'
const Home = () => {
    return (
        <>
            <div className={('d-flex')}>
                <Navbar/>
                <Tutorials/>
                <Chart/>
            </div>
        </>
    )
}

export default Home
