Seaside Retreats

My interactive project is a website designed to help users/customers easily search for and book hotels at a wide variety of british seaside locations. My website is a very simple and easy to use site consisting of a homepage, a dropdown list of 5 locations the user can access, a gallery page which has the most popular locations the site has to offer and a contact page which has a fully functioning contact form which will be sent to my gmail instantly with a template highlighting the users name, email and their enquiry. The site also includes a vast amount of functions and features for the user to utilise how they see fit such as the google maps api located on the home page which has a marker set for each location which when hovered will display an info box which has a brief summary of that location. 

For my websites design I decided to use a combination of light and dark blues throughout the page to follow the general sea/water look which is usually assosiated with the beach theme. Each title and header is in bigger and bolder text to highlight each section out clearly with standard black text which I felt contrasted best on the backgrounds and provided the professional look is was trying to portray. I also decided that on every page I added a 1px thick black border around each section of content creating a clearer structure to the page making it easier to follow and understand.

UX

This website is targeted towards the 40+ age group as from what I understand, it is typically the older people to enjoy going away to the beach for long weekends in luxuary hotels as most of those locations are tailored towards the older generation. I have tried to design my pages in such a way to draw that older age group in with it's simple, accessible and bright style through the use of the layout and features. The goal of this site is to allow users to navigate around the site and find their perfect weekend holiday situated by the beachfront all over the UK and book a holiday with their specific specifications of date and price. If they get stuck at all then they will be able to utilise the contact form to get in touch with someone who can help thm further. 

User stories

An old couple would like to book a hotel in Cornwall which is pet friendly and close to the beach which is slightly more luxuary than any other hotels that they would have seen or heard of before. All they would need to do in order to find and book a hotel which fits those requirements is click on the locations dropdown and click on Cornwall. From there they would need to simply scroll down the page to find all the hotel on offer which include 5 images on a carousel and clearly highlighted feature lists accompanied by icons. 

Another story is that a young couple would like to book a hotel by the seaside but they are unsure on how where they need to park and they are also unsure about what attractions are near to the hotel they have chosen. In order to solve this issue they would just need to click on the contact us button located on the nav bar and fill in the form with their name, email address and what they question is. Then an operator would see the email then reply to the enqiry with the provided email address and the couple would then know what they need to know.

Features

Google maps api - I used the google maps api on the index.html page and added 5 infowindow markers. Allows the user to see nearby locations by clicking on the markers.

Social media links - This allows the user to click on any of the social media icons located in the footer of the page. Doing so will have them redirected to another tab where they will arrive at that social media page.

PDF button - Allows the user to download the brochure on the index.html page. Doing so will open a new tab with the PDF file.

Image carousel - Allows the user to view 5 images per hotel by clicking on the slider buttons. This gives the user a greater insight to the hotel.

Contact form - Allows the user to send a enquiry to the website owners by filling out the contact form located on the contact.html page which also utilises the email.js service.

A feature i would like to add in the future would be a live chat system where the site users could speak to an operator ASAP to help with any small queries they may have. 

Another feature i would like to add is a live language changer where the user could change the language of all the text on the page and still be fully functioning.

In the future i would also like to add the correct images to all of the location carousels which i was unable to do in this instance because i lacked the time and technology in order to gather all of the correct images for each hotel while making them all the same size.

Technologies used 

Bootstrap - I used https://getbootstrap.com/ in my project to create the jumbotron located on the home page and the form section that is located on the reviews page. I also used bootstrap for guidance on creating the navigation bar with the added dropdown functionality. I used bootstrap for these sections because it created the elements exactly how I wanted them and it eliminated the chance of error if I typed it up myself.

I used https://picresize.com/ so I could edit all of my images on the menu page to the exact same size so that the layout on the page would look uniform and professional. I used this size because it was a free and easy alternative to other paid editing software like photoshop.

Email.js - I used email.js to create a function contact form which would send all customer enquiries to my gmail account. Through email.js I was able to create a general email template making incomming emails more structured and uniform. 

Google maps api - I used google maps api to generate a map on the index.html page with 5 addition inwindow markers. I used this to make for a more informative and interactive page.

Testing

Throughout the development process I was testing how my website was being effected by any alterations I made in my code such as positioning and sizes. I did this by running the website in a separate browser tab and using the inspect function. Through this function I was consistently playing around with different sizes, colors and layouts as I could make any changes I wanted without effecting the actually code. This enabled me to pick up on silly mistakes I made like some elements not being responsive on the smallest resolutions. I was also able to pre plan what colors and sizes I wanted to implement without wasting any time on a gamble whether it would work or not. Using the inspect function also reduced the chance for errors because I was already able to see the end result before I added it to the real code. I also used the inspect mode to access the console which i used to test if the email.js function was correctly linked to the appropriate pages. I also sent a series of mock emails at various points through the site form which were recieved correctly in the mailbox.

I also used a code validator website (https://validator.w3.org/) for both my CSS and HTML files throughout the development process. By using this website I was able to keep track of the code I was writing and any mistakes would be flagged up there and then which made rectifying them much easier as oppose to waiting until the end of my project then fixes every error I had made.

Another method of testing I used was sending my website out to other people. I sent the server port link out to a few of my family and friends and ask them to have a play around with the site including but not limited to the navigation features or forms I had. After they had a go with the site I then asked them to give me some feedback on what was good, what's was bad and what could be improved. For example, When I was near the end of my project I asked my grandad to try and use my website by trying to get to specific pages and submiting an email via the contact form. The first attempt at navigating to certain pages on the site saw no issues at all as the navigation buttons were clear and easy to see however when my grandad tried to submit a form, first of all he tried to submit a form without a valid email it didn't work which was perfect however when he tried to submit a form with valid information the email was recieved to my inbox however the page did not refresh properly giving no indication that the form was submitted.

My website also adapts to different screen sizes and resolutions in a way that as the screen gets smaller the layout will change by shifting around the elements to hold a similar style while also being professional and functional. I have developed my website to be responsive as a whole in which I mean that as you switch resolutions to medium or small resolutions the whole page will stay very similar until you cross certain resolution checkpoints. For example, on the home page the map and information elements were divided 3/4 info and 1/4 maps however when viewing the page on a medium resolution the map element becomes the whole width of the page. From what I have experience with other websites over the years and through the feedback I have been given this layout would work well with modern day internet styles. It makes each item easy to view and makes them all stand out due to them covering the entire width of the screen.

One problem I occured while trying to implement the google maps api was trying to add multiple location info window markers on the map. I was unable to add more than on at a time because of multiple syntax errors and a limited amount of knowledge in the area. To overcome this issue I researched multiple methods that other people had used and tried to make my own version using them as an aid. After a while of trial and error i was able to get the maps working efficiently and effectivly.

I deployed my work on to Github only as it is the only platform I am familiar with at this point in time however I am aware of the importance of possibly committing to more than once site to ensure that projects are not loft if there are issues with one of the services. I deployed my work to Git hub by opening a new terminal tab in Gitpod and started off with the "git init" to initiate a git repository. Then to add any files or images I used the "git add" command followed by the file name following the correct directory path. For example, to add my style.css file I had to follow the directory path through the folders and use "git add assets/CSS/style.css". Once I had added all of the files that I wanted to I would then use the "git commit" command followed by "-m "(comment)"" so I was able to keep track of what I had done and maybe leave a note saying what I needed to do next. I could then check what was in the staging area by using the "git status" command which would tell you what each file was doing such as being modified or any uncommitted files. The final step was to then use the "git push" command which you would usually need to use your sign in details for Github but because I was using Gitpod there was no need to. Once the committed files were pushed they were then deployed on to the Github site.
