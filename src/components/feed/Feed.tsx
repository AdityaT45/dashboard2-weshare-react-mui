import { Box } from '@mui/material'
import PostCard from './PostCard';

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

interface FeedProps{
    posts: Post[]
}



const Feed:React.FC<FeedProps> = ({posts}) => {
  return (
    <>
    {/* Feed Content */}
    <Box  flex={1}>

        {posts.map((item)=>(
            <PostCard key={item.id} post={item} />
        ))}
      
    </Box>
    </>
  )
}

export default Feed