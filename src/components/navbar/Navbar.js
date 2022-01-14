import clsx from 'clsx';
import React from 'react'
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <>
            <div className={clsx('d-flex flex-column', styles.navbarDiv)}>
                <img className={styles.logoImg} src="images/logo.png" alt="" />

                <div className={clsx('d-flex flex-column align-items-center', styles.pageLink, styles.active)}>
                    <i className={clsx("far fa-play-circle", styles.icon)}></i>
                    <p className={styles.inonText}>Tutorial</p>
                </div>

                <div className={clsx('d-flex flex-column align-items-center', styles.pageLink)}>
                    <i className={clsx("far fa-envelope", styles.icon)}></i>
                    <p className={styles.inonText}>Inbox</p>
                </div>

                <div className={clsx('d-flex flex-column align-items-center', styles.pageLink)}>
                    <i className={clsx("fas fa-users", styles.icon)}></i>
                    <p className={styles.inonText}>Hubs</p>
                </div>

                <div className={clsx('d-flex flex-column align-items-center', styles.pageLink)}>
                    <i className={clsx("fas fa-sticky-note", styles.icon)}></i>
                    <p className={styles.inonText}>Notes</p>
                </div>

                <div className={clsx('d-flex flex-column align-items-center', styles.pageLink)}>
                    <i className={clsx("fas fa-user", styles.icon)}></i>
                    <p className={styles.inonText}>Settings</p>
                </div>

                <div className={clsx(styles.questionMark, 'd-flex justify-content-center align-items-end')}>
                    <i className={clsx("far fa-question-circle", styles.qIcon)}></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
