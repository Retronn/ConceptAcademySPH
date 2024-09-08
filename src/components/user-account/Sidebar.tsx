import styles from "../../styles/user-account/sidebar.module.scss";
import global from "../../styles/user-account/globalAccount.module.scss";
import ConceptAcademyLogo from "./static/icons/ConceptAcademyLogo";
import TestIcon from "./static/icons/TestsIcon";
import AnalysisIcon from "./static/icons/AnalysisIcon";
import FocusIcon from "./static/icons/FocusIcon";
import FeatherIcon from "./static/icons/FeatherIcon";
import StarIcon from "./static/icons/StarIcon";
import ShopIcon from "./static/icons/ShopIcon";
import SupportIcon from "./static/icons/SupportIcon";
import SettingsIcon from "./static/icons/SettingsIcon";



type SidebarProps =
{
    activeSection: string;
    setActiveSection: (sectionToActivate: string) => void;
}

function Sidebar( {setActiveSection} : SidebarProps){



    function setFocusOption(): void{
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
                        <h6 className={global.h6}>My tests</h6> 
                    </button>


                    <button className={styles.sidebarOptionSelected}>
                        <AnalysisIcon/>
                        <h6 className={global.h6}>Dashboard</h6> 
                    </button>

                    <button className={styles.sidebarOption} onClick={setFocusOption}>
                        <FocusIcon/>
                        <h6 className={global.h6}>Focus areas</h6> 
                    </button>

                    <button className={styles.sidebarOption}>
                        <FeatherIcon/>
                        <h6 className={global.h6}>Blogpost</h6> 
                    </button>

                    <button className={styles.sidebarOption}>
                        <StarIcon/>
                        <h6 className={global.h6}>Favorites</h6> 
                    </button>

                    <button className={styles.sidebarOption}>
                        <ShopIcon/>
                        <h6 className={global.h6}>Shop</h6> 
                    </button>

                </div>


                <div className={styles.additionalOptionsContainer}>

                    <button className={styles.sidebarOption}>
                        <SupportIcon/>
                        <h6 className={global.h6}>Support</h6> 
                    
                    </button>

                    <button className={styles.sidebarOption}>
                        <SettingsIcon/>
                        <h6 className={global.h6}>Settings</h6> 
                    </button>

                </div>

            </div>
            
        </div>
    )

}


export default Sidebar;