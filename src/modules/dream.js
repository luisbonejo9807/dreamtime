// DreamTime.
// Copyright (C) DreamNet. All rights reserved.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License 3.0 as published by
// the Free Software Foundation. See <https://www.gnu.org/licenses/gpl-3.0.html>
//
// Written by Ivan Bravo Bravo <ivan@dreamnet.tech>, 2020.

/**
 * $dream.
 * Application information.
 */
export default {
  /**
   * App Name.
   * @type {string}
   */
  name: process.env.npm_package_displayName,

  /**
   * @type {string}
   */
  description: process.env.npm_package_description,

  /**
   * @type {string}
   */
  version: `v${process.env.npm_package_version}`,
}
