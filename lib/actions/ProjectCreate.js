'use strict';

/**
 * ProjectCreate
 */

// Defaults
const Base = require('../Jaws'),
    JawsError = require('../jaws-error'),
    JawsCLI = require('../utils/cli'),
    Promise = require('bluebird'),
    fs = require('fs'),
    path = require('path'),
    os = require('os'),
    AWSUtils = require('../utils/aws'),
    utils = require('../utils'),
    shortid = require('shortid');

Promise.promisifyAll(fs);

/**
 * Project Create
 */

class ProjectCreate extends Base {

  /**
   * Constructor
   */

  constructor() {
    super();

    // Prepare queue
    this._queue = [];
    this._queue = this._queue.concat(this.hooks.PreProjectCreate);
    this._queue.push(this.actions.ProjectCreate);
    this._queue = this._queue.concat(this.hooks.PostProjectCreate);
  }
}

module.exports = ProjectCreate;