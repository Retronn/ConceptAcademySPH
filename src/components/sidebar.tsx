import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  ArrowLeftFromLineIcon,
  BlogIcon,
  ComputerIcon,
  DashboardIcon,
  FocusIcon,
  InstagramIcon,
  SettingsIcon,
  ShopIcon,
  StarIcon,
  SupportIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { IconSvgProps } from "@/types";
import { Divider } from "@nextui-org/divider";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {User} from "@nextui-org/user";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import { useState } from "react";

type SidebarProps ={
  activeSection: string
}

export const Sidebar = ({activeSection}:SidebarProps) => {
  
  


  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="flex items-center m-4 gap-12">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
            
          >
            <Logo size={44}/>
            <p className="font-bold text-inherit">Blackbook</p>
          </Link>
          
          <Button isIconOnly variant="flat" size="sm" className="bg-default-100">
            <ArrowLeftFromLineIcon strokeWidth={1} size={20}/>
          </Button>
        </div>


        <ul className="mx-4">
          <SidebarItem icon={DashboardIcon} label="Dashboard" href="/" isActive={activeSection=="Dashboard"}/>

          <SidebarItem icon={ComputerIcon} label="My Tests" href="/tests" isActive={activeSection=="My Tests"}/>

          <SidebarItem icon={FocusIcon} label="Focus Areas" href="/focus" isActive={activeSection=="Focus Areas"} hasNewInfo/>

          <SidebarItem icon={StarIcon} label="Favorites" href="/" isActive={activeSection=="Favorites"} isDisabled/>

          <SidebarItem icon={BlogIcon} label="Blog" href="/" isActive={activeSection=="Blog"} isDisabled/>

          <SidebarItem icon={ShopIcon} label="Shop" href="/" isActive={activeSection=="Shop"} isDisabled/>

          <Divider className="my-5"/>

          <SidebarItem icon={SupportIcon} label="Support" href="/" isDisabled/>

          <SidebarItem icon={SettingsIcon} label="Settings" href="/" isDisabled/>

        </ul>

        <div className="flex flex-grow flex-col justify-end">

            <Divider/>
            
            <div className="h-16 flex flex-col items-start justify-center p-4">

              

              <Dropdown>
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "./TestUserLogo.jpg",
                    }}
                    className="transition-transform"
                    description="@Re_tron"
                    name="Alexandr Tkachyov"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile">
                    Profile 
                  </DropdownItem>
                  
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </div>
        </div>
      </nav>
    </aside>
  );
};


type SidebarItem = {
  icon: any,
  label: string,
  href: string,
  isActive?:boolean,
  hasNewInfo?: boolean,
  isDisabled?:boolean,
}
const SidebarItem = ({ icon: Icon, label, href, isActive=false, hasNewInfo=false, isDisabled=false}:SidebarItem) => {
  return (
    <li >
      <Link
        className={`flex justify-between items-center rounded-md my-1 px-2 py-2.5 after:rounded-md select-none 
                    ${(isActive) ? "bg-default-200 after:hidden" : ""}`}
        color="foreground"
        isDisabled={isDisabled}
        href={href}
        isBlock
        
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18}/>}
          <p className="text-inherit text-sm">{label}</p>
        </div>
        <div className={`h-1.5 w-1.5 bg-primary-500 rounded-full ${(!hasNewInfo) ? "hidden" : ""}`} />
      </Link>
    </li>
  );
};



// export const Navbar = () => {
  

//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand className="gap-3 max-w-fit">
//           <Link
//             className="flex justify-start items-center gap-1"
//             color="foreground"
//             href="/"
//           >
//             <Logo />
//             <p className="font-bold text-inherit">BlackBook</p>
//           </Link>
//         </NavbarBrand>
//         <div className="hidden lg:flex gap-4 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <Link
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </Link>
//             </NavbarItem>
//           ))}
//         </div>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <Link isExternal href={siteConfig.links.instagram} title="Instagram">
//             <InstagramIcon className="text-default-500"/>
//           </Link>
//           <ThemeSwitch />
//         </NavbarItem>
        

//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <Link isExternal href={siteConfig.links.github}>
          
//         </Link>
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

      
//     </NextUINavbar>
//   );
// };
