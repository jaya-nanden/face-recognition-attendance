# FaceIt

This project is basically an idea of improving the existing website of online mode of classes with additional features which we felt its required and could bring an impact to the system.
Below we will explain the problems which we are solving by upgrading the current website. 

# Problem Statement

  *  Proxy of attendance during online class



# Solution

  * Authentication System using face
  
  > Existing mode of attending online class have an one time email verification system followed by a simple click to enter the class. 
  In this we can't assure the validity of the student because it gives choice for anyone to attend the class. But we provide an Face Recognition API where when the student 
  clicks the attend button it asks him/her to capture an image from live webcam and to submit. After passing the image data captured from webcam, the API predicts 
  and returns yes for successful recognition of student and no for unauthorised individual. By this we can eliminate the proxy in online classes. The importance of checking 
  the student for attending daily or individual classes is equal to the importance of checking the student before examination.
  
    // Video or Gif comes here
    
  ### Working of Face Recognition:
  
   Recognition of faces can be done in 4 steps:
   
   1) Find the face in the picture
     
   2) Unwrapping the picture
     
   3) Analyse the facial structure and find unique features
     
   4) Compare the faces with the people we already knew and if matched return true
            
   For more about API refer here: https://github.com/jaya-nanden/face-authen-api
 # Tech Stack Used
  
    Web Development - HTML, CSS, Javascript

    API - Python, Flask
    
    Deployment - GitHub Pages, Heroku
    
## Website Live: https://jaya-nanden.github.io/MyCamu-Clone/

## API Link: https://face-authen-api.herokuapp.com/predict

# Team Members

  * [Jayananden M](https://github.com/jaya-nanden)
  
  * [Sridhar](https://github.com/Sridhar0519)
  
  * [Ashwin Pranaav K S](https://github.com/AshwinPranaav)
