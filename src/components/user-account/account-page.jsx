import React from "react";
import "../../styles/user-account/globalAccount.scss";
import styles from "../../styles/user-account/accountPage.module.scss";
import ConceptAcademyLogo from "./static/concept-academy-logo";
import TestIcon from "./static/icons/tests-icon";
import AnalysisIcon from "./static/icons/analysis-icon";
import FocusIcon from "./static/icons/focus-icon";
import FeatherIcon from "./static/icons/feather-icon";
import StarIcon from "./static/icons/star-icon";
import ShopIcon from "./static/icons/shop-icon";
import SupportIcon from "./static/icons/support-icon";
import SettingsIcon from "./static/icons/settings-icon";

function AccountPage(){
    const colors = {
        mainBlack: "#0F0F0F",
        paleBlueGray: "#f1f2f7",
        mainGray: "#5a5a5a",
        white: "#ffffff",
    }

    return(
        <div className={styles.pageContainer}>
            <div className={styles.footerDivider}/>

            <div className={styles.sidebar}>

                <button className={styles.logoBox}>  
                    <ConceptAcademyLogo/>
                    <h6>SAT Practice Hub</h6>  
                </button>


                <div className={styles.optionsContainer}>

                    <div className={styles.mainOptionsContainer}>
                        <button className={styles.sidebarOption}>
                            <TestIcon color={colors.mainGray}/>
                            <h6>My Tests</h6> 
                        </button>


                        <button className={styles.sidebarOption}>
                            <AnalysisIcon color={colors.mainGray}/>
                            <h6>General Analysis</h6> 
                        </button>

                        <button className={styles.sidebarOption}>
                            <FocusIcon color={colors.mainGray}/>
                            <h6>Focus Points</h6> 
                        </button>

                        <button className={styles.sidebarOption}>
                            <FeatherIcon color={colors.mainGray}/>
                            <h6>Blog Post</h6> 
                        </button>

                        <button className={styles.sidebarOption}>
                            <StarIcon color={colors.mainGray}/>
                            <h6>Favorites</h6> 
                        </button>

                        <button className={styles.sidebarOption}>
                            <ShopIcon color={colors.mainGray}/>
                            <h6>Shop</h6> 
                        </button>

                    </div>


                    <div className={styles.additionalOptionsContainer}>

                        <button className={styles.sidebarOption}>
                            <SupportIcon color={colors.mainGray}/>
                            <h6>Support</h6> 
                        
                        </button>

                        <button className={styles.sidebarOption}>
                            <SettingsIcon color={colors.mainGray}/>
                            <h6>Settings</h6> 
                        </button>

                    </div>

                </div>
                 
            </div>

            <div className={styles.mainContentArea}>

            </div>

        </div>
    )
}

export default AccountPage;