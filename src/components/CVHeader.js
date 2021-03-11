import MainInfo from './MainInfo';
import ContactInfo from './ContactInfo';

const CVHeader = () => {
  return (
    <header className="cv-header">
      <MainInfo />
      <ContactInfo />
    </header>
  );
};

export default CVHeader;
