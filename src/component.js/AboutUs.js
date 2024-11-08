import React from 'react'
import myimage from './myimage.jpg'
import anubhav from './myimage1.jpg'
import abhishek from './myimagw2.jpg'
import arnav from './myimage2.jpg'



export default function AboutUs(props) {
  return (
    <div className='my-3'>
        <div className="jumbotron">
        <div className="container" style={{color:props.mode==='light'?'black':'#e1ebe4' }}>
          <h1 className="text-center" style={{color:props.mode==='light'?'black':'#e1ebe4' }}>About us</h1>
          <p className="h3 display-6 text-center">Welcome to NewsMania – Your go-to source for the latest headlines and news from around the world. We are a passionate team of writers, journalists dedicated to providing engaging news content across a wide variety of categories.</p>
        </div>
      </div>

      <div className="container my-5" style={{color:props.mode==='light'?'black':'#e1ebe4' }}>
  
        <div className="d-flex flex-wrap">
          <div className="col-md-4">
          <img src={myimage} alt="Arpit" className="img-fluid rounded-circle text-center mx-5" style={{ width: '150px', height: '150px' }} />
            <h2>Arpit -Lead Developer</h2>
            <p>With a keen interest in technology and coding, he leads the development of the platform and ensures the user experience is top-notch. Arpit's enthusiasm for coding is contagious, and he's always on the lookout for ways to innovate and improve the website </p>
          </div>
          <div className="col-md-4">
          <img src={arnav} alt="Arpit" className="img-fluid rounded-circle text-center mx-5" style={{ width: '150px', height: '150px' }} />
            <h2>Arnav - Frontend developer</h2>
            <p> With an eye for design and user experience, he ensures the platform is intuitive and visually appealing. Arnav’s work focuses on crafting beautiful and responsive layouts that enhance the user experience on any device.

“Great design is about more than aesthetics. It’s about creating seamless experiences for users.”  </p>
          </div>
          <div className="col-md-4">
          <img src={anubhav} alt="Arpit" className="img-fluid rounded-circle text-center mx-5" style={{ width: '150px', height: '150px' }} />
            <h2>Anubhav - Content Strategist</h2>
            <p>Anubhav is responsible for curating and managing the news content that appears on NewsMania. His focus is on delivering the most relevant and impactful news stories to our audience. With a deep understanding of what matters to our users, Anubhav ensures the platform always stays up-to-date.

“Quality content is at the heart of everything we do. My job is to ensure you get the best, most informative news.</p>
         
          </div>
        </div>
        <div class="d-flex justify-content-center"><div className="col-md-4 ">
        <img src={abhishek} alt="Arpit" className="img-fluid rounded-circle text-center mx-5" style={{ width: '150px', height: '150px' }} />
            <h2>Abhishek - Optimising code</h2>
            <p>Abhishek specializes in API integration and ensuring that our application fetches real-time news data seamlessly. His expertise ensures that NewsMania can provide accurate and up-to-date news from various sources. Abhishek works tirelessly to optimize the data flow and make the app efficient.</p>
           
          </div></div>

        <hr/>

      </div>


    </div>
  )
}
