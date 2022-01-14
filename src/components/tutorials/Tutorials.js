import clsx from 'clsx'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import styles from './tutorial.module.css'

const Tutorials = () => {

    const [showDesc, setShowDesc] = useState(false)


    const showDescs = () => {
        setShowDesc(true)
    }

    return (
        <>
            <div className={clsx('d-flex flex-column', styles.mainDiv)}>
                <div className={styles.tutorialsTop}>
                    <p className={styles.myChart1}>My Chart 1 <i className={clsx("far fa-edit", styles.icon)}></i></p>
                </div>

                    <div className={clsx(styles.ytDiv, showDesc && styles.hide)}>
                        <div className={styles.mainINputDiv}>

                                <div className={styles.inputDiv}>
                                    <Form.Control className={styles.input} type="text" placeholder="Search tutorials" />
                                    <i  className={clsx("fas fa-search", styles.search)}></i>
                                </div>
                        </div>


                        <div onClick={showDescs} className={styles.yt}>
                            <p className={styles.ytHeading}>How to create a chart from scratch?</p>
                            <img className={styles.ytImg} src="images/yt.png" alt="" />
                        </div>

                        <div onClick={showDescs} className={styles.yt}>
                            <p className={styles.ytHeading}>How to create a chart from scratch?</p>
                            <img className={styles.ytImg} src="images/yt.png" alt="" />
                        </div>

                        <div onClick={showDescs} className={styles.yt}>
                            <p className={styles.ytHeading}>How to create a chart from scratch?</p>
                            <img className={styles.ytImg} src="images/yt.png" alt="" />
                        </div>
                    </div>


                    <div className={clsx(styles.singleVdo, showDesc && styles.show)}>
                        <i onClick={() => setShowDesc(false)} className={clsx("fas fa-arrow-left", styles.arrow)}></i>
                        <div className={styles.imgDesc}>
                            <img className={styles.ytImg} src="images/yt.png" alt="" />
                            <p className={styles.ytHeading}>How to create a chart from scratch?</p>

                            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vitae mollitia, nostrum repudiandae rerum sunt totam tenetur reiciendis harum itaque deserunt perferendis quod, expedita cupiditate id dolorem hic soluta unde voluptatibus, eaque assumenda illum! <br /> <br /> Cum fuga pariatur ratione eaque, doloribus ducimus cumque veritatis quae eos. Alias qui vero corrupti quibusdam quod, natus, ducimus aut debitis amet sunt eligendi consequuntur non illo dolore, tenetur corporis? At, pariatur incidunt iure aliquam delectus reiciendis omnis, ullam beatae maxime nesciunt nisi veritatis veniam, nam dignissimos. Rerum odit quidem dolor velit magnam earum ducimus tempore ullam cum quis nesciunt, perspiciatis sequi laboriosam. In, dolorum alias!</p>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Tutorials
