# Repository Upgrade Notes

## Due to Ember CLI version

* Update Ember CLI version in README.md file
* Follow directions in *Do these for all reasons* section

## Due to Addition or Removal of Helper or other

* Make any applicable changes to *Synchronous* section in README.md
* Make any applicable changes to *Asynchronous* section in README.md
* Make any applicable changes to *Utilities* section in README.md
* Apply applicable changes to */tests/.jshintrc* entries in */blueprints/sl-test-helpers/index.js*
* Apply applicable changes to */test-support/helpers/sl/register-test-helpers.js*
* Apply applicable changes to */test-support/helpers/sl/asynchronous.js*
* Apply applicable changes to */test-support/helpers/sl/synchronous.js*
* Follow directions in *Do these for all reasons* section

## Do these for all reasons

* Increment version number in *package.json*
* Update CHANGELOG.md

### After changes have been commited

* Tag new version

Do this via the use of Annotated Tags, as described in [http://git-scm.com/book/en/Git-Basics-Tagging](http://git-scm.com/book/en/Git-Basics-Tagging).  Tag names follow the format of "v<version>", where "v" is the literal character and "<version>" follows [Semantic Versioning[(http://semver.org/).  Be certain to also [Share the Tag](http://git-scm.com/book/en/Git-Basics-Tagging#Sharing-Tags) after created.
