pipeline {
    agent any

    environment {
        GITHUB_REPO_URL = 'https://github.com/ashanwijebandara/group_74_devops.git'
    }

    stages {
        stage('Checkout') {
            parallel {
                stage('Checkout Frontend') {
                    steps {
                        dir('FrontEnd') {
                            git branch: 'main', url: "${env.GITHUB_REPO_URL}"
                        }
                    }
                }
                stage('Checkout Backend') {
                    steps {
                        dir('BackEnd') {
                            git branch: 'main', url: "${env.GITHUB_REPO_URL}"
                        }
                    }
                }
            }
        }
        stage('Docker Cleanup') {
            steps {
                script {
                    sh '''
                        docker-compose -f docker-compose.yml down
                    '''
                }
            }
        }
        stage('Docker Build and Run') {
            steps {
                dir('.') {
                    script {
                        sh '''
                            docker-compose -f docker-compose.yml up --build -d
                        '''
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                sh 'docker-compose ps'
                sh 'docker-compose logs backend'
                sh 'docker-compose logs frontend'
            }
        }
        cleanup {
            script {
                sh '''
                    docker-compose -f docker-compose.yml down
                '''
            }
        }
    }
}
