# Hackathon_2023
MedQuest:

## About Us:
We are a passionate team of four Computer Science majors from Rice University, united by a profound empathy for individuals battling severe or hard-to-cure diseases. Witnessing the tremendous challenges faced by those in need of life-saving medical resources, we embarked on a mission driven by compassion and purpose. Stories from individuals in our community, who have navigated complex healthcare journeys with their loved ones, ignited a deep desire within us to make a difference.

We understand the unique struggles and uncertainties that accompany severe illnesses. The constant search for hope, the Quest for answers to pressing medical questions, and the relentless pursuit of effective treatments all underscore the immense difficulties faced by individuals and their families. It is this understanding, this unwavering empathy, that fuels our commitment to building MedQuest, which aims to bridge the gap between those in need and the potential solutions that could change lives.

## What it does:
TO-DO: Install Openai, flask in Python.

Our innovative platform, fueled by advanced technology and guided by empathy, offers a wide array of functionalities tailored to the needs of individuals confronting severe or hard-to-cure diseases:

1. Medical Trials Queries: Our platform provides an intuitive and effortless means for users to discover medical trials that align with their specific conditions and requirements. We recognize that time is of the essence for these individuals, and our platform is designed to expedite the trial search process.

2. Medical AI Tool: We acknowledge the anxiety and uncertainty that often accompanies health concerns. Our AI-powered Medical AI Tool is a source of instant relief, offering precise answers to medical queries. We understand that sometimes, a quick and accurate response can provide much-needed peace of mind.

3. Demystifying Medical Terminology: Navigating the complex world of medical terminology can be intimidating, especially for those dealing with life-altering illnesses. Our platform includes a dynamically updated glossary of medical terms, making essential knowledge more accessible and empowering users with a deeper understanding of their conditions and treatment options.

## Impact and Future:
- Our project is not just a technological innovation; it is a beacon of hope for individuals facing the most challenging of circumstances. By simplifying access to clinical trials and providing a trustworthy source of medical information, we aim to ease the burdens that weigh heavily on the shoulders of those dealing with severe diseases.

- As we look ahead, we are committed to expanding our reach and impact. We envision partnerships with medical institutions, collaborations with healthcare professionals, and continuous advancements in AI technology. Our mission is to be a lifeline, a source of support, and a catalyst for change in the lives of those who need it most.


## How we built it
- We divided the project into three core components: webpage development, database and query exploration, and Medical AI development. Each team member worked concurrently on distinct tasks. Our platform primarily relies on HTML, CSS, and JavaScript, with Python utilized for implementing LLM.


## Challenges we ran into
- Initially, we encountered technical hurdles while bringing the medical AI into practical use. However, relentless effort and research enabled us to overcome these challenges and deploy it successfully. Additionally, we faced difficulties in local database caching due to scalability concerns, prompting us to opt for online database access.


## Accomplishments that we're proud of
1. We successfully leverage the advantages of online medical trial data. Our platform is based on a total of 466,894 Trials across 221 countries and all 50 states, including recruiting ones, in-progress ones, and completed ones. 
2. We built the MedQuest platform where users can have easier access to medical trial information that suits their needs. They will also have expert AI tools to help them navigate through complex medical terms. 

## What we learned
1. Problem-solving & Collaboration: 
- During the development of our clinical trial information search platform, we learned the value of breaking down complex tasks/problems into manageable subtasks. This approach allows us to effectively distribute responsibilities among team members, fostering group collaboration, and increasing overall productivity.
2. Protecting sensitive information:
- We explore client-side encryption to ensure that even if an attacker compromises the server and obtains the server-side decryption key, they would still not have access to the patient's information without the client-side key. Second, we can replace the fixed 16-byte string for the initialization vector (IV) for AES in OFB mode with a truly random ciphertext.
3. Collaboration through GitHub:
- Leveraging version control and collaborative tools such as GitHub proved invaluable in our project's development process. It facilitates seamless teamwork, enabling multiple team members to work on different aspects of the project simultaneously. This collaborative workflow promotes the efficient management of code changes.
4. Enhancing User Experience:
- In the course of our project, we learned the importance of creating interfaces that are responsive and interactive. Furthermore, we explored the benefits of employing external frameworks like Bootstrap, which greatly contributes to enhancing the overall user experience (UX).


## What's next for MedQuest
1. UX Improvements:
- Continuously enhance the user interface and overall experience.
- Explore design for optimal cross-device usability.
2. Medical AI Development:
- Investigate the Medical AI for more professional conversations.
- Explore natural language processing (NLP) for better user understanding.
3. Advanced Search:
- Incorporate additional filtering features.


##Citation:
1. Kumar, Narander, and Priyanka Chaudhary. "Password security using bcrypt with AES encryption algorithm." Smart Computing and Informatics: Proceedings of the First International Conference on SCI 2016, Volume 1. Springer Singapore, 2018.
2. Sriramya, P., and R. A. Karthika. "Providing password security by salted password hashing using bcrypt algorithm." ARPN journal of engineering and applied sciences 10.13 (2015): 5551-5556.
3. ClinicalTrials.gov. "ClinicalTrials.gov" Web. 22 Sept, 2023. https://classic.clinicaltrials.gov/ct2/home
4. BootStrap. “BootStrap.com” Web. 22 Sept, 2023. https://getbootstrap.com/
