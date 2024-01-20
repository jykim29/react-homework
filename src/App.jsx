import React from "react";
import Container from "./components/Container";
import PostList from "./components/Board/PostList";
import AddressBar from "./components/Header/AddressBar";
import CategoryBar from "./components/Header/CategoryBar";
import NavigationBar from "./components/Footer/NavigationBar";

function App() {
  return (
    <Container>
      <header className="w-full">
        <AddressBar />
        <CategoryBar />
      </header>

      <main className="relative overflow-x-hidden overflow-y-auto flex-1">
        <PostList />
      </main>

      <footer className="bg-white">
        <NavigationBar />
      </footer>
    </Container>
  );
}

export default App;
