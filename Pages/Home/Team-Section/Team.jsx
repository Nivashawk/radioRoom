import './Team.css'
import TeamCard from '../../../Components/TeamsCard/teamCard';
import { teamContent } from '../../../Model/Team.content';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { siteMap } from "../../../Routes/SiteMap";


const Team = () => {

  const navigate = useNavigate();

  const routeToGallery = () => {
    navigate(siteMap.TeamPage.path, { replace: true });
    // setTheme("event-theme")
  }

  const GetThemeStatus = useSelector(state => state.theme)
  const [PageContent, setPageContent] = useState(teamContent(GetThemeStatus))

  useEffect(() => {
    setPageContent(teamContent(GetThemeStatus))
  }, [GetThemeStatus])

  const TeamContainer = PageContent.team.slice(0, 3).map((teamcard)=>{
    return <TeamCard image={teamcard.image} title={teamcard.name} description={teamcard.content}/>
  })


  return (
    <div className="team-main-container">
    <div className="team-heading-container">
      <div className="team-subheading">{PageContent.subheading}</div>
      <div className="team-heading">{PageContent.heading}</div>
      {/* <div className="team-description" onClick={() => { routeToGallery() }}>View All</div> */}
    </div>
    {/* <div className="team-content-container">
      {TeamContainer}
    </div> */}
  </div>
  )
}
export default Team