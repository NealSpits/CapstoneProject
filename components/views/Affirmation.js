import html from "html-literal";

export default state => html`
  <section id="comment">
    <!-- form -->
  <form method="POST" action="/">
    <!-- name -->
    <fieldset class="fieldset">
        <div id="submittedname">
        <label for="submittedname"
          >Name:</label>
          <input name="name" class="name" autocomplete="name" type="text" id="name" placeholder="Please Enter Your Name" size="25" required/>
          </div>
          <!-- affirmation -->
        <div id="affirmation"></div>
        <label for="affirmation"
          >Affirmation:
          <textarea type="text" name="affirmation"  id="affirmation"
          class="affirmation1" rows="5" cols="33" required /></textarea>
        </label>
        </div>
        <div id="submitbutton">
        <input type="submit" value="Submit" name="submit">
        </div>
        </fieldset>
      </form>
  </section>
`;
