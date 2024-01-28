import BoardList from "./components/Board/BoardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="relative min-w-screen max-w-screen w-full mx-auto h-[100dvh] flex flex-col">
      <Header />
      <BoardList />
      <Footer />
    </div>
  );
}

export default App;
