### run backend server with : ['npm run dev'](command)
### run frontend react server with : ['npm start'](command)
### run eslint in /react with : ['npx eslint src/'](command) make sure to be in the right directory
### run eslint in /express with : ['npx eslint .'](command) make sure to be in the right directory

next development, ci/cd pipeline using github action
possibly to vercel? but to vercel is automated xd



### as of 21 Jan 2pm
just figured something wrong with axios, it cant be processed by jester
after this, continue cicd pipeline. do the following 
0. satisfy eslint
1. configure eslint for dev repo on push/merge
2. update jest testing to test api node express on dev
3. proceed with playwright e2e testing

yo does vercel connect with branch or repo? if branch, then we good to connect it to the prod branch.


