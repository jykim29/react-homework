import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Container } from "./components/Layout";
import WidgetSlide from "./components/Widgets/WidgetSlide";

function App() {
  return (
    <Container>
      <SearchBar />
      <WidgetSlide />
    </Container>
  );
}

export default App;
