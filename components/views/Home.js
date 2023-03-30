import html from "html-literal";

export default state => html`
  <div class="container">
    <section>
      <div class="suicideprevention">
        <h2 class="sp-header">Suicide Prevention</h2>
        If you are having thoughts about harming yourself or others please
        contact the Suicide and Crisis Lifeline by dialing 988 or visit their
        website at
        <span class="sp-website">
          <a href="https://988lifeline.org/"> 988lifeline.org.</a></span
        >
      </div>
    </section>

    <section>
      <div class="qotd">
        <p>
          <h2 class="qotd-header">Quote of the Day</h2>
          <q>
            Mental health problems don’t define who you are. They are something
            you experience. You walk in the rain and you feel the rain, but,
            importantly, YOU ARE NOT THE RAIN.</q
          >
          <cite>-Matt Haig</cite>
        </p>
      </div>
    </section>
    <section>
      <div class="factoftheday">
      <h2 class="mhfact">Mental Health Fact of the Day</h2>

      <p>
        <q
          >46 percent of Americans will meet the criteria for a diagnosable
          mental health condition sometime in their life, and half of those
          people will develop conditions by the age of 14.</q
        >
        <cite
          ><a href="https://pubmed.ncbi.nlm.nih.gov/15939837/">Source</a></cite
        >
      </p>
      </div>
    </section>
    <section>
      <div class="dogoftheday">
        <h2 class="dogpicheader">
          Pictures of Dogs
        </h2>
        <p class="dogpic">
          <img src="${state.message}" alt="Enjoy this picture of a dog" />
        </p>
      </div>
    </section>
  </div>
`;
