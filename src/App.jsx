import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

export default function App() {

  return (
    <>
      <Header />
      <main className="container">
        {data.map((entry)=>(<Entry
          key={entry.id}
          entry={entry}
        />))}
      </main>
    </>
  )
}