import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;