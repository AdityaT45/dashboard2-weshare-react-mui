import { Box } from "@mui/material";
import Profile from "../components/Profile";
import Navigation from "./Navigation";
import Stories from "./story/Stories";
import AddPost from "./AddPost";
import Feed from "./feed/Feed";
import RightPanel from "./RightPanel";
import Navbar from "./navbar/Navbar";

interface Post {
  id: number;
  user: string;
  profilePic: string;
  date: string;
  media: string[];
  likes: number;
  comments: number;
  shares: number;
}

interface Message {
  id: number;
  user: string;
  profilePic: string;
}

interface NavigationData {
  label: string;
  icon: string;
}

interface Events {
  label: string;
  icon: string;
}

interface PagesYouLike {
  label: string;
  icon: string;
}

interface WrapperProps {
  user: {
    name: string;
    username: string;
    followers: number;
    following: number;
    posts: number;
    profilePic: string;
  };

  stories: {
    id: number;
    name: string;
    avatar: string;
  }[];

  posts: Post[];
  messages: Message[];
  navigationData: NavigationData[];
  events: Events[];
  pagesYouLike: PagesYouLike[];
}

const Wrapper: React.FC<WrapperProps> = ({
  user,
  navigationData,
  stories,
  posts,
  messages,
  events,
  pagesYouLike
}) => {
  return (
    <>
      {/* Top Navbar */}
      <Box bgcolor="#f9f9f9" width="100%" maxWidth="100vw"  height="100vh" overflow="hidden">
        <Navbar user={user} />

        {/* Main Layout */}
        <Box
          display="flex"
          flexWrap="wrap"
          width="100%"
          maxWidth="100vw"
          overflow="hidden"
        >
          {/* Sidebar */}
          <Box
  sx={{
    width: {
      xs: "100%",
      sm: "40%",
      md: "30%",
      lg: "20%",
      xl: "19%",
    },
    display: {
      xs: "none",
      sm: "block",
    },
    minWidth: 0,
    p: 1,
    height: "calc(100vh - 64px)", 
    overflowY: "auto",
    scrollbarWidth: "none", 
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }}
>
  <Profile user={user} />
  <Navigation
    navigationData={navigationData}
    pagesYouLike={pagesYouLike}
  />
</Box>


          {/* Feed Section */}
          <Box
  flex={1}
  minWidth={0}
  display="flex"
  flexDirection="column"
  sx={{
    width: {
      xs: "100%",
      sm: "60%",
      md: "70%",
      lg: "55%",
    },
    p: 1,
    height: "calc(100vh - 64px)", 
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none", 
    },
  }}
>
  <Box>
    <Stories stories={stories} userStory={user} />
  </Box>

  <AddPost user={user} />
  <Feed posts={posts} />
</Box>


          {/* Right Panel */}
          <Box
  sx={{
    width: {
      xs: "100%",
      md: "25%",
    },
    display: {
      xs: "none",
      md: "block",
    },
    minWidth: 0,
    p: 1,
    height: "calc(100vh - 64px)", // adjust height based on navbar
    overflowY: "auto",
    scrollbarWidth: "none", // Firefox
    "&::-webkit-scrollbar": {
      display: "none", // Chrome, Safari
    },
  }}
>
  <RightPanel messages={messages} events={events} />
</Box>
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
