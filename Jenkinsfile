pipeline {
    agent any

    environment {
        IMAGE_NAME = "fabismohammed/my-devops-app"
        CONTAINER_NAME = "my-devops-app"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/fabismohammed/devops-portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio:v1 .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub_creds',
                        usernameVariable: 'fabismohammed',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "fabismohammed" --password-stdin
                        docker push portfolio:v1
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop portfolio-container || true
                    docker rm portfolio-container || true

                    docker pull portfolio:v1

                    docker run -d --name portfolio-container -p 8010:80 portfolio:v1
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
