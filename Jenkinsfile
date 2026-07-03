pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh """
                    docker rmi ghcr.io/serayasaravanan/nginx:latest 2>/dev/null || true
                    docker pull ghcr.io/serayasaravanan/nginx:latest
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                pwd
                ls
                    docker stop fe 2>/dev/null || true
                    docker rm fe 2>/dev/null || true
                    docker run -d -p 3000:80 -v \${WORKSPACE}/index.html:/usr/share/nginx/html/index.html --name fe ghcr.io/serayasaravanan/nginx:latest
                """
            }
        }

    }
}
