import profile_picture from '../images/profile_picture.png'

const AboutMe = () => {
  return (
    <div id = "about_me" className="about_me_container">

      <div className="about_me_text">
        <h1>Hello, my name is Arno Van Eetvelde and I'm an afstuderende engineer.</h1>
        <h1>Table tennis</h1>
        <h1>Programming languages</h1>
        <h1>Projects</h1>
        <h1>Contact + CV</h1>
      </div>
        
      <div className="about_me_spacer" />

      <img src={profile_picture} alt="Profile Picture" />

    </div>
  )
}

export default AboutMe
