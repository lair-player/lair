'use strict'

// meta ------------------------------------------------------------------------

const name = 'lair'
const version = '0.0.1'
const author = 'Jacob Blakely (codekirei)'
const license = 'MIT'

// links -----------------------------------------------------------------------

const homepage = 'https://github.com/lair-player/lair#readme'
const bugs = {
  url: 'https://github.com/lair-player/lair/issues'
}
const repository = {
  type: 'git',
  url: 'git+https://github.com/lair-player/lair.git'
}

// scripts ---------------------------------------------------------------------

const scripts = {

  // build ---------------------------------------------------------------------

  'build:package': 'node scripts/build-package.js',

  // clean ---------------------------------------------------------------------

  // lint ----------------------------------------------------------------------

  // serve ---------------------------------------------------------------------

  // test ----------------------------------------------------------------------

}

// deps ------------------------------------------------------------------------

const dependencies = {
}

const devDependencies = {
}

module.exports = {
  name,
  version,
  private: true,
  author,
  license,
  repository,
  bugs,
  homepage,
  scripts,
  dependencies,
  devDependencies
}
