module.exports = {
  apps : [{
    name: 'arduino-data',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {},
    staging: {
      user: 'norellanac',
      host: '192.168.1.126',
      ref: 'origin/reactJS-Redux-apiMongo-express',
      repo: 'git@github.com:naorellana/https://github.com/naorellana/reactJS-Redux-apiMongo-express.git',
      path: '/home/norellanac/Documentos/javascript/reactJs/blog-platzi-curso',
      key: '/absolute/path/to/key',
      ssh_options: ['ForwardAgent=yes'],
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {}
  }
};
