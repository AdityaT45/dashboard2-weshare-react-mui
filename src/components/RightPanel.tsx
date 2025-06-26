import { Box} from "@mui/material";
import Messege from "./Messege";

import EventSection from "./EventSection/EventSection";

interface Message {
  id: number;
  user: string;
  profilePic: string;
}
interface Event {
  label:string;
  icon:string;
}


interface RightPanelProps{
  messages: Message[];
  events:Event[]

}

const RightPanel:React.FC<RightPanelProps> = ({messages,events}) => {
  return (
    <>
      <Box width="100%" p={2} pt={0}  sx={{
    
   
    display: {
      xs: "none",
      sm: "block",
    },
  }}>
        <Messege messages={messages}/>
        <EventSection  events={events} />

      </Box>
    </>
  );
};

export default RightPanel;
