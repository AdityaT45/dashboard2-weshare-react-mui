import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'


interface Message {
  id: number;
  user: string;
  profilePic: string;
}

interface MessegeCardProps{
    message: Message
}

const MessegeCard:React.FC<MessegeCardProps> = ({message}) => {
  return (
    <>
    <Box display={'flex'} alignItems={'center'} mt={2} gap={1}>
         <Avatar src={`/assets/${message.profilePic}`} sx={{ width: 45, height: 45 }} />
    <Typography > {message.user}</Typography>
        
      </Box>
    </>
  )
}

export default MessegeCard