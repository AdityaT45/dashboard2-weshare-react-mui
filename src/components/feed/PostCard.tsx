import {
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

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

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Box
      bgcolor="white"
      borderRadius={2}
      p={2}
      mb={2}
      boxShadow="0 1px 4px rgba(0,0,0,0.08)"
    >
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={`/assets/${post.profilePic}`} sx={{ width: 45, height: 45 }} />
        <Box ml={2}>
          <Typography fontWeight={600}>{post.user}</Typography>
          <Typography variant="caption" color="text.secondary">
            {post.date}
          </Typography>
        </Box>
      </Box>

      {/* Media Section */}
      <Box display="flex" gap={1} mb={2} borderRadius={2} overflow="hidden">
        {post.media.length === 1 ? (
          <Box
            component="img"
            src={`/assets/${post.media[0]}`}
            alt="post"
            width="100%"
            sx={{ borderRadius: 2, objectFit: "cover" }}
          />
        ) : (
          post.media.slice(0, 2).map((img, i) => (
            <Box
              key={i}
              component="img"
              src={`/assets/${img}`}
              alt={`post-${i}`}
              width="50%"
              sx={{ objectFit: "cover", borderRadius: 2 }}
            />
          ))
        )}
      </Box>

      {/* Footer: Like, Comment, Share */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={3}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <FavoriteBorderIcon fontSize="small" />
            <Typography variant="body2">{post.likes} Like</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <Typography variant="body2">{post.comments} Comment</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <ShareOutlinedIcon fontSize="small" />
            <Typography variant="body2">{post.shares} Share</Typography>
          </Box>
        </Box>
        <IconButton>
          <BookmarkBorderIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostCard;
