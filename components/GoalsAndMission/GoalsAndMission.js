import { Container, Row, Col } from "../bootstrap"
import AboutPagesCard from "../AboutPagesCard/AboutPagesCard"
import {
  OurGoalsCardContent,
  OurMissionCardContent
} from "../GoalsAndMissionCardContent/GoalsAndMissionCardContent"

const GoalsAndMission = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 fw-bold">Our Goals and Mission</h1>
          <AboutPagesCard title="Our Goals">
            <OurGoalsCardContent />
          </AboutPagesCard>
          <AboutPagesCard title="Our Mission">
            <OurMissionCardContent />
          </AboutPagesCard>
        </Col>
      </Row>
    </Container>
  )
}

export default GoalsAndMission
