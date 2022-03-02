const Welcome = (props) => {
  return (
    <>
      <div className="ui grid container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="ui message">
            <h1 className="ui header">Hello, world!</h1>
            <p>
              Hello welcome to dinova's react repository. Here we have many
              projects that i have created in order my react skill. From left to
              right you'll see the progress that i've made when enrolling a
              react course. i hope in the future i can become a full stack
              developer
            </p>
            <a className="ui blue button" href="/basic">
              Let's go &raquo;
            </a>
          </div>
        </div>
        <div className="row">
          <div className="ui warning message" style={{ width: "100%" }}>
            <div className="header">WARNING!!</div>
            Heavy content in Season Display section, if you have low-end
            computer i suggest not to go in that site
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
