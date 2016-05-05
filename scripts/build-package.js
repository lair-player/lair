'use strict'

const write = require('fs').writeFile
const packageJson = require('../package')

write('package.json', JSON.stringify(packageJson), err => { if (err) throw err })
