import { myJobsCn } from './../../global/constants.js';
import Item from './Item';

const Experience = () => {
  return (
    <div className="experience section" id="experience">
   <div className="container">
        <h2>Experience</h2>
        <div className="col-horizontal clearfix">
{myJobsCn.map((item) => {
  const { id, year, company, position, description } = item
  return <Item key={id} year={year} company={company} position={position} description={description} />
})}
        </div>
      </div>
    </div>
  )
}
export default Experience