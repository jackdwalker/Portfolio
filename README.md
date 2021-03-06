# Jack Walker Portfolio Project 

[Desktop/Tablet Link](https://jackdwalker.github.io/Portfolio/src/index.html)  
[Mobile Link](https://jackdwalker.github.io/Portfolio/src/mobile.html)  
[Github Repo Link](https://github.com/jackdwalker/Portfolio) 

## My Website 

### Purpose
The purpose of developing this website was three-fold. Primarily it was made as an assessment piece, showcasing what I had learnt about HTML and CSS, and how I could apply those lessons. Secondly it was created to display my skills, work history, and a little bit about myself to potential employers and anyone else what was interested. Thirdly it was a fun exercise in engaging creative process and infusing a bit of myself in the code I was creating.

### Functionality/Features
The website was meant to feature a responsive mobile-up design, scaling nicely from widths of 320px right through to 2880px. Unfortunately, due to a poor design process, the refactoring of my static, non-responsive desktop/tablet version of my website took too long to complete while meeting the assessment deadline. I instead have a partially completed responsive design, which is the mobile.html website. This website scales for all phone sizes from 320px in width to 414px. My desktop version renders nicely from retina displays (2880px width) down the the size of a smaller tablet (768px).

It has metadata in its header to allow the various different web crawlers to access certain pieces of information about my site, to help it show up in search engines. It features easily identifiable (at least I think - but this is a matter of opinion) anchors allowing intuitive site navigation, with smooth scrolling. I wanted to make the site fun to play with and move around, so I implemented a touch of JavaScript (JS) to allow my content panels to slide in and out. When minimised the content panels take little screen real-estate, allowing users to have a better view of the art I used on my website. I also used JS to create a back to top button that will only display itself after the user has scrolled past the page they load on to. Finally I implemented a contact form that will at some stage utilise a PHP or SQL database as a way to store messages. This felt like a safer way to allow users to contact me. I wasn't comfortable openly displaying my email on a public website for security reasons. I used SCSS to style my website in a way that represented me, and in a way that I personally think looks really appealing and fun to navigate. Plus there's the little glowy boys on my front page that will glow when you mouse over them :D

### Sitemap
I used a single page design with multiple internal anchors to navigate to my page's contents, and external links to other places users can find me on the Internet.

<img src="docs/Sitemap.png" width="600" alt="Jack logo"/>

### Screenshots
Desktop Load Page:  
<img src="docs/Desktop-Loadpage.png" width="600" alt="Desktop Loadpage"/>  

Desktop Content w/ Sidepanel Collapsed:  
<img src="docs/Desktop-Content-Closed.png" width="600" alt="Desktop Loadpage"/>  

Desktop Content w/ Sidepanel Open:  
<img src="docs/Desktop-Content-Open.png" width="600" alt="Desktop Loadpage"/>  

Mobile Load Page:  
<img src="docs/Mobile-Loadpage.png" height="600" alt="Desktop Loadpage"/>  

Mobile Content:  
<img src="docs/Mobile-Content.png" height="600" alt="Desktop Loadpage"/>  

Tablet format is identical to desktop with some minor formatting changes to font size for readability and container fitting.


### Target Audience
This project was first and foremost designed to appeal to potential future employers, other software developers and colleagues, and give them an idea of who I was, and what skills I possess, presenting a bit of my personality in the process. I also wanted to build a page that could showcase what I had learnt so far at the Coder Academy bootcamp to my friends and family. Finally I wanted a website that would strike interest in people who had accidentally navigated to my page, and engage them for at least a little while before they returned to searching for the original page that they were looking for - who knows who might stumble upon your page.

### Tech Stack
The base for my website was built using HTML5 and I styled it using CSS compiled from SCSS. I called the Google Fonts API to use my font choice, 'Work Sans', and the Font Awesome CDN to utilise some groovy little icons throughout my website.

In the future I plan to implement a PHP database in the back-end so that I can take messages from my contact form. I will hopefully also convert my website to Ruby on Rails in the near future as this content is covered in my course!

## Design Documentation

### Moodboard
Up until around a year ago my best friend and I were reblogging posts on Tumblr for a music project which formed somewhat of a moodboard for all of the things that interest us. We shared a very similar taste, so I used that Tumblr page to inspire my website design colour palette, style, and art direction.

[Umbra Lookbook Tumblr](https://umbralookbook.tumblr.com/)

### The Design Process
After taking inspiration from my moodboard I set out to create a minimal white-on-black website, with heavy use of imagery to really help showcase my personality.

I didn't have a set idea of how I wanted my website to look - mostly due to a lack of planning or forethough as I discuss in the details of my planning process below - so I implemented different design elements as they came to me.

Two similar ideas went into the design of my nav bar. I wanted users to be able to access the home page (as that was where they would navigate to the different pieces of content), and the contact form at any time. To reinforce this idea, I created a back to top button, that would also allow users to get back to the home page, as soon as they had scrolled past it regardless of device size or browser used. I also wanted users to be able to access my different social media/Github redirects at their leisure if for whatever reason a piece of content inspired thme to do so. I originally intended for the mobile version to have collapsible internal anchors, that would move into a hamburger for mobile sized devices (as you will see in my mobile wireframe below), but I didn't end up having time to implement this, and it still functions fine in the current iteration. This is something I would like to change in the future though. 

My content sections were originally just images with semi-transparent panels (so users could see the art featured on my website if they weren't focusing on the content) sitting on top of them, holding the body of my content. This was fine, but I wanted something that looked more engaging. On the same day I was shown a past student's webpage (I think it was Kieran?) who utilised parallax styling on his images. I thought it looked super cool, so found a way to implement that for the different content sections of my website. The final step in the design of my content section was to push the content into collapsible sidebars that would open and close upon clicking. The main design paradigm I had in mind during all of these different stages was allowing the user to look at the content on my website that engaged them, in a way that didn't clutter the screen space. If that was the content body's text, they should be able to see that content, if they wanted to only see the art, then they should be able to push the content away. I tried to implement this paradigm in an intuitive way that was accessible to anyone.

I wanted users to be able to contact me, but didn't want to publically expose my email address on Internet, so I created a contact form. Leaving it publically available would leave me vulnerable to spamming attacks, and potentially allow to people brute force my logins to various websites having half of the required credentials (i.e. only needing to guess my password). The contact form solves this problem by allowing users to send me messages with their contact details, and storing these messages in a PHP database. People might be able to use this to DoS my website, or use cross site scripting attacks if I don't implement the PHP code properly, but I still feel like it is the most secure design decision I could make given my options.

### Wireframes
Mobile Wireframe:  
![picture](docs/Mobile-Wireframe.png)

Tablet Wireframe:  
![picture](docs/Tablet-Wireframe.png)

Desktop Wireframe:  
![picture](docs/Desktop-Wireframe.png)

### Personal Logo
I did design a very simple logo, but only for favicon purposes:  
<img src="src/imgs/Logoblack.png" width="400" alt="Jack logo"/>

### Usability Considerations
#### Accessibility
I strove to make my website as accessible as possible for people with visual impairments. I tried to keep colour-blindness in mind when I chose my theme colours, and after already leaning towards white-on-black it made it an easy decision for me to make. I tried to keep my remaining color palette at an acceptable degree of contrast for anyone to be able to visually engage with my content. I ensured to have appropriate alt-text for my pictures so that screen readers would be able to accurately describe the picture to the blind or visually impaired users of my website. I talked to my girlfriend who isn't overly experienced with technology or the web for her opinions on the website. She commented on making it more clear how the sidepanels were initially opened. I implemented the arrows icons on the sidepanels for clarity based on her suggestion.

One other thing to note is that the back to top button will not properly function in the Inspector developer tool if you are checking for responsiveness. It functions based on window innerHeight (i.e. the height of the browser the script is called in). To properly test it's responsiveness you must use a suitablably sized device.

I also configure my favicon in such a way that any browser or device should be able to access it:
![picture](docs/Favicon-1.png)
![picture](docs/Favicon-2.png)

#### Performance
With a very image heavy website, loading speed can be an issue. I tried to compress my images to as small a size as possible without affecting the visual quality of the picture.

My page only uses one font, with three different weights, and very minimal JS so the performance of my website was largely uneffected by these design elements.

In the future I want to implement psuedo-element shadow transitions for the glowing emojis on my load page, as that would significantly reduce the performance overhead of the shadow transition effect they utilise.

#### Performance and Accessibility Audits
Mid-way through project:  
  
<img src="docs/Inspector-Audit-Mar-20.png" width="400" alt="Inspector Audit March 20th"/>

End of project:  
  
<img src="docs/Inspector-Audit-Final.png" width="400" alt="Inspector Audit End of Project"/>

### Challenges
I encountered a really large number of time consuming problems throughout this process. A lot of these can be attributed to poor planning, and specificity issues, but some of the other major ones included: 
* Creating a responsive header with flexbox
* Creating a responsive contact form with flexbox
* Parallax issues outside of the desktop version and being unable to convert it to flexbox
* Maintaining the same HTML base, but requiring one set JS functions in my mobile version, and another on my desktop/tablet version
* Generally refactoring due to poor time-management
* I'm just going to mention specificity again because I wasted countless hours to specificity problems :(

## Details of Planning Process
Honestly my planning process was pretty awful, and it's shown in how messy my workflow has been for this project, and my inability to put a responsive website inside of one html file.

I came into the bootcamp with a small amount of background knowledge in HTML/CSS. So when we progressed to the HTML/CSS section of the course I was eager to get a head-start hoping to create a really cool website for myself, knowing that this was something I would be using to represent myself out in the real world. I drew some inspiration from my Tumblr page and off I went. I ended up with a pretty decent looking desktop webpage, that had absolutely zero responsiveness that didn't utilise SCSS whatsoever. 

So I went back to the drawing board and made wireframes detailing how I wanted to restructure my website to work on both mobile and tablet devices. I started from scratch refactoring my desktop CSS into SCSS, and re-writing my whole HTML base for a mobile device and working up from there. 

### Project Timeline
- Mar 11: Moodboarding
- Mar 12-15: Initial desktop site design
- Mar 18-19: Final touches on first version of desktop site
- Mar 20: Wireframing and beginning to visualise how to make my website responsive
- Mar 21: Began the process of building mobile-up and refactoring my CSS into SCSS
- Mar 22-23: Most of the progress for my second website iteration was completed
- Mar 24: Documentation (definitely should've done this in advance - my time management sucks) and final touches on website

Image documentation showing Trello progression, Inspector audits, Favicon implementation, etc were created at different stages of the development process. Only the text component of the documentation was done post-development.

### Project Management

I used Trello to dissect my website components into different tasks, and assign myself rough time-frames for completion. My time-frames were pretty out, but I feel I have a better handle on how to time-manage myself in the future now.

[Portfolio Trello Board](https://trello.com/b/AWMZPskp/portfolio)

#### Trello Progress

Start of March 20th:
![picture](docs/Trello-Mar-20-Start-of-Day.png)

End of March 20th:
![picture](docs/Trello-Mar-20-End-of-Day.png)

March 21st:
![picture](docs/Trello-Mar-21.png)

March 22nd:
![picture](docs/Trello-Mar-22.png)

March 23rd:
![picture](docs/Trello-Mar-23.png)

End of Project:
![picture](docs/Trello-End-of-Project.png)


## Short Answer Q & A:

### 1. Describe key events that led to the development of the internet from the 1980s to today
In 1971 Vinton Cerf developed the Transmission Control Protocol followed by the Internet Protocol allowing computers around the world to interact in a virtual space. Cerf's protocol alongside Ray Thomlinson's 'email' system developed in the same year allowed scientists and government agencies throughout the 1980s to transmit data to one another, but the web didn't really take off until the 1990s. In 1991 Tim Berners invented the World Wide Web, allowing anyone with an internet connection to access his global network. Mosaic was developed in 1993, and was the web browser that popularised surfing the web globally. In 1994 Netscape arrived on the scene, and by 1995 accounted for 90% of internet browser usage. Since then the internet has been utilised for a myriad of services such as education, file hosting, social media, and of course shopping; and surprise, surprise, the first thing ever purchased over the web was pizza.

### 2. Define and describe the relationship between fundamental aspects of the internet such as: domains, web servers, DNS, and web browsers
Every device from phones, to laptops, to smart TVs, have an Internet Protocal (IP) address; a set of numbers that act as a virtual address for that device. Servers are computers that manage access to a web resource or service (e.g. e.g. Google.com or Facebook.com) but like our devices have an IP address. When we enter a Uniform Resource Locator (URL) into our web browser, it looks up that URL in a Domain Name Server (DNS) which has a list of URLs and their corresponding IP addresses. This was an important development in web-surfing, as remembering the IP address for every site or service we want to access would be extremely difficult. We connect to the internet and make requests from our personal devices via our Internet Service Provider (ISP) who tap into the internet network backbone, transmitting our data across the globe.

### 3. Reflect on one aspect of the development of internet technologies and how it has contributed to the world today
The TCP/IP protocols exist within four layers: application, transport, internet, and network. The application layer is the one in which programs like our web browsers exist. The transport layer is where TCP and the User Datagram Protocol (UDP) reside. TCP/UDP interact with the application layer via ports. Ports tell TCP/UDP where the data is coming from. Each application layer protocol will typically have its own port e.g. the Hypertext Transfer Protocol our browsers utilise uses port 80. Between the transport and internet layers packet switching occurs, separating our data into pieces in a defined order so that they can be properly rearranged at the destination. The internet layer attaches the origin and destination IP addresses. The network layer is where the destination MAC address is added so it doesn't go to someone else on your network, and converts the data to electrical impulses, which will travel along the internet backbone.

