import {  Avatar, Box, Typography } from "@mui/material";

interface Story{
    id: number;
    name: string;
    avatar: string;
}

interface StoryCardprops{
    story: Story;
}


const StoryCard: React.FC<StoryCardprops> = ({story}) => {
  return (
    <>
 <Box
  display="flex"
  flexDirection="column"
  alignItems="center"
  minWidth="80px"
>
  {/* Outer Purple Border */}
  <Box
    sx={{
      border: "2px solid purple",
      borderRadius: "50%",
      p: "1px", // spacing between purple and white
    }}
  >
    {/* Inner White Border */}
    <Box
      sx={{
        border: "2px solid white",
        borderRadius: "50%",
       
      }}
    >
      <Avatar
        src={`/assets/${story.avatar}`}
        sx={{ width: 56, height: 56 }}
      />
    </Box>
  </Box>

  <Typography variant="caption" mt={0.5}>
    {story.name}
  </Typography>
</Box>



      
    </>
  )
}

export default StoryCard;