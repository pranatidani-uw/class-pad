import React from 'react';
import Assembly from './Assembly'
import axios from 'axios'





function App()  {

    return (
        <div>
            
            
            <div className="header">

                <h1>Welcome to Your Easy-Learning Pad</h1>
                <p>
            Tired of your professor speaking too fast during online school
                and it being impossible to catch up? Well, welcome to the pad that
                helps you translate your video to words you can understand at your own pace.
                    Get that A, you got this :)

                    </p>
    
            </div>
            <br />
            <div className="section">
                <h2>
                    So, how does this magic tool work?
                </h2>

                <br />

                <h3>
                    1. Find your lecture or video link <br /> <br />
                    2. Insert it in <br /> <br />
                    3. Wait for a few seconds <br /> <br />
                    4. And Voila!
                </h3>
                <br /> <br />
                <h4>
                    <Assembly />
                </h4>

            </div>

            <img src="https://i0.wp.com/theeffortfuleducator.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-20-at-6.57.07-PM.png?fit=761%2C494" alt="School" width="800" height="480"></img>


        </div>

    )
}

export default App;
