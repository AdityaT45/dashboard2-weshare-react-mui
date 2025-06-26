import { Avatar, Box, Button, FormControl, Input, InputAdornment } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import TagIcon from "@mui/icons-material/Tag";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

interface User {
    name: string;
    username: string;
    followers: number;
    following: number;
    posts: number;
    profilePic: string;
  };

interface AddPostProps {
  user: User;
}

const AddPost:React.FC<AddPostProps> = ({user}) => {
  return (
    <>
     
        <Box  p={2} my={2} sx={{ background: "white", borderRadius: "8px",boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)"}}>
        <Box display="flex" alignItems="center" gap={2}>
          <Box>
            <Avatar alt="Remy Sharp"  src={user.profilePic} />
          </Box>

          <Box sx={{ width: "72%" }}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <Input
              placeholder="Search..."
              disableUnderline
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(109, 109, 109, 0.19) "}} />
                </InputAdornment>
              }
              sx={{
                backgroundColor: "rgba(67, 67, 67, 0.05) ",
                borderRadius: "10px",
                padding: "6px 12px",
                width: "100%",
                
              }}
            />
          </FormControl>
        </Box>
        
          <Box>
            <Button variant="contained">Share Post</Button>
          </Box>
        </Box>
        <Box
  display="flex"
  alignItems="center"
  flexWrap="wrap"
  gap={2}
  mt={2}
  sx={{
    justifyContent: {
      xs: "center",
      sm: "flex-start",
    },
  }}
>
  <Button
    variant="text"
    startIcon={<ImageIcon sx={{ color: "blue" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    Image/Video
  </Button>

  <Button
    variant="text"
    startIcon={<AttachFileIcon sx={{ color: "orange" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    Attachment
  </Button>

  <Button
    variant="text"
    startIcon={<VideoCameraBackIcon sx={{ color: "red" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    Live
  </Button>

  <Button
    variant="text"
    startIcon={<TagIcon sx={{ color: "green" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    HashTag
  </Button>

  <Button
    variant="text"
    startIcon={<AssignmentIndIcon sx={{ color: "green" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    Mention
  </Button>

  <Button
    variant="text"
    endIcon={<KeyboardArrowDownIcon sx={{ color: "grey" }} />}
    sx={{ color: "black", textTransform: "none" }}
  >
    Public
  </Button>
</Box>

      </Box>
    </>
  );
};

export default AddPost;
