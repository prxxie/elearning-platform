FROM node:16 AS development

WORKDIR /src
# RUN npm config set registry http://registry.npmjs.org/ --global

RUN yarn global add @nestjs/cli

COPY package*.json ./
RUN yarn install --production=false

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:debug", "elearning"]

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src

COPY --from=development /src/node_modules ./node_modules
COPY --from=development /src/dist ./dist

CMD ["node", "dist/apps/elearning/main.js"]