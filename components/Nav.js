import html from "html-literal";

export default links => html`
  <nav class="fas fa-bars">
    <ul class="hidden--mobilenav-links">
      ${links
        .map(
          link =>
            `<li id="navigation" class="navigation"><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
