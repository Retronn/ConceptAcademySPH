import React, { useRef, useState } from "react";
import global from "../../styles/user-account/globalAccount.module.scss";
import styles from "../../styles/user-account/accountPage.module.scss";
import Sidebar from "./sidebar";
import QuestionIcon from "./static/icons/question-icon";
import MyTestsSection from "./my-tests-section";
import DashboardPage from "./dashboard-page";


function AccountPage(){
    const colors = {
        mainBlack: "#0F0F0F",
        paleBlueGray: "#f1f2f7",
        mainGray: "#5a5a5a",
        white: "#ffffff",
    }

    const userLogo = "./userLogo.svg";


    



    return(
        <div className={styles.pageContainer}>

            
            
            <Sidebar colors={colors} 
                     activeSection={activeSection}
                     setActiveSection={setActiveSection}
            />

            <div className={styles.mainContentArea}>

                <div className={styles.header}>

                    <div className={styles.greetingsArea}>
                        <h4 className={global.h4}>Welcome, Alexandr!</h4>
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

                    <MyTestsSection/>

                </div>

            </div>

        </div>
    )
}

export default AccountPage;