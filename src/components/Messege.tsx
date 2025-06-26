import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import MessegeCard from "./MessegeCard";
import MessegeCard2 from "./MessegeCard2";
import { useState } from "react";
import RequestList from "./RequestList ";

interface Message {
  id: number;
  user: string;
  profilePic: string;
}

interface MessegeProps {
  messages: Message[];
}



const Messege: React.FC<MessegeProps> = ({ messages }) => {


    const[activeTab,setActiveTab]=useState<"Primary" | "General" | "Request">("Primary")


    
  return (
    <>
      <Box  p={2}  sx={{ background: "white", borderRadius: "8px",boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)"}}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="subtitle1">Message</Typography>
          <EditDocumentIcon
            sx={{ color: "grey", textTransform: "none", ml: "auto" }}
          />
        </Box>

        <Box mt={1}>
          <FormControl variant="filled" sx={{ width: "100%" }}>
            <Input
              id="input-with-icon-adornment"
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray", mb: 1 }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <ClearIcon sx={{ color: "gray" }} />
                </InputAdornment>
              }
              sx={{
                backgroundColor: "#f5f5f5", // faint grey
                borderRadius: 1,
                px: 1,
                width: "100%",
              }}
            />
          </FormControl>
        </Box>

        <Box display={"flex"} alignItems={"center"} mt={2} gap={1}>
         <Button
  onClick={() => setActiveTab("Primary")}
  sx={{
    minWidth: 0,
    padding: 0,
    textTransform: "none",
    fontWeight: activeTab === "Primary" ? "bold" : "normal",
    color: "inherit",
    boxShadow: "none",
    background: "none",
  }}
>
  Primary
</Button>

<Button
  onClick={() => setActiveTab("General")}
  sx={{
    minWidth: 0,
    padding: 0,
    textTransform: "none",
    fontWeight: activeTab === "General" ? "bold" : "normal",
    color: "inherit",
    boxShadow: "none",
    background: "none",
  }}
>
  General
</Button>

<Button
  onClick={() => setActiveTab("Request")}
  sx={{
    minWidth: 0,
    padding: 0,
    textTransform: "none",
    fontWeight: activeTab === "Request" ? "bold" : "normal",
    boxShadow: "none",
    background: "none",
    ml: "auto", color: "#2196f3"
  }}
>
  Requests(4)
</Button>
        
        </Box>

        {activeTab === "Primary" &&
  messages.map((item) => <MessegeCard key={item.id} message={item} />)}

{activeTab === "General" &&
  messages.slice().reverse().map((item) => <MessegeCard2 key={item.id} message={item} />)}


  {activeTab === "Request" &&
 (<RequestList/>)}
        

        

        <Box display={"flex"} alignItems={"center"} mt={2} gap={1}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            View All
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Messege;

// {messages.slice().reverse().map((item) => (
//   <MessegeCard key={item.id} message={item} />
// ))}
