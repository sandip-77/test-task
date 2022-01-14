import clsx from 'clsx';
import React from 'react'
import { Form } from 'react-bootstrap';
import styles from './header.module.css';

const Header = () => {
    return (
        <>
           <div className={clsx(styles.headerNav, 'd-flex')}>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>Data Set</p>
                    <span>Electrolux</span>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center', styles.active)}>
                    <p className={styles.pageLinkText}>Chart</p>
                    <i className={clsx("fas fa-chart-bar", styles.icon)}></i>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>Data</p>
                    <i className={clsx("fas fa-table", styles.icon)}></i>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>Analyzer</p>
                    <i className={clsx("fas fa-chart-pie", styles.icon)}></i>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>Chart</p>
                    <i className={clsx("fas fa-user-plus", styles.icon)}></i>
                </div>


                <div className={styles.inputField}>
                    <div className={styles.inputDiv}>
                        <Form.Control className={styles.input} type="text" placeholder="Search tutorials" />
                        <i  className={clsx("fas fa-search", styles.search)}></i>
                    </div>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>info</p>
                    <i className={clsx("fas fa-info", styles.icon)}></i>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>options</p>
                    <i className={clsx("fas fa-cog", styles.icon)}></i>
                </div>

                <div className={clsx(styles.pageLink, 'd-flex flex-column justify-content-center')}>
                    <p className={styles.pageLinkText}>library</p>
                    <i className={clsx("fas fa-book-open", styles.icon)}></i>
                </div>
            </div> 
        </>
    )
}

export default Header
