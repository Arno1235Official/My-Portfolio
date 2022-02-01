import profile_picture from '../images/profile_picture.png'

const AboutMe = () => {
  return (
    <div className="about_me_container">
      <div className="about_me_text">
        
      </div>
        <h1>Hello my name is Arno Van Eetvelde</h1>
        <p className="about_me_spacer" />
        <img src={profile_picture} alt="Profile Picture" />
    </div>
  )
}

export default AboutMe
