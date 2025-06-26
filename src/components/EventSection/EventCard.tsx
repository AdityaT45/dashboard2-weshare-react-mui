import * as Icons from "@mui/icons-material";
import { Box,  Typography } from "@mui/material";


interface EventCardProps{
    event:{

     label:string;
    icon:string;
    }
}

const EventCard:React.FC<EventCardProps> = ({event}) => {
 

      const Icon = Icons[event.icon as keyof typeof Icons];
  return (
   <>
   <Box display="flex" alignItems="center" gap={1} mt={1}>
      {Icon && <Icon fontSize="small" />}
      <Typography variant="body2">{event.label}</Typography>
    </Box>
   
   </>
  )
}

export default EventCard