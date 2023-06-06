import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Item = (props) => {
  let btnArray = []
  switch (props.theme) {
    case "資管系畢業專題":
      btnArray = [
        {
          id: '1',
          text: 'Video',
          url: 'https://youtu.be/o3xz2lil4Do'
        },
      ]
      break;
    case "圖書館工讀":
      btnArray = [
        {
          id: '1',
          text: 'Website',
          url: 'https://www.facebook.com/CGULIB/?locale=zh_TW'
        },
      ]
      break;
    case "新竹校友會-返鄉服務隊":
      btnArray = [
        {
          id: '1',
          text: 'More photos',
          url: 'https://drive.google.com/drive/folders/1MpHSFL2x70Ot-hHeuRFGgdng7s3JfK8T?usp=drive_link'
        },
      ]
      break;
    default:
      btnArray = [
        {
          id: '1',
          text: '！',
          url: 'https://drive.google.com/drive/folders/1MpHSFL2x70Ot-hHeuRFGgdng7s3JfK8T?usp=drive_link'
        },

      ]
  }
  return (
    <div className="projects-content">
      <Figure>
        <FigureImage
          width={300}
          height={200}
          alt={props.theme}
          src={props.imgUrl}
        />
        <FigureCaption>
          <h3>{props.theme}</h3>
          <p>{props.description}</p>
          {props.skills.map((item, key) => {
            return(<Badge className="pj-tag" variant="warning" key={key}>{item}</Badge>)
          })}
          <div className="pj-line"></div>
            {btnArray.map((item) => {
              const { id, text, url } =  item
              return(<a  key={id} href={url} target='_blank' rel='noopener noreferrer'><Button variant='info'>{text}</Button></a>)
            })}
        </FigureCaption>
      </Figure>
  </div>
  )
}
export default Item