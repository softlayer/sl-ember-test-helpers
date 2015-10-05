# Repository Release Instructions

This document captures the steps a project maintainer should follow when releasing a new version of this Addon.

## Steps to follow if there is an addition or removal of Helper or Utility

* Make any applicable changes to *Synchronous* section in README.md
* Make any applicable changes to *Asynchronous* section in README.md
* Make any applicable changes to *Utilities* section in README.md
* Apply applicable changes to */tests/.jshintrc* entries in */blueprints/sl-ember-test-helpers/index.js*
* Apply applicable changes to */test-support/helpers/sl/register-test-helpers.js*
* Apply applicable changes to */test-support/helpers/sl/asynchronous.js*
* Apply applicable changes to */test-support/helpers/sl/synchronous.js*


## Steps to follow for every release

* Merge all desired pull requests into `master` branch
* If change is due to upgrading Ember CLI version
    * Update Ember CLI version text in README.md file
* Update CHANGELOG.md
    * Prefix the entries with one of the following tags inside brackets:
        * BUGFIX
            * A link to a bug and a link to a patch.
        * FEATURE or ENHANCEMENT
            * Are for things that users are interested in. Avoid super technical talk. Craft a concise description of the change.
        * INTERNAL
            * An internal log of changes.
    * If a change requires a user to change their configuration, *bower.json*, *package.json*, or *Brocfile.js* also add a BREAKING tag within the brackets before any other tags (example [BREAKING BUGFIX])
    * Following the pattern of the existing entries for guidance
    * Add appropriately linked "View complete changeset" link at bottom of entries
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url
* Copy the content of the additions made to the CHANGELOG.md file to the Release Notes of the just-released tag
* Run `ember build`
* Run `npm run docs`
* Copy the following resources outside of the working directory so they can be retained between switching branches:
    * */docs*
    * */dist/index.html*
    * */dist/assets/dummy.css*
    * */dist/assets/dummy.js*
    * */dist/assets/vendor.css*
    * */dist/assets/vendor.js*
* Switch to the `gh-pages` branch
* Replace the same resources listed above with their copies, but one folder level higher
* Within the *index.html* file, replace the following href values:
    * `favicon.png` with `sl-ember-test-helpers/favicon.png`
    * `assets/vendor.css` with `sl-ember-test-helpers/assets/vendor.css`
    * `assets/dummy.css` with `sl-ember-test-helpers/assets/dummy.css`
    * `assets/vendor.js` with `sl-ember-test-helpers/assets/vendor.js`
    * `assets/dummy.js` with `sl-ember-test-helpers/assets/dummy.js`
* Also within the *index.html* file, in the `<meta name="dummy/config/environment"...` tag, replace the `locationType` value from `auto` to `hash`
* Also within the *index.html* file, in the `<meta name="dummy/config/environment"...` tag, replace the `baseUrl` value from `/` to `/sl-ember-test-helpers`
* Commit and push the changes