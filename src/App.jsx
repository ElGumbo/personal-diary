import "./App.css";
import EntryList from "./components/EntryList";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [diaryEntries, setDiaryEntries] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("diaryEntries") || "[]");
    return stored.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  });
  
  return (
    <>
      <Header />
      <EntryList entries={diaryEntries} />
    </>
  );
}

export default App;
