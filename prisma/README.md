# Prisma — design only (Phase 0)

This `prisma/` folder contains the **schema design** for the upcoming CMS
phases. It is intentionally not migrated yet.

## Status

- [x] Schema designed: User, Session, Role, Permission, RolePermission,
      UserRole, ContentType, Article, Tag, ArticleTag, Comment,
      ContactMessage, Setting.
- [ ] Prisma client installed.
- [ ] Migration generated.
- [ ] Seed script (default roles, permission matrix, tech-admin user).

## Phase 1 plan

```bash
npm install prisma @prisma/client
npx prisma init --datasource-provider sqlite # if .env not yet present
npx prisma migrate dev --name init
node prisma/seed.mjs
```

## Default roles (created in seed)

1. `tech_admin` — single user from `.env`, full access including system
   settings and other admins.
2. `admin` — full access to content, users, comments, contact messages.
   Cannot edit system settings.
3. `editor` — content + comments, no user management.
4. `user` — profile + comments only.

## Permission keys

Permissions are namespaced as `<group>.<action>`. Groups:

- `articles` — `read`, `create`, `update`, `delete`, `publish`, `pin`
- `users` — `read`, `create`, `update`, `delete`, `assignRole`
- `roles` — `read`, `create`, `update`, `delete`
- `comments` — `read`, `create`, `moderate`, `delete`
- `contact` — `read`, `delete`
- `settings` — `read`, `update`
- `analytics` — `read`

The middleware will check `permission` first (RBAC), not bare role names.
