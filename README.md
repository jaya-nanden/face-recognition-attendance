# FaceIt

This project is basically an idea of improving the existing website of online mode of classes with additional features which we felt its required and could bring a huge impact to the system.
Below we will explain the problems which we are solving by upgrading the current website. 

# Problem Statement

  1. Proxy of attendance during online class
  2. Lack of assessment of student's emotion state during class


# Solution

  1. Face Authentication System
  
  > Existing mode of attending online class have an one time email verification system followed by a simple click to enter the class. 
  In this we can't assure the validity of the student because it gives choice for anyone to attend the class. But we provide an Face Recognition API where when the student 
  clicks the attend button it asks him/her to capture an image from live webcam and to submit. After passing the image data captured from webcam, the API predicts 
  and returns yes for successful recognition of student and no for unauthorised individual. By this we can eliminate the proxy in online classes. The importance of checking 
  the student for attending daily or individual classes is equal to the importance of checking the student before examination.
  
    **Working of Face Recognition:**
        Recognition of faces can be done in 4 steps:
            1)Find all the faces in the picture
            2)Unwrapping the picture.
            3)Analyse the facial structure and find unique features.
            4)Compare the  faces with the people we already knew and determine the person's name.
            
            Hopefully we can do this using a single library, Face Recognition.
            **Face Detection:**
              In this library Face detection will be done by Histogram of Oriented Gradients(HOG). At first we convert the image to black and white. We take every pixel of the image and compare it with the neighbour pixel. By comparing we will be able to say how much darker or brighter the pixel is when compared to the neghbouring pixels. Then we use a arrow to represent in which direction  the image gets darker. But we will endup having large amout of gradient arrows. Hence we split the images in 16x16 squares and draw a arrow in the direction where max amount of arrow is detected in a single square. Thus we get our HOG image and then we can easily find the pattern and thereby detecting faces.
            **Posing and Projecting Faces:**
               Now we need to unwrap the picture so that the eyes and lips are on the same place. Using face landmark estimation we will train a machine learning algorithm to find 68 points that defines the face. After finding the landmarks we can scale,shear and rotate so that eyes and mouths are concentrate at best position.
            **Encoding Face:**
                It is done uding a deep convolutional neural network to genarate 128 measurement on each face. This is a pretrained model. Any 10 different pictures of the same person will give the same measurements.
            **Finding the person's name from the encoding:**
                We have created a dataset of known people, stored their images on seperate folders with roll number as the folder name. When a student enter the roll number, we can use that roll number to acess his/her folder which has 5 images of him/her and compare the encoded values of the test image with the 5 images and thereby we will be able to authericate the student.
  
  // Video or Gif comes here
  
  2. Emotion Detection and Face Reading
  
  > In this online mode of class, teachers and professors lost the important aspect of analysing the students state of mind during the presence of class. Let's take a offline mode 
  of class scenario where students sit in a classroom and before the class starts the teacher sets a tone and makes the students ready to listen the class by analysing them. 
  This particular thing plays an important role to teacher for making the students to understand the next 60mins of content taught in class. But in this online class this 
  important analysis is missing for teacher to take their online classes to next level. So we provide an analysis report based on the image collected for the face recognition 
  during entering online class. Within few minutes all students will join the online class whereas in our website the report for students emotion will be displayed which will 
  benefit for teachers to modify the way of teaching in online class. This report can't completely replace the observation of students in offline mode. But it gives an 
  idea of how their mindset is.
  
  // Video or Gif comes here
  
 
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
