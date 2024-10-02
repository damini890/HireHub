pipeline {
    agent any

    environment {
        // Set the Node.js version for building the React app
        NODEJS_VERSION = '14.0'
        // AWS credentials and S3 bucket information
        AWS_ACCESS_KEY_ID = 'AKIA5G2VGKCEV6WC54V5'
        AWS_SECRET_ACCESS_KEY = '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'
        AWS_REGION = 'us-east-2'
        S3_BUCKET_NAME = 'hirehubpace'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the React app code from GitHub
                git branch: 'main', url: 'https://github.com/HireHubPace/HireHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Set NodeJS version and install dependencies
                script {
                    def nodeHome = tool name: "NodeJS ${NODEJS_VERSION}", type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Run the build command to generate the production build
                sh 'npm run build'
            }
        }

        stage('Upload to S3') {
            steps {
                script {
                    // Install AWS CLI if not already installed (optional, if not using AWS CLI plugin)
                    sh 'pip install awscli'

                    // Upload the build directory to the specified S3 bucket
                    sh """
                    aws s3 sync build/ s3://${S3_BUCKET_NAME}/ --region ${AWS_REGION} --acl public-read
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Build and upload to S3 successful.'
        }
        failure {
            echo 'Build or upload failed.'
        }
    }
}
