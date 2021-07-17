const node_ssh = require('node-ssh');
const fs = require('fs')
const ssh = new node_ssh();

const config = {
  host: '84.201.189.251',
  username: 'tixomirov95',
  agent: process.env.SSH_AUTH_SOCK,
  privateKey: path.normalize(`${__dirname}/../private-keys/web/private/privatekey.ppk`),
  passphrase: '41514151'
}

async function run() {

  const connect = await ssh.connect(config)

  console.log('Зашли')

  //su падает, чтобы сделать npm i нужно зайти на машину
  /*const sudosu = await ssh.execCommand('sudo su -')
  console.log('command sudo su', sudosu)*/

  //Основной сайт

  const gitPullCommand = await ssh.execCommand('sudo git pull', { cwd: '/opt/web/' })
  console.log('git pull', gitPullCommand)

  const gitPullSubmodulesCommang = await ssh.execCommand('sudo git pull --recurse-submodules', { cwd: '/opt/web/' })
  console.log('git pull --recurse-submodules', gitPullSubmodulesCommang)

  const gitPullCoreCommand = await ssh.execCommand('sudo git pull', { cwd: '/opt/web/src/core' })
  console.log('git pull core', gitPullCoreCommand)

  /*
  //Нужны права sudo su -, на каком-то лоадере падает без них
  const npmi = await ssh.execCommand('npm i', { cwd: '/opt/web' })
  console.log('npm i', npmi)*/

  console.log('sudo npm run build start')
  console.log('Очень долго собирает и иногда падает, пока не выяснил в чем дело')
  const build = await ssh.execCommand('sudo npm run build', { cwd: '/opt/web' })
  console.log('command npm run build', build)

  //Вк апп

  const gitPullVkappCommand = await ssh.execCommand('sudo git pull', { cwd: '/opt/vkapp/' })
  console.log('git pull Vkapp', gitPullVkappCommand)

  const gitPullSubmodulesVkappCommang = await ssh.execCommand('sudo git pull --recurse-submodules', { cwd: '/opt/vkapp/' })
  console.log('git pull --recurse-submodules Vkapp', gitPullSubmodulesVkappCommang)

  const gitPullCoreVkappCommand = await ssh.execCommand('sudo git pull', { cwd: '/opt/vkapp/src/core' })
  console.log('git pull core Vkapp', gitPullCoreVkappCommand)

  console.log('sudo npm run build start Vkapp')
  console.log('Очень долго собирает и иногда падает, пока не выяснил в чем дело')
  const buildVkapp = await ssh.execCommand('sudo npm run build', { cwd: '/opt/vkapp' })
  console.log('command npm run build Vkapp', buildVkapp)

  //Запуск сервера

  const pm2Stop = await ssh.execCommand('sudo pm2 stop server', { cwd: '/opt/web' })
  console.log('command pm2 stop app', pm2Stop)

  //Есть воч но почему-то не работает
  const pm2Start = await ssh.execCommand('sudo pm2 start ./server/server.js', { cwd: '/opt/web' })
  console.log('command pm2 start ./dist/deploy.js', pm2Start)

  process.exit()
}

try {
  run();
}
catch (error) {
  console.log('Ошибка, наверное нужно перезагрузить вм в облаке', error)
}