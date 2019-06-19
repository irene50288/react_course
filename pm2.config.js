module.exports = {
 apps: [{
   name: 'Online Store',
   script: './build/server.js',
   cwd: '/projects/reactCourse/homework_2',
   instances: 2,
   exec_mode: 'cluster',
   env_production: {
     NODE_ENV: 'production',
     PORT: 9020
   }
 }],
  deploy: {
   production: {
     user: '',
     host: [],
     ref: 'origin/homework_9',
     repo: 'https://github.com/irene50288/react_course.git',
     path: '/projects/reactCourse',
     'post-deploy': 'yarn && yarn build:server && pm2 startOrRestart pm2.config.js --env production'
   }
  }
}