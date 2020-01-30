# nomad_instaclone-backend

Instagram clone with Express + Prisam

## User Stories

- [x] Create account
- [x] Request secret
- [x] Confirm secret (Signin)
- [x] Like / Unlike a post
- [x] Comment on a post
- [x] Search by user
- [x] Search by location
- [x] Follow user
- [x] Unfollow user
- [x] Edit my profile
- [x] See user profile
- [x] See my profile
- [x] See the full post
- [x] Upload a post
- [x] Edit / Delete the post
- [x] See the feed
- [ ] See rooms
- [ ] See room
- [ ] Send private message
- [ ] Receive message (Realtime)

## Environment files

### .env

- PORT (optional): port number of GraphQL Server / Playground
- SENDGRID_API_KEY (required): SENDGRID API Key
- JWT_SECRET (required): Passport JWT secret key

#### Example .env file

```
PORT=4000
SENDGRID_API_KEY={ YOUR_SENDRID_API_KEY }
JWT_SECRET={ ANY_KEY }
```
