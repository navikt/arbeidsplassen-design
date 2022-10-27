import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./demo/Demo";
import "./variables.css";
import "./globals.css";

import "./components/Alert/Alert.css";
import "./components/Anchor/Anchor.css";
import "./components/BackLink/BackLink.css";
import "./components/BodyText/BodyText.css";
import "./components/Button/Button.css";
import "./components/ButtonGroup/ButtonGroup.css";
import "./components/Card/Card.css";
import "./components/Container/Container.css";
import "./components/Footer/Footer.css";
import "./components/Header/Header.css";
import "./components/Heading/Heading.css";
import "./components/Ingress/Ingress.css";
import "./components/Jumbo/Jumbo.css";
import "./components/LinkButton/LinkButton.css";
import "./components/List/List.css";
import "./components/Section/Section.css";
import "./components/SkipLink/SkipLink.css";
import "./components/Tag/Tag.css";
import "./components/TypeAhead/TypeAhead.css";

const root = createRoot(document.getElementById("app"));
root.render(<Demo />);
