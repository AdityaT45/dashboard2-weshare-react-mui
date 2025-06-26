import { Box, Typography } from '@mui/material'
import React from 'react'
import * as Icons from '@mui/icons-material';

interface pagesYouLikeItem {
  label: string;
  icon: string;
}

interface PagesYouLikeProps{
    pages: pagesYouLikeItem[]
}
const PagesYouLike:React.FC<PagesYouLikeProps> = ({pages}) => {
  return (
    <>
     <Box mt={2}>
      <Typography variant="subtitle2" gutterBottom>
        Pages You Like
      </Typography>

      {pages.map((item, index) => {
        const IconComponent = Icons[item.icon as keyof typeof Icons];
        return (
          <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
            {IconComponent && <IconComponent fontSize="small" color="action" />}
            <Typography variant="body2">{item.label}</Typography>
          </Box>
        );
      })}
    </Box>
    </>
  )
}

export default PagesYouLike