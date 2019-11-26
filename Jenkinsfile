pipeline {
    agent {
        label 'nodejs'
    }
    options {
        timeout(time: 10, unit: 'MINUTES') 
    }
    stages {
        stage("Clean"){
            steps {
                echo 'Cleaning...'
                sh 'git reset --hard HEAD'
                sh 'yarn install'
            }
        }
        stage('Build') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building...'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
