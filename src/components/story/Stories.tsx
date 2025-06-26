import { Avatar, Box, Typography } from "@mui/material";
import StoryCard from "./StoryCard";

interface Story {
  id: number;
  name: string;
  avatar: string;
}

interface UserStory {
  name: string;
  username: string;
  followers: number;
  following: number;
  posts: number;
  profilePic: string;
}

interface StoryProps {
  stories: Story[];
  userStory: UserStory;
}

const Stories: React.FC<StoryProps> = ({ stories, userStory }) => {
  return (
    <Box
      p={2}
      sx={{
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Box
        sx={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          display: "flex",
          gap: 2,
          px: 1,
          pb: 1,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          "&::-webkit-scrollbar": { display: "none" }, // Chrome
        }}
      >
        {/* User Story (double border like Instagram) */}
        <Box display="flex" flexDirection="column" alignItems="center" minWidth="80px">
          <Box
            sx={{
              border: "2px solid rgb(0, 132, 214) ",
              borderRadius: "50%",
              p: "1px",
            }}
          >
            <Box
              sx={{
                border: "2px solid white",
                borderRadius: "50%",
                p: "1px",
              }}
            >
              <Avatar
                src={`/assets/${userStory.profilePic}`}
                sx={{ width: 56, height: 56 }}
              />
            </Box>
          </Box>
          <Typography variant="caption" mt={0.5}>
            Your Story
          </Typography>
        </Box>

        {/* Other Stories */}
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Box>
    </Box>
  );
};

export default Stories;
