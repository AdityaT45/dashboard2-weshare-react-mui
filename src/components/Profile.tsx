import { Box, Typography, Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';


interface ProfileProps{
user:{
  name: string;
  username: string;
  followers: number;
  following: number;
  posts: number;
  profilePic: string;
}
}
const Profile: React.FC<ProfileProps> = ({ user }) => {


  return (
    <Box >
   
      <Box  m={2} mt={0}  p={2}  alignItems="center" sx={{ background:"white", borderRadius:"10px",boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)"}}>
        <Box p={1} sx={{ background:"#efefef", borderRadius:"10px"}}>
        <Box  display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <Avatar
          alt={user.name}
          src={`/assets/${user.profilePic}`}
          sx={{ width: 45, height: 45, mr: 2 }}
        />
        
          <Box display="flex" flexDirection="column">
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{user.name} <VerifiedIcon color="primary" sx={{height:"15px",width:"15px" }}/></Typography>
          <Typography variant="caption" color="text.secondary">
            {user.username}
          </Typography>
          </Box>

          </Box>
          <Box display="flex"  alignItems="center" justifyContent="center"  mt={1}>
            <Box  display ="flex" flexDirection="column" alignItems="center" mr={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{user.followers}</Typography>
          <Typography variant="body2">Followers</Typography>
          </Box>
            <Box  display ="flex" flexDirection="column" alignItems="center" mr={2}>
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{user.following}</Typography>
          <Typography variant="body2">Following</Typography>
          </Box>
            <Box  display ="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>{user.posts}</Typography>
          <Typography variant="body2">Posts</Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default Profile;
