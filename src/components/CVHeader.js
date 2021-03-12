import MainInfo from './MainInfo';
import ContactInfo from './ContactInfo';

const CVHeader = ({ capitalize }) => {
  return (
    <header className="cv-header">
      <MainInfo capitalize={capitalize} />
      <ContactInfo />
    </header>
  );
};

export default CVHeader;
