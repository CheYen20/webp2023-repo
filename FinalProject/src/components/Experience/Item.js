import { TiPin } from "react-icons/ti";

const Item = (props) => {
  return (
    <div className="col-item">
<p className="experience-year">{props.year}</p>
<div className="resume-detail">
  <h4>{props.company}</h4>
  <h6>{props.position}</h6>
  <ul>{props.description.map((item, key) => {
      return(<li key={key}><TiPin /> {item}</li>)
    })}</ul>
</div>
</div>
  )
}
export default Item