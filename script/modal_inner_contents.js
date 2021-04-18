const taskBarItems = [
  {
    id: 1,
    title: "About Me",
    src: "images/about_me.png",
    innerContent: aboutMe(),
    imgName: "aboutme",
  },
  {
    id: 2,
    title: "Curriculum Vitae",
    src: "images/cv-icon.png",
    innerContent: cv(),
    imgName: "cv",
  },
  {
    id: 3,
    title: "Contact me",
    src: "images/contact.png",
    innerContent: contact(),
    imgName: "contact",
  },
  {
    id: 4,
    title: "Social Media Accounts",
    src: "images/network.png",
    innerContent: socNet(),
    imgName: "network",
  },
];

// „Наслаждайтесь тем, что вы делаете и вы никогда в своей жизни не будете работать.“
function aboutMe() {
  return `
    <div class="about_content">
     <div class="image_content">
       <img src="images/me.jpg">
     </div>
     <div class="text_content">
     &nbsp;&nbsp;&nbsp;Hello, I am Hakob Andreasyan from Etchmiadzin.I am 23 years old.<br>
      &nbsp;&nbsp;&nbsp;After graduating from Etchmiadzin N2 High school in 2015, I have taken a six-month programming course at ColibriLab Training Center where I have studied HTML/CSS/JS/JQ/PHP/OOP/MySQL. After a few months of practice, in 2016 I got accepted to CodeRiders Training Center to resume studying the same profession. Along with studying I have been working in different areas.<br>
      &nbsp;&nbsp;&nbsp;In January 2017 I got drafted into Army and served in Nagorno-Karabakh. After completing my military service, I worked as 1C operator, at the same time, studying the technique of creating perfumes. In 2019, I started working in Raf's Perfume shop as manager. After some time, I founded my own perfume stores.<br>
      &nbsp;&nbsp;&nbsp;In 2020, I started working in Defense Ministry of Armenia and took part in 2020 Artsakh war.<br>
      &nbsp;&nbsp;&nbsp;After the war, I have resumed practicing programming. As I already had stong basic skills in programming, I decided to continue studying it on my own. I participated in an online program where I watched  the online lectures by Rouben Meschian and then practiced his teachings with highly skilled programmers for 8 hours a day. Besides that, I have been using different outside sources and materials. I keep studying programming and do not limit myself to any particular language. I am constantly trying to get more skilled as I think that knowing programming means mastering its infinite possibilities to the fullest.











  

     </div>
   </div>	
 `;
}
function cv() {
  return `<div class="cv_content"> 
      <span>
        You can look at my CV
        <a href="https://www.canva.com/design/DAEb7UtnY7U/xBKqzzmWzHIyjH5Cf-0hcA/view?utm_content=DAEb7UtnY7U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blank">
          HERE
        </a>  or <a href="My_CV.pdf" download="Best_engineer_in_the_future.pdf"> DOWNLOAD </a> it.
      </span>
  </div>`;
}

function contact() {
  return `
    <div class="contact_content"> 
      <div class="contact_me"> 
            <h3>Contact Me</h3>
            <div class="my_contacts">
              <div class="box">
                <div class="my_contacts_icon"><i class="icon whatsApp"></i></div>
                <a class="my_contacts_details" href="https://api.whatsapp.com/send/?phone=37477260198&text&app_absent=0" target="blank">
                 <h3>+374 77 26 01 98</h3>
                </a>
              </div>
              <div class="box">
                <div class="my_contacts_icon" ><i class="icon viber"></i></div>
                <a class="my_contacts_details" href="https://msng.link/o/?37477260198=vi" target="blank">
                  <h3>+374 77 26 01 98</h3>
                </a>
              </div>
              <div class="box">
                <div class="my_contacts_icon"><i class="icon gmail"></i></div>
                <a class="my_contacts_details" href="mailto:andreasyanh98@gmail.com">
                  <h3>andreasyanh98@gmail.com</h3>
                </a>
              </div>
            </div>
      </div>

      <div class="user_contact"> 
        <h3 id="my-form-status">Or Send Me Your Contact Details</h3>
        <div class="formCover">
          <div class="loading"></div>
        </div>
        <form  id="my-form" action="https://formspree.io/f/mwkapowb" method="POST" onsubmit="event.preventDefault()">
          <div class="inform user_name">
              <span>Name: </span>
              <input type="text" placeholder="Elon ..." name="name"/>
          </div>
          <div class="inform user_surname">
              <span>Surname: </span>
              <input type="text" placeholder="Musk ..." name="surname"/>
          </div>
          <div class="inform user_officeName">
                  <span>Company Name: </span>
              <input type="text" placeholder="SpaceX ..."/>
          </div>
          <div class="inform user_contact_details">
              <span>Contact: </span>
              <input type="email" placeholder="E-mail" name="email"/>
          </div>
          <div class="inform user_contact_details">
              <span>Contact: </span>
              <input type="number" placeholder="Phone Number" name="phone"/>
          </div>
          <div class="inform user_message">
              <textarea rows="5" cols="50" name="message" id="tarea">If you have something to say ...</textarea>
          </div>
          <div class="inform send_button">
              <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function socNet() {
  return `
    <div class="socNet">
      <div class="share_button">
        <span class="fb">Facebook</span>
        <a href="https://www.facebook.com/profile.php?id=100005061793685" target="blank">Go To Page</a>
      </div>
      <div class="share_button">
        <span class="git">Github</span>
        <a href="https://github.com/handreasyan" target="blank">Go To Page</a>
      </div>
      <div class="share_button">
        <span class="lin">LinkedIn</span>
        <a href="https://www.linkedin.com/in/28011998/" target="blank">Go To Page</a>
      </div>
      <div class="share_button">
        <span class="tw">Twitter</span>
        <a href="https://twitter.com/Hak_anD_" target="blank">Go To Page</a>
      </div>
    </div>
  `;
}
window.globalArray = taskBarItems;
