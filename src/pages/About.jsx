const About = () => {
  return (
    <div className="mx-auto max-w-prose">
      <h1 className="mb-3 text-4xl font-semibold text-gpv-headline">About</h1>
      <p className="mb-3 text-gpv-paragraph">
        A simple GitHub profile viewer, a React app interacting with the GitHub
        API where you can search for GitHub users and view their profiles. Taken
        from{" "}
        <a
          className="text-gpv-button transition hover:underline"
          target="_blank"
          href="https://www.udemy.com/course/react-front-to-back-2022/"
          rel="noreferrer"
        >
          Brad Traversy's
        </a>{" "}
        React course. Built using ReactJS and the GitHub API.
      </p>
      <p className="text-gpv-paragraph">
        Read more on{" "}
        <a
          className="text-gpv-button transition hover:underline"
          target="_blank"
          href="https://www.udemy.com/course/react-front-to-back-2022/"
          rel="noreferrer"
        >
          my portfolio
        </a>
        .
      </p>
    </div>
  );
};

export default About;
