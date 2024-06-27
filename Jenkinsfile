


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
        stage('Docker Build') {
            parallel {
                stage('Build Frontend') {
                    steps {
                        dir('FrontEnd') {
                            timeout(time: 10, unit: 'MINUTES') {
                                sh 'docker build . -t lp-gas-front'
                            }
                        }
                    }
                }
                stage('Build Backend') {
                    steps {
                        dir('BackEnd') {
                            timeout(time: 10, unit: 'MINUTES') {
                                sh 'docker build . -t lp-gas-back'
                            }
                        }
                    }
                }
            }
        }
        stage('Run Docker Images') {
            parallel {
                stage('Run Frontend') {
                    steps {
                        sh 'docker run -d --name lp-gas-front -p 3000:3000 lp-gas-front'
                    }
                }
                stage('Run Backend') {
                    steps {
                        sh 'docker run -d --name lp-gas-back -p 3001:3001 lp-gas-back'
                    }
                }
            }
        }
    }
}
