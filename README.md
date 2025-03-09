This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, to setup the project you need to have node version 16, 18, or 20:

```bash
yarn install
```

After succesfully install you can run this on your local

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is the project architecture.

```
react_task_management/
├── src/
│   ├── app/          # Contains routing and view management, handles permissions and authentication
│   ├── components/   # Modular components used within views
│   ├── context/      # Contexts used throughout the project
│   ├── model/        # Data models and types
│   ├── reducer/      # Reducer functions
│   ├── utils/        # Reusable functions and types
│   ├── view/         # UI files structuring the elements and components
```