This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Deploy on Docker
- Create Image with image
```
 docker build -t name-image .
```
- Create and Run Container with the target port of my image and the previues image name
```
 docker run --name=next-app-container -p 3000:3000 nextjs-initial
```




