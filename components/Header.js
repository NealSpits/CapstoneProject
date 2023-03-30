import html from "html-literal";

export default state => html`
  <header class="header-1">
    <h1 class="headerwords">${state.header}</h1>
  </header>
`;
