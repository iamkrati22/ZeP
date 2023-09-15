# NoPass
A large number of websites providing users with various services have popped up on the internet in today's time, and this has radically changed the landscape of today's online ecosystem. Every service has made it's own authentication and hence, a new password. Having so many such authentication services running on the net has a large amount of problems, all related from the smallest remembrance of passwords to the security level of a user's password. <br>
![image](https://github.com/iamkrati22/ZeP/assets/72783120/69b95c87-8561-462f-976e-dac349fbc0a0)

Our app being presented here is a Password Manager tool for users that saves their passwords securely and reveals them to the user whenever they want to.<br>
## Tech Stack 
### 1. Front End 
* HTML
* CSS
* JavaScript
### 2. Back End 
* Express
* Node
### 3. File Storage 
* Web3Storage - Decetralized Storage System 
* WebStorage API
### 4. Version Control 
* Git
* GitHub
### 5. Cloud Deployment 
* Digital Ocean 
----
## Password Management Concept 
We use Web3Storage as a Blockchain based decentralized file storage system for storing user passwords. This is a much better way for storing the passwords since we don't need to maintain a central server for storing a user's passwords, eliminating any chances of a major server attack being performed which leaks any data, since the data isn't stored at a single space but rather distributed over a large decentralized network. In this file system, each node stores 256KB of data. We are connected to our nearest node, and then keep on changing the nodes as the file sizes increase. Hence, it can eliminate the chances of any unreliability and slow speed from the server.<br>
## Login System
We also tried to implement a major concept into our login system, where we can secure passwords in an entirely new way without worrying about a network interceptor or a server attack to detect our password. The concept being used is **Zero Knowledge Proof**, which is a mathematical concept used in cryptography. It basically is a concept where a prover can prove his statement to a verifier without actually revealing any information about the statement's and it's proof. In this way, we can actually hide our identity from a person but can still verify that we are the same person. <br>
The classical way of authenticating a user in a web application, is to ask the user for a login and password. Then, the login and password are sent directly to the server; and the server responds to the request. If security is needed, an HTTPS protocol is used. But the credentials are still sent through the Internet and servers are able to read them, even if the password is stored in a hashed and salted form. For example, very often a user visits a web site whose certificate cannot be verified by the user’s browser. However, the browser usually enables the user to accept the certificate although its verification was unsuccessful. Furthermore, to take the full potential of HTTPS technology, a user should buy a certificate issued by a well-known certificate authority and then the certificate should be installed on the user’s browser. Installing a certificate to a web browser happens rarely and is prone to various attacks. <br><br>
![normal_auth](https://user-images.githubusercontent.com/75308834/154834781-98eb11bd-72f9-4d92-bf19-28a65a8df9d8.png)<br><br>
To authenticate a user, ZKP protocols require more than two steps: a user’s request, a server’s challenge, a user’s response, and a server’s response. Due to the ZKP nature, the server’s challenges cannot be delivered to the user with the login form. Therefore, such protocols differ from the classical approaches, and require more flexible communication means. In addition, the authentication process is more computationally expensive and consumes more bandwidth. <br>
As a proof of concept, we have used a very simple algorithm(challenge) to show our approach. It is just a function that gets the sum of XORs of consecutive character pairs from the password. It is to be noted that this function might have a large amount of collisions in it's values, hence it is just a proof of concept and not to be used as a challenge at any other place. We can use multiple algorithms to verify the same user which will further lower down the chances of someone else impersonating our ID, since they will prevent collisions from happening again and again. <br><br>
![zkp_auth](https://user-images.githubusercontent.com/75308834/154834887-77bf30ba-fce0-4d30-bd83-2430b10e9ed4.png) <br><br>
When a user registers for the first time, his/her username is first stored along with the algorithmic answers of the challenge. When the user logs in again, this data is run through the same challenge on the client side, and then authenticated. Hence, in this way, we don't actually send out any sensitive data about our password, but can still authenticate a user with high levels of security in the process. This prevents any data (a hash or a plain text password) from being sent out from the system and prevents any Man in the Middle attacks or Server-Side attacks from retrieving user's password, since it is not being sent anywhere on the network. <br>
## Miscellaneous
We also used Git and GitHub to include version control in our application for future updations and current work. It helped us work together on the file even when we physically weren't together. GitHub stores all our files inside a Repository with applied version control, which can help revert the version if an issue is detected in a newer version. <br>
Finally, we needed to host our website onto a data server. For this purpose, we had to upload all the data to a cloud hosting service by creating a VM on it and then hosting it all on a system. We have used DigitalOcean as our cloud service provider, it is a popular Cloud Hosting Service that helped us to create our VM, and then upload and run all the data on the Web server. <br>

##### Resources - 
1. [Extending Web Applications with a Lightweight Zero Knowledge Proof Authentication](https://dl.acm.org/doi/10.1145/1456223.1456241)
2. [Web application authentication using ZKP and novel 6D chaotic system](https://www.researchgate.net/publication/349772516_Web_application_authentication_using_ZKP_and_novel_6D_chaotic_system)
3. [Web3.Storage Docs](https://docs.web3.storage/)
