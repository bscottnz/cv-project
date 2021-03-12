import Header from './components/Header';
import CV from './components/CV';

function App() {
  // capitalize relevent element names to use the
  // corresponding edit function
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <>
      <Header />
      <CV capitalize={capitalize} />
    </>
  );
}

export default App;
