import React from "react";
import styles from "../../styles/user-account/sidebar.module.scss";

import ConceptAcademyLogo from "./static/concept-academy-logo";
import TestIcon from "./static/icons/tests-icon";
import AnalysisIcon from "./static/icons/analysis-icon";
import FocusIcon from "./static/icons/focus-icon";
import FeatherIcon from "./static/icons/feather-icon";
import StarIcon from "./static/icons/star-icon";
import ShopIcon from "./static/icons/shop-icon";
import SupportIcon from "./static/icons/support-icon";
import SettingsIcon from "./static/icons/settings-icon";


function Sidebar(props){

    const {colors, activeSection, setActiveSection} = props;


    function setFocusOption(){
        setActiveSection("FocusPoints")
    } 
    function setFocusOption(){
        setActiveSection("FocusPoints")
    }

    return(
        <div className={styles.sidebar}>

            <div className={styles.footerDivider}/>
            
            <button className={styles.logoBox}>  
                <ConceptAcademyLogo/>
            </button>
            

            <div className={styles.optionsContainer}>

                <div className={styles.mainOptionsContainer}>

                    <button className={styles.sidebarOption}>
                        <TestIcon/>
                        <h6>My tests</h6> 
                    </button>


                    <button className={styles.sidebarOptionSelected}>
                        <AnalysisIcon color={colors.mainGray}/>
                        <h6>Dashboard</h6> 
                    </button>

                    <button className={styles.sidebarOption} onClick={setFocusOption}>
                        <FocusIcon color={colors.mainGray}/>
                        <h6>Focus areas</h6> 
                    </button>

                    <button className={styles.sidebarOption}>
                        <FeatherIcon color={colors.mainGray}/>
                        <h6>Blogpost</h6> 
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
    )

}


export default Sidebar;