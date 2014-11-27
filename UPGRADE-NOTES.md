# Repository Upgrade Notes

## Due to Ember CLI version

* Update Ember CLI version in README.md file
* Follow steps in *"Do these for all reasons"* section

## Due to Addition or Removal of Helper or other

* Make any applicable changes to *Synchronous* section in README.md
* Make any applicable changes to *Asynchronous* section in README.md
* Make any applicable changes to *Utilities* section in README.md
* Apply applicable changes to */tests/.jshintrc* entries in */blueprints/sl-ember-test-helpers/index.js*
* Apply applicable changes to */test-support/helpers/sl/register-test-helpers.js*
* Apply applicable changes to */test-support/helpers/sl/asynchronous.js*
* Apply applicable changes to */test-support/helpers/sl/synchronous.js*
* Follow steps in *"Do these for all reasons"* section

## Do these for all reasons

* Update CHANGELOG.md
* After changes have been committed:
    * `npm version x.x.x`, where *x.x.x* is the Semantic Version of the changeset
    * `git push origin master`
    * `git push origin --tags`
    * `npm publish --registry http://registry.npmjs.org/`
        * Note: `--registry` flag is workaround for occasional issues with default SSL url