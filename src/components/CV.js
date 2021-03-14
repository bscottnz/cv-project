import CVHeader from './CVHeader';
import Education from './Education';
import WorkExperience from './WorkExperience';

const CV = ({ capitalize }) => {
  return (
    <div className="cv-body">
      <CVHeader capitalize={capitalize} />
      <hr style={{ marginTop: 10, marginBottom: 10 }}></hr>
      <Education />
      <hr style={{ marginTop: 10, marginBottom: 10 }}></hr>
      <WorkExperience />
    </div>
  );
};

export default CV;
