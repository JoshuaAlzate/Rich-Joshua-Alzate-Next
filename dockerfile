FROM node:lts as dependencies
WORKDIR /rja-portfolio
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /rja-portfolio
COPY . .
COPY --from=dependencies /rja-portfolio/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /rja-portfolio
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /rja-portfolio/next.config.js ./
COPY --from=builder /rja-portfolio/public ./public
COPY --from=builder /rja-portfolio/.next ./.next
COPY --from=builder /rja-portfolio/node_modules ./node_modules
COPY --from=builder /rja-portfolio/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]