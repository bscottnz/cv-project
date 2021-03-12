import CVHeader from './CVHeader';
import Education from './Education';

const CV = ({ capitalize }) => {
  return (
    <div className="cv-body">
      <CVHeader capitalize={capitalize} />
      <Education />
    </div>
  );
};

export default CV;
