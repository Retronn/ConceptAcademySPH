import React from "react";
import global from "../../styles/user-account/globalAccount.module.scss";
import styles from "../../styles/user-account/myTestsSection.module.scss";
import ActiveIcon from "./static/icons/active-icon";
import DoubleCheckmarkIcon from "./static/icons/double-checkmark-icon";
import DevicesIcon from "./static/icons/devices-icon";
import TrashbinIcon from "./static/icons/trashbin-icon";
import ProgressIcon from "./static/icons/progress-icon";

function MyTestsSection(){
    return(

        <>
            <div className={styles.controlArea}>

                <h5 className={global.h5}>Your Tests</h5>
                <div className={styles.selector}>

                    <button className={`${styles.selectorButton} ${styles.activeSelectorButton}`}>
                        <ActiveIcon/>
                        <h6 className={global.h6}>Active</h6>
                    </button>

                    <button className={styles.selectorButton}>
                        <h6 className={global.h6}>Past</h6>
                        <DoubleCheckmarkIcon/>
                    </button>

                </div>
            </div>


            <div className={styles.testsArea}>
                                

                <button className={styles.createTestButton}>

                    <div className={styles.cardContent}>
                        <DevicesIcon/>
                    </div>
                                    
                    <div className={styles.cardTitle}>
                        <h6 className={global.h6}>Real-Like Practice</h6>
                    </div>

                </button>


                <div className={styles.previousTestButton}>

                    <div className={styles.testCardHeader}>
                        <h6 className={global.h6}>SAT Practice 2</h6>

                        <button>
                            <TrashbinIcon/>
                        </button>
                        
                    </div>

                    <div className={styles.testCardBody}>

                        <div className={styles.testStatus}>
                            <ProgressIcon/>
                            <p className={global.p5}>In progress...</p>
                        </div>

                        <p className={global.p6}>06.08.2024</p>

                    </div>

                </div>


            </div>
        </>
    )
}

export default MyTestsSection;