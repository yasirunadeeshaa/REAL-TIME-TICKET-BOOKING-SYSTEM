// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const HomeComponent = () => {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     if (!isLoggedIn) {
//       setShowAlert(true);
//     }
//   }, [isLoggedIn]);

//   return (
//     <><div>
//           <h2 class='welcomeheading'>Real-Time Ticket Booking Application: Seamless & Instant Reservations</h2>
//      </div>
//       {/*<div>
//               {showAlert && (
//                   <div style={{ padding: '10px', backgroundColor: '#ffcccc', color: '#d8000c', border: '1px solid #d8000c', marginBottom: '15px' }}>
//                       Notice: If you are not signed in. Please click the 'Login' button to sign in or create an account to access all features of this application.
//                   </div>
//               )}
              
//           </div>*/}
//         <section class='card-container'>
//         {/* <div class='card'>
//     <img class='card-image' src='./abcd.jpg' alt='Movie Poster'></img>
//     <h2 class='card-title'>MOVIE</h2>
//     <h3 class='card-name'>Harry Potter</h3>
//     <p class='card-dis'>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?
//     </p>
//     <p class='card-rating'>Rating: ⭐⭐⭐⭐☆ (4.5/5)</p>
//     <p class='card-genre'>Genre: Fantasy, Adventure</p>
//     <p class='card-release'>Release Date: November 16, 2001</p>
//     <p class='card-duration'>Duration: 2h 30m</p>
//     <p class='card-cast'>Cast: Daniel Radcliffe, Emma Watson, Rupert Grint</p>
//     <div class='card-tags'>
//         <span class='tag'>#Fantasy</span>
//         <span class='tag'>#Adventure</span>
//         <span class='tag'>#Magic</span>
//     </div>
//     <a href="https://www.harrypotter.com/" target="_blank">
//         <button class="card-btn">Learn More</button>
//     </a>
//     <a href="https://youtube.com/trailer-link" target="_blank">
//         <button class="card-btn">Watch Trailer</button>
//     </a>
// </div> */}

//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <h3 class='card-name'>Harry potter</h3>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <a href="https://www.harrypotter.com/">
//             <button class="card-btn" >Learn More</button></a>
//         </div>

//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>CONCERT</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick="navigate(https://www.imdb.com/title/tt0478970/)">Learn More</button>
//         </div>
//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>

//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MUSICAL SHOW</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>
//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>
//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>
//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>
//         <div class='card'>
//             <img class='card-image' src='./abcd.jpg'></img>
//             <h2 class='card-title'>MOVIE</h2>
//             <p class='card-dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non consectetur ratione sed quod officia delectus maxime. Quae dignissimos, nobis ipsum a deleniti ducimus enim, adipisci obcaecati maiores dolor recusandae veniam?</p>
//             <button class="card-btn" onClick={URL="https://www.imdb.com/title/tt0478970/"}>Learn More</button>
//         </div>
        
        
//         </section>
          
          
          
//           </>
//   )
// }

// export default HomeComponent



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomeComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoggedIn) {
//       setShowAlert(true);
//     }
//   }, [isLoggedIn]);

//   // Fetch events from backend
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('http://localhost:8090/api/events');
//         if (!response.ok) {
//           throw new Error('Failed to fetch events');
//         }
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <div>
//         <h2 className="welcomeheading">
//           Real-Time Ticket Booking Application: Seamless & Instant Reservations
//         </h2>
//       </div>

//       {showAlert && (
//         <div
//           style={{
//             padding: '10px',
//             backgroundColor: '#ffcccc',
//             color: '#d8000c',
//             border: '1px solid #d8000c',
//             marginBottom: '15px',
//           }}
//         >
//           Notice: If you are not signed in, please click the 'Login' button to
//           sign in or create an account to access all features of this
//           application.
//         </div>
//       )}

//       <section className="card-container">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div className="card" key={event.eventID}>
//               <img
//                 className="card-image"
//                 src="./abcd.jpg"
//                 alt={event.eventType}
//               />
//               <h2 className="card-title">{event.eventType}</h2>
//               <h3 className="card-name">{event.eventName}</h3>
//               <p className="card-dis">{event.eventDescription}</p>
//               <button
//                 className="card-btn"
//                 onClick={() => window.open(event.eventLearnMore, '_blank')}
//               >
//                 Learn More
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>Loading events...</p>
//         )}
//       </section>
//     </>
//   );
// };

// export default HomeComponent;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8090/api/event/getevents');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="card-container">
      {events.length > 0 ? (
        events.map((event) => (
          <div className="card" key={event.eventID}>
            <img className="card-image" src="./abcd.jpg" alt={event.eventType} />
            <h2 className="card-title">{event.eventType}</h2>
            <h3 className="card-name">{event.eventName}</h3>
            <p className="card-dis">{event.eventDescription}</p>
            <button
              className="card-btn"
              onClick={() => window.open(event.eventLearnMore, '_blank')}
            >
              Learn More
            </button>
          </div>
        ))
      ) : (
        <p>Loading events...</p>
      )}
    </section>
  );
};

export default HomeComponent;

