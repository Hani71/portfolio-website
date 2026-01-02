// Load JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Header
    document.getElementById('hero-name').textContent = data.name;
    document.getElementById('hero-bio').textContent = data.bio;

    // About
    document.getElementById('about-bio').textContent = data.bio;
    const skillsList = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(card);
    });

    // Contact
    document.getElementById('email-link').textContent = data.contact.email;
    document.getElementById('email-link').href = `mailto:${data.contact.email}`;
    document.getElementById('github-link').textContent = data.contact.github;
    document.getElementById('github-link').href = data.contact.github;
    document.getElementById('linkedin-link').textContent = data.contact.linkedin;
    document.getElementById('linkedin-link').href = data.contact.linkedin;
  })
  .catch(error => console.error('Error loading JSON:', error));
