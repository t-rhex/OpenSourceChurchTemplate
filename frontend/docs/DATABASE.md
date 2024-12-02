# Database Management Documentation

## Overview
This project uses Prisma as the ORM (Object-Relational Mapping) tool with PostgreSQL databases. We maintain two separate databases:
- **Staging Database**: For development and testing
- **Production Database**: For live production environment

## Database Configuration

### Environment Variables
The database connections are configured through environment variables in the `.env` file:

```env
# Staging Database
DATABASE_URL="postgres://[username]:[password]@[host]:[port]/oschurchstage"

# Production Database
PROD_DATABASE_URL="postgres://[username]:[password]@[host]:[port]/oschurchprod"
```

### Schema Location
The database schema is defined in `prisma/schema.prisma`. This file contains:
- Model definitions
- Relationships
- Field types and constraints
- Database connection configuration

## Database Migration Tool

We provide a custom migration script (`scripts/db-migrate.sh`) to manage database migrations across environments.

### Usage

```bash
./scripts/db-migrate.sh [stage|prod] [dev|deploy] [migration_name]
```

#### Arguments
- `stage|prod`: Target database environment
- `dev|deploy`: Migration mode
  - `dev`: For development (creates new migration)
  - `deploy`: For applying existing migrations
- `migration_name`: Name of the migration (required for dev mode)

#### Examples

1. Create a new migration in staging:
```bash
./scripts/db-migrate.sh stage dev add_user_fields
```

2. Deploy migrations to production:
```bash
./scripts/db-migrate.sh prod deploy
```

## Migration Workflow

### 1. Development Process

a. Make changes to schema:
```prisma
// prisma/schema.prisma
model User {
  id    String  @id @default(cuid())
  email String  @unique
  // Add new fields here
}
```

b. Create and apply migration to staging:
```bash
./scripts/db-migrate.sh stage dev your_migration_name
```

c. Test changes thoroughly in staging environment

### 2. Production Deployment

a. Review migration files in `prisma/migrations`

b. Deploy to production:
```bash
./scripts/db-migrate.sh prod deploy
```

## Best Practices

### 1. Schema Management
- Keep schema changes in version control
- Use meaningful names for migrations
- Document complex schema changes
- Add comments for non-obvious relationships or constraints

### 2. Migration Safety
- Never modify existing migrations that have been applied
- Always test migrations in staging first
- Back up production database before major migrations
- Review auto-generated migration SQL before applying

### 3. Development Workflow
- One migration per feature/change
- Use descriptive migration names
- Test both up and down migrations
- Verify data integrity after migrations

## Common Tasks

### Adding a New Field
1. Add the field to `schema.prisma`
2. Create migration:
```bash
./scripts/db-migrate.sh stage dev add_field_name
```
3. Test in staging
4. Deploy to production

### Modifying an Existing Field
1. Update the field in `schema.prisma`
2. Create migration:
```bash
./scripts/db-migrate.sh stage dev update_field_name
```
3. Test in staging
4. Deploy to production

### Adding a New Model
1. Add the model to `schema.prisma`
2. Create migration:
```bash
./scripts/db-migrate.sh stage dev add_model_name
```
3. Test in staging
4. Deploy to production

## Troubleshooting

### Common Issues

1. **Migration Failed**
   - Check migration files for errors
   - Verify database connections
   - Review error messages in console

2. **Prisma Client Generation Failed**
   - Run `npx prisma generate`
   - Verify schema syntax
   - Check for circular dependencies

3. **Database Connection Issues**
   - Verify environment variables
   - Check network connectivity
   - Confirm database credentials

### Recovery Steps

1. **Failed Migration**
```bash
# Reset staging database
npx prisma migrate reset

# Recreate migration
./scripts/db-migrate.sh stage dev migration_name
```

2. **Production Issues**
- Restore from backup if available
- Contact database administrator
- Review logs for error details

## Maintenance

### Regular Tasks
1. Review and clean up unused migrations
2. Monitor database size and performance
3. Update Prisma dependencies regularly
4. Back up databases periodically

### Schema Documentation
Keep this documentation updated when making significant schema changes:
1. Add new models to this document
2. Document complex relationships
3. Update troubleshooting section with new solutions

## Support

For issues with:
- Database migrations: Check Prisma docs (https://www.prisma.io/docs)
- Schema design: Review Prisma schema reference
- Custom script: Review script source code in `scripts/db-migrate.sh`
