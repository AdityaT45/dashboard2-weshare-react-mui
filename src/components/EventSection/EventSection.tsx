import { Box, Divider, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventCard from './EventCard';


interface Event {
  label:string;
  icon:string;
}

interface EventSectionProps{
    events: Event[]

}


const EventSection:React.FC<EventSectionProps> = ({events}) => {
  return (
    <>
    <Box mt={2} p={2} sx={{background:"white",borderRadius:"8px"}}>
      <Box display={'flex'} alignItems={'center'}>
        <Typography variant='subtitle1'>Events</Typography>
        <MoreVertIcon  sx={{ color: "grey", textTransform: "none", ml: "auto" }}/>
      </Box>
      <Divider sx={{mt:"4%"}}/>

      {
        events.map((event, index) =>(
            <EventCard key={index} event={event} />
        ))}

      </Box>
    </>
  )
}

export default EventSection