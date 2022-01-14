import clsx from 'clsx';
import { style } from 'd3';
import React from 'react'
import { Form } from 'react-bootstrap';
import Grid from '../grid/Grid';
import Header from '../headerNav/Header';
import styles from './chart.module.css';

const Chart = () => {
    return (
        <>
            <div className={styles.charts}>
                <Header/>
                <div className={styles.grids}>
                    <Grid/>
                </div>
                <div className={clsx('d-flex flex-column', styles.sidebarOptions)}>
                    <i className={clsx("far fa-edit", styles.bluebg)}></i>
                    <p><i className="fas fa-compress"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-arrows-alt-v"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-expand"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-cut"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-share-alt"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-download"></i><span>Full Screen</span></p>
                    <p><i className="fas fa-plus"></i><span>Full Screen</span></p>
                </div>
            </div>
        </>
    )
}

export default Chart
