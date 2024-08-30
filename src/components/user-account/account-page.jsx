import React, { useState } from "react";
import "../../styles/user-account/globalAccount.scss";
import styles from "../../styles/user-account/accountPage.module.scss";
import Sidebar from "./sidebar";
import QuestionIcon from "./static/icons/question-icon";
import MyTestsSection from "./my-tests-section";


function AccountPage(){
    const colors = {
        mainBlack: "#0F0F0F",
        paleBlueGray: "#f1f2f7",
        mainGray: "#5a5a5a",
        white: "#ffffff",
    }

    const userLogo = "./userLogo.svg";
    const [activeSection,setActiveSection] = useState("MyTests");


    return(
        <div className={styles.pageContainer}>

            
            
            <Sidebar colors={colors} 
                     activeSection={activeSection}
                     setActiveSection={setActiveSection}
            />

            <div className={styles.mainContentArea}>

                <div className={styles.header}>

                    <div className={styles.greetingsArea}>
                        <h4>Welcome, Alexandr!</h4>
                        <p>It's a perfect day to practice!</p>
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

                    <MyTestsSection/>

                </div>

            </div>

        </div>
    )
}

export default AccountPage;