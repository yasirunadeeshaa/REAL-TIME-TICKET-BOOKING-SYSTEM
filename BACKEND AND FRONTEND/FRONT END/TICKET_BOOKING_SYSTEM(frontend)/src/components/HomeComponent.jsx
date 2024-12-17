import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setShowAlert(true);
    }
  }, [isLoggedIn]);

  return (
    <><div>
          <h2 class='welcomeheading'>Real-Time Ticket Booking Application: Seamless & Instant Reservations</h2>
     </div>
      {/*<div>
              {showAlert && (
                  <div style={{ padding: '10px', backgroundColor: '#ffcccc', color: '#d8000c', border: '1px solid #d8000c', marginBottom: '15px' }}>
                      Notice: If you are not signed in. Please click the 'Login' button to sign in or create an account to access all features of this application.
                  </div>
              )}
              
          </div>*/}
        <section class='card-container'>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" href="https://www.imdb.com/title/tt0478970/">Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>CONCERT</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick="navigate(https://www.imdb.com/title/tt0478970/)">Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>

        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MUSICAL SHOW</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>
        <div class='card'>
            <img class='card-image' src='./abcd.jpg'></img>
            <h2 class='card-title'>MOVIE</h2>
            <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
            <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
        </div>
        
        
        </section>
          
          
          
          </>
  )
}

export default HomeComponent