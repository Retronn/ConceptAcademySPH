import global from "../../styles/user-account/globalAccount.module.scss";
import styles from "../../styles/user-account/dashboardPage.module.scss";
import { Button } from "../ui/button";


type DashboardProps =
{
    isActive: boolean
}

function DashboardPage({isActive}: DashboardProps){


    return(

        <>
            <div className={styles.controlArea} style={{display: (isActive) ? "flex" : "none"}}>

                <h5 className={global.h5}>Dashboard</h5>
                <div className={styles.switch}>

                    <button className={`${styles.switchButton} ${styles.activeSwitchButton}`}>
                        
                        <h6 className={global.h6}>English</h6>
                    </button>

                    <button className={styles.switchButton}>
                        <h6 className={global.h6}>Math</h6>
                        
                    </button>

                </div>
            </div>


            <div className={styles.dataGrid} style={{display: (isActive) ? "grid" : "none"}}>

                    <div className={styles.predictedScore}>

                        <h6 className={global.h6}>Predicted Score</h6>

                        <div className={styles.donutChart}>
                                
                        </div>

                        
                    </div>     
                    <Button> Click me </Button>

            </div>
        </>
    )
}

export default DashboardPage;