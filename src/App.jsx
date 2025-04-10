import Wrapper from "./components/Wrapper"
import Button from "./components/Button"
import Row from "./components/Row"
import Column from "./components/Column"
import Textbox from "./components/Textbox"
import WrapperNav from "./components/WrapperNav"

function App() {

  return (
    <>
      <WrapperNav blur>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </WrapperNav>
      <Wrapper>
        <Row>
            <Textbox>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consequatur voluptatibus dicta reprehenderit dolores aliquam iste commodi, id quaerat? Laboriosam amet praesentium mollitia harum est perferendis aliquam eius minima laudantium.</p>
            </Textbox>
        </Row>
        <Row>
          <Button rowStretch></Button>
          <Button rowStretch></Button>
          <Button text="?"></Button>
        </Row>
      </Wrapper>
      <Wrapper blur>
        <Row>
          <Button></Button>
          <Button></Button>
          <Button rowStretch></Button>
        </Row>
      </Wrapper>
      <Wrapper>
        <Row>
          <Button text="Strect" rowStretch></Button>
          <Column>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Column>
          <Column>
            <Button colStretch></Button>
            <Button colStretch></Button>
          </Column>
        </Row>
      </Wrapper>
    </>
    
  )
}

export default App
