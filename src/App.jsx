import Wrapper from "./components/Wrapper"
import Button from "./components/Button"
import Row from "./components/Row"
import Column from "./components/Column"
import Textbox from "./components/Textbox"
import WrapperNav from "./components/WrapperNav"
import WrapperContainer from "./components/WrapperContainer"

function App() {

  return (
    <>
      <WrapperContainer>
        <WrapperNav blur>
          <Row>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </Row>
        
      </WrapperNav>
      </WrapperContainer>
      
      <Wrapper>
        <Row>
            <Textbox width="fit-content">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consequatur voluptatibus dicta reprehenderit dolores aliquam iste commodi id quaerat? Laboriosam amet praesentium mollitia harum est perferendis aliquam eius minima laudantium.</p>
            </Textbox>
        </Row>
        <Row>
          <Button rowStretch></Button>
          <Button rowStretch></Button>
          <Button text="?"></Button>
        </Row>
      </Wrapper>
      <Wrapper width={'fit-content'} blur>
        <Row>
          <Button></Button>
          <Button></Button>
          <Button></Button>
          <Button></Button>
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
