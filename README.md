# rest-ts
RESTful API in typescript and nodejs 
# Dependencies :
## ➜ prod dependencies
```cmd
 npm i express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
```

## ➜ dev dependencies 
```cmd
 npm i --dev @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript
```

## ➜ once u installed the deps, execute this command to generate tsconfig file 
```cmd
npx tsc --init
```

## ➜ to work with prisma 
install dev dependencies 
```cmd
npm i prisma --save-dev
```

install prod dependencies 
```cmd
npm i @prisma/client
```

then initialize the prisma schema
```shell
npx prisma init 
```

to create a new migration 
```shell
npx prisma migrate dev --name MIGRATION_NAME
```

to edit the field attribute ➜ use one @
```prisma
model User {
    id Int @id
    email String @unique
}
```

to edit the model attribute ➜ use two @@
```prisma
model User {
    id Int @id @default(autoincrement())
    email String @unique @map("user_email") // to change the name of the column
}
@@map("users") // this will change the name of the table in the physical database
```

to run prisma studio 
```shell 
npx prisma studio
```

to create a composite key 
```prisma 
model User {
    username String 
    email String 
    @@Id([email, username])    
}
```

to create an index 
```prisma 
model User {
    username String 
    email String 
    @@index([username])
}
```

to support a null value to a field 
```prisma
model User {
    username String?
}
```

to use enums 
```prisma
enum Role {
    USER 
    ADMIN
}

model User {
    role Role? @default(USER) // to make it optional use ? and to set to it a default value of USER use @default()
}
```

# Relationships in prisma 
the system specs : 
- User can has one profile and profile belongs to one user
- User can make many posts and post belongs to one user 
- a post can be of multiple categories and a category can hold many posts under its type 

## one-to-one 
- model it by putting the PK of one of them as a FK into the other one
```prisma
model user {
    id Int @id @default(@autoincrement())
    username String
    email String @unique
    profile Profile? // thi smust be an optional
}

model Profile {
    id Int @id @default(autoincrement())
    imageUrl String
    userId Int @unique 
    // field within my model
    // field witin the other table othat my field will reference to 
    user User @relation( fields: [userId], references: [id])
}
```