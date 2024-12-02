#!/bin/bash

# Function to show usage
show_usage() {
    echo "Usage: ./db-migrate.sh [stage|prod] [dev|deploy] [migration_name]"
    echo ""
    echo "Arguments:"
    echo "  stage|prod        - Target database (staging or production)"
    echo "  dev|deploy       - Migration mode (dev for development, deploy for production)"
    echo "  migration_name   - Name of the migration (required for dev mode)"
    echo ""
    echo "Examples:"
    echo "  ./db-migrate.sh stage dev add_user_fields"
    echo "  ./db-migrate.sh prod deploy"
}

# Check if enough arguments are provided
if [ "$#" -lt 2 ]; then
    show_usage
    exit 1
fi

# Get environment variables
source .env

# Parse arguments
DB_ENV=$1
MIGRATION_MODE=$2
MIGRATION_NAME=$3

# Validate DB_ENV
if [ "$DB_ENV" != "stage" ] && [ "$DB_ENV" != "prod" ]; then
    echo "Error: First argument must be 'stage' or 'prod'"
    show_usage
    exit 1
fi

# Validate MIGRATION_MODE
if [ "$MIGRATION_MODE" != "dev" ] && [ "$MIGRATION_MODE" != "deploy" ]; then
    echo "Error: Second argument must be 'dev' or 'deploy'"
    show_usage
    exit 1
fi

# Check if migration name is provided for dev mode
if [ "$MIGRATION_MODE" = "dev" ] && [ -z "$MIGRATION_NAME" ]; then
    echo "Error: Migration name is required for dev mode"
    show_usage
    exit 1
fi

# Set the database URL based on environment
if [ "$DB_ENV" = "prod" ]; then
    export DATABASE_URL=$PROD_DATABASE_URL
    echo "Using production database"
else
    echo "Using staging database"
fi

# Run the migration
if [ "$MIGRATION_MODE" = "dev" ]; then
    echo "Running migration dev with name: $MIGRATION_NAME"
    npx prisma migrate dev --name "$MIGRATION_NAME"
else
    echo "Deploying migrations"
    npx prisma migrate deploy
fi
