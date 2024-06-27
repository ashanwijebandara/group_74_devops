// pipeline {
//     agent any

//     environment {
//         GITHUB_REPO_URL = 'https://github.com/imeshthana/TechyStore.git'
//     }

//     stages {
//         stage('Checkout') {
//             parallel {
//                 stage('Checkout Frontend') {
//                     steps {
//                         dir('techy_store_frontend') {
//                             git branch: 'main', url: "${env.GITHUB_REPO_URL}"
//                         }
//                     }
//                 }
//                 stage('Checkout Backend') {
//                     steps {
//                         dir('techy_store_backend') {
//                             git branch: 'main', url: "${env.GITHUB_REPO_URL}"
//                         }
//                     }
//                 }
//             }
//         }
//         stage('Docker Build') {
//             parallel {
//                 stage('Build Frontend') {
//                     steps {
//                         dir('techy_store_frontend') {
//                             sh 'docker build . -t techy-store-front'
//                         }
//                     }
//                 }
//                 stage('Build Backend') {
//                     steps {
//                         dir('techy_store_backend') {
//                             sh 'docker build . -t techy-store-back'
//                         }
//                     }
//                 }
//             }
//         }
//         stage('Run Docker Images') {
//             parallel {
//                 stage('Run Frontend') {
//                     steps {
//                         sh 'docker run -d --name techy-store-front -p 3000:3000 techy-store-front'
//                     }
//                 }
//                 stage('Run Backend') {
//                     steps {
//                         sh 'docker run -d --name techy-store-back -p 3001:3001 techy-store-back'
//                     }
//                 }
//             }
//         }
//     }
// }



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
                        dir('lp_gas_frontend') {
                            timeout(time: 10, unit: 'MINUTES') {
                                sh 'docker build . -t lp-gas-front'
                            }
                        }
                    }
                }
                stage('Build Backend') {
                    steps {
                        dir('lp_gas_backend') {
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
