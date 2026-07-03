pipeline {
    agent any
      stages {

        stage('Build') {
            steps {
                sh """
                    sudo docker rmi ghcr.io/serayasaravanan/nginx:latest 2>/dev/null || true
                    sudo docker pull ghcr.io/serayasaravanan/nginx:latest

                 """

            }
        }

        stage('Deploy') {
            steps {
                sh """
                   sudo docker stop fe  2>/dev/null || true
                   sudo docker rm fe  2>/dev/null || true
                   sudo docker run -d -p 80:80 -v \$(pwd)/index.html:/usr/share/html/index.html --name fe ghcr.io/serayasaravanan/nginx:latest 
                   
                """
            }
        }

        }
}