🚀 CI/CD Pipeline with Jenkins, Docker, GitHub & AWS

📌 Project Overview

This project demonstrates a basic CI/CD pipeline for automatically building and deploying a web application using GitHub, Jenkins, Docker, Docker Hub, and AWS EC2.

The application source code is stored in GitHub. When changes are pushed to the repository, a GitHub Webhook triggers Jenkins. Jenkins builds the Docker image, pushes it to Docker Hub, and deploys the application on an AWS EC2 instance.

---

🏗️ Project Architecture

Developer
    │
    ▼
  GitHub
    │
    │ GitHub Webhook
    ▼
  Jenkins
    │
    │ Build Docker Image
    ▼
  Docker
    │
    │ Push Image
    ▼
 Docker Hub
    │
    │ Pull Image
    ▼
 AWS EC2
    │
    ▼
 Web Application

---

🛠️ Technologies Used

Technology| Purpose
GitHub| Source code management
Jenkins| CI/CD automation
Docker| Application containerization
Docker Hub| Docker image registry
AWS EC2| Application deployment
Linux| Server environment
Git| Version control
Webhook| Automatic Jenkins build trigger
HTML/CSS| Web application

---

📂 Project Structure

.
├── index.html
├── style.css
├── Dockerfile
├── Jenkinsfile
├── README.md
└── screenshots/

---

🔄 CI/CD Workflow

1. Developer makes changes to the application.
2. Changes are pushed to GitHub.
3. GitHub Webhook sends a notification to Jenkins.
4. Jenkins starts the pipeline.
5. Jenkins retrieves the latest source code.
6. Jenkins builds the Docker image.
7. Jenkins pushes the image to Docker Hub.
8. AWS EC2 pulls the latest Docker image.
9. The application runs inside a Docker container.
10. The application can be accessed through the browser.

---

🐳 Docker

The application is packaged into a Docker image using the "Dockerfile".

Example:

docker build -t my-portfolio .

The Docker image is then pushed to Docker Hub.

docker push <dockerhub-username>/<image-name>:latest

---

🔧 Jenkins Pipeline

The project uses a Jenkins Pipeline defined in the "Jenkinsfile".

The pipeline automates:

- Source code checkout
- Docker image building
- Docker Hub authentication
- Docker image push
- Application deployment

---

☁️ AWS EC2 Deployment

The Dockerized application is deployed on an AWS EC2 instance.

The EC2 instance runs the Docker container and makes the web application accessible through the server's public IP address.

---

🔗 GitHub Webhook

A GitHub Webhook is configured to automatically notify Jenkins when changes are pushed to the repository.

This allows the CI/CD pipeline to start automatically instead of manually starting a Jenkins build.

---

🎯 Key Learning Outcomes

Through this project, I gained practical experience with:

- Git and GitHub
- Jenkins CI/CD pipelines
- Jenkinsfile
- GitHub Webhooks
- Docker image creation
- Docker containers
- Docker Hub
- AWS EC2
- Linux commands
- Application deployment
- Basic CI/CD troubleshooting

---

🚀 Future Improvements

Possible improvements for this project include:

- Add automated testing
- Use Docker Compose
- Add Nginx as a reverse proxy
- Add HTTPS
- Add monitoring
- Use AWS services such as ECS or EKS
- Implement infrastructure as code using Terraform

---

