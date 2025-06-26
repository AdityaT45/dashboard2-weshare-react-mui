import {  Avatar,  Badge,  Box,  Button,  FormControl,  Input,  InputAdornment,  Menu,  MenuItem,
  Typography,} from "@mui/material";
import logo from "../../../public/assets/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface User {
    name: string;
    username: string;
    followers: number;
    following: number;
    posts: number;
    profilePic: string;
  }

interface NavbarProps{
    user:User
}


const Navbar:React.FC<NavbarProps> = ({user}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box display="flex" alignItems="center" p={2} gap={1}>
        <Box
          width={40}
          height={40}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer", overflow: "hidden" }}
        >
          <img
            src={logo}
            alt="preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Typography variant="h5" ml={2} sx={{ fontWeight: "bold",display: {
      xs: "none",
      md: "block",
    },}}>
          WeShare
        </Typography>

        <Box sx={{ width: "30%", ml: "10%" }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <Input
              placeholder="Search..."
              disableUnderline
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "gray" }} />
                </InputAdornment>
              }
              sx={{
                backgroundColor: "#dadada",
                borderRadius: "10px",
                padding: "6px 12px",
                width: "100%",
                
              }}
            />
          </FormControl>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ ml: "auto" }}
        >
          <Box
            width={40}
            height={40}
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              ml: "auto",
              backgroundColor: "#dadada",
            }}
          >
            <Badge color="secondary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </Box>

          <Box
            width={40}
            height={40}
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              ml: "auto",
              backgroundColor: "#dadada",
            }}
          >
            <BookmarkIcon />
          </Box>

          <Box>
            <Button
              onClick={handleClick}
              sx={{
                textTransform: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Avatar
                alt=""
                src={user.profilePic}
                sx={{ width: 38, height: 38 }}
              />
              {user.username}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
