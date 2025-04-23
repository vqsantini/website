import { Community } from "../components/Community";
import { Content } from "../components/Content";

export function Home(){
  return(
    <div className="main">
      <Content/>
      <Community/>
    </div>
  )
}