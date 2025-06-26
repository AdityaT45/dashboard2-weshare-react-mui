import { Typography, Box, Divider } from "@mui/material";
import * as Icons from "@mui/icons-material";
import React from "react";
import PagesYouLike from "./PagesYouLike";

interface NavigationItem {
  label: string;
  icon: string; 
}

interface pagesYouLikeItem {
  label: string;
  icon: string;
}

interface NavigationProps {
  navigationData: NavigationItem[];
  pagesYouLike: pagesYouLikeItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navigationData,pagesYouLike }) => {

  const [activeTab, setActiveTab] = React.useState("Feed");
  return (
    <>

    <Box  m={2}  p={2}  alignItems="center" sx={{ background:"white", borderRadius:"10px",boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)"}}>
      {navigationData.map((item, i) => {
        const IconComponent = Icons[item.icon as keyof typeof Icons];
        const isActive = activeTab === item.label;
        return (

          
          <Box key={i} display="flex" alignItems="center" gap={1} mb={1}  sx={{
              borderRadius: "8px",
              padding:"5%",
               backgroundColor: isActive ? "#1979e5" : "transparent",
             
               cursor: "pointer",
             }}
             onClick={() => setActiveTab(item.label)}>
            
            {IconComponent && <IconComponent sx={{ color: isActive ? "white" : "inherit" }} />}
            <Typography variant="body1" sx={{ color: isActive ? "white" : "inherit" }}>{item.label}</Typography>
          </Box>
          
        );
      })}
      <Divider/>
        <PagesYouLike pages={pagesYouLike}/>


      </Box>
    </>
  );
};

export default Navigation;








