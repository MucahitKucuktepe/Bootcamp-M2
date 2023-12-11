import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDeleteOutline } from "react-icons/ti";

const AppointmentList = ({ appointments, handleDelete, handleDoubleClick }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {appointments.length === 0 && (
        <img src="./img/appointment.jpg" alt="" width={"400px"} />
      )}
      {appointments.map(({ id, patient, consulted, doctor, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          role="button"
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4> {patient} </h4>
              <h4> {doctor} </h4>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString("tr")}</h5>
              <h6>Time: {new Date(day).toLocaleTimeString("tr")} </h6>
            </Col>
            <Col className="text-end">
              <TiDeleteOutline
                className="text-danger fs-1 text-end"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
