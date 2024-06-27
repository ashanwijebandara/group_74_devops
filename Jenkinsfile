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
            parallel {
                stage('Cleanup Frontend') {
                    steps {
                        script {
                            sh '''
                                docker stop lp-gas-front || true
                                docker rm lp-gas-front || true
                                docker rmi lp-gas-front || true
                            '''
                        }
                    }
                }
                stage('Cleanup Backend') {
                    steps {
                        script {
                            sh '''
                                docker stop lp-gas-back || true
                                docker rm lp-gas-back || true
                                docker rmi lp-gas-back || true
                            '''
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
                        script {
                            sh '''
                                if [ $(docker ps -q -f name=lp-gas-front) ]; then
                                    docker stop lp-gas-front
                                    docker rm lp-gas-front
                                fi
                                docker run -d --name lp-gas-front -p 3000:3000 lp-gas-front
                            '''
                        }
                    }
                }
                stage('Run Backend') {
                    steps {
                        script {
                            sh '''
                                if [ $(docker ps -q -f name=lp-gas-back) ]; then
                                    docker stop lp-gas-back
                                    docker rm lp-gas-back
                                fi
                                docker run -d --name lp-gas-back -p 3001:3001 lp-gas-back || docker logs lp-gas-back
                            '''
                        }
                    }
                }
            }
        }
    }
}
