'use strict'

const write = require('fs').writeFile
const package = require('../package')

write('package.json', JSON.stringify(package), err => { if (err) throw err })
