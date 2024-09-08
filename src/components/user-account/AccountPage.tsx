import {useState} from "react";
import global from "../../styles/user-account/globalAccount.module.scss";
import styles from "../../styles/user-account/accountPage.module.scss";
import Sidebar from "./Sidebar";
import QuestionIcon from "./static/icons/QuestionIcon";
import MyTestsSection from "./MyTestsSection";
import DashboardPage from "./DashboardSection";


function AccountPage(){


    const userLogo = "./userLogo.svg";

    const [activeSection,setActiveSection] = useState("MyTests");

    



    return(
        <div className={styles.pageContainer}>

            
            
            <Sidebar
                     activeSection={activeSection}
                     setActiveSection={setActiveSection}
            />

            <div className={styles.mainContentArea}>

                <div className={styles.header}>

                    <div className={styles.greetingsArea}>
                        
                        <p className={global.p5}>It's a perfect day to practice!</p>
                    </div>

                    <div className={styles.profileArea}>


                        <button className={styles.helpButton}>
                            <QuestionIcon/>
                        </button>


                        <button className={styles.userProfile}>
                            <img src={userLogo}/>
                            
                        
                        </button>
  
                    </div>

                </div>

                <div className={styles.contentArea}>

                    <MyTestsSection isActive = {false} />
                    <DashboardPage isActive = {true}/>

                </div>


            </div>

        </div>
    )
}

export default AccountPage;