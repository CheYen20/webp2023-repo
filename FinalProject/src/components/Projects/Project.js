import { myProjectCn } from './../../global/constants.js';
import Item from './Item';

const Project = () => {
  return (
  <div className="my-project section" id="projects">
   <div className="container">
        <h2>Projects</h2>
        <div className="projects-items clearfix">
{myProjectCn.map((item) => {
  const { id, theme, description, skills, imgUrl} = item
return (<Item key={id} theme={theme} description={description} skills={skills} imgUrl={imgUrl} />)
})}
          
        </div>
      </div>
    </div>
  )
}
export default Project