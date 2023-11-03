import Header from "../comp/Header";
import Footer from '../comp/Footer';

const Page1 = () => {
  return (
    <>
      <Header />

      <main>
        {/* Your HTML content here */}
        <h1>Enter the website and word to click:</h1>
        <form action="/click" method="post">
          <label for="website">Website URL:</label>
          <input type="text" name="website" id="website" required />
          <br />
          <label htmlFor="word">Word to Click:</label> {/* Corrected 'for' to 'htmlFor' */}
          <input type="text" name="word" id="word" required />
          <br />
          <input type="submit" value="Start" />
        </form>
        {/* End of your HTML content */}
      </main>

      <Footer />
    </>
  );
};

export default Page1;
