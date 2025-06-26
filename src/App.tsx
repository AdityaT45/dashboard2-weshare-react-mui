

import Wrapper from "./components/Wrapper";
import jsonData from "../data/weshare-data.json";

function App() {
  return <Wrapper user={jsonData.user}   navigationData={jsonData.navigation} stories={jsonData.stories} posts={jsonData.posts} messages={jsonData.messages} events={jsonData.events} pagesYouLike={jsonData.pagesYouLike}/>;
}

export default App;
