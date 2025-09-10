danylmnas
=================

my own clif 


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/danylmnas.svg)](https://npmjs.org/package/danylmnas)
[![Downloads/week](https://img.shields.io/npm/dw/danylmnas.svg)](https://npmjs.org/package/danylmnas)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g danylmnas
$ danylmnas COMMAND
running command...
$ danylmnas (--version)
danylmnas/0.0.0 linux-x64 node-v20.19.4
$ danylmnas --help [COMMAND]
USAGE
  $ danylmnas COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`danylmnas hello PERSON`](#danylmnas-hello-person)
* [`danylmnas hello world`](#danylmnas-hello-world)
* [`danylmnas help [COMMAND]`](#danylmnas-help-command)
* [`danylmnas plugins`](#danylmnas-plugins)
* [`danylmnas plugins add PLUGIN`](#danylmnas-plugins-add-plugin)
* [`danylmnas plugins:inspect PLUGIN...`](#danylmnas-pluginsinspect-plugin)
* [`danylmnas plugins install PLUGIN`](#danylmnas-plugins-install-plugin)
* [`danylmnas plugins link PATH`](#danylmnas-plugins-link-path)
* [`danylmnas plugins remove [PLUGIN]`](#danylmnas-plugins-remove-plugin)
* [`danylmnas plugins reset`](#danylmnas-plugins-reset)
* [`danylmnas plugins uninstall [PLUGIN]`](#danylmnas-plugins-uninstall-plugin)
* [`danylmnas plugins unlink [PLUGIN]`](#danylmnas-plugins-unlink-plugin)
* [`danylmnas plugins update`](#danylmnas-plugins-update)

## `danylmnas hello PERSON`

Say hello

```
USAGE
  $ danylmnas hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ danylmnas hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Dany-LMNAS/danylmnas/blob/v0.0.0/src/commands/hello/index.ts)_

## `danylmnas hello world`

Say hello world

```
USAGE
  $ danylmnas hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ danylmnas hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Dany-LMNAS/danylmnas/blob/v0.0.0/src/commands/hello/world.ts)_

## `danylmnas help [COMMAND]`

Display help for danylmnas.

```
USAGE
  $ danylmnas help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for danylmnas.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `danylmnas plugins`

List installed plugins.

```
USAGE
  $ danylmnas plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ danylmnas plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `danylmnas plugins add PLUGIN`

Installs a plugin into danylmnas.

```
USAGE
  $ danylmnas plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into danylmnas.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DANYLMNAS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DANYLMNAS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ danylmnas plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ danylmnas plugins add myplugin

  Install a plugin from a github url.

    $ danylmnas plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ danylmnas plugins add someuser/someplugin
```

## `danylmnas plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ danylmnas plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ danylmnas plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `danylmnas plugins install PLUGIN`

Installs a plugin into danylmnas.

```
USAGE
  $ danylmnas plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into danylmnas.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DANYLMNAS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DANYLMNAS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ danylmnas plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ danylmnas plugins install myplugin

  Install a plugin from a github url.

    $ danylmnas plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ danylmnas plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `danylmnas plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ danylmnas plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ danylmnas plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `danylmnas plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ danylmnas plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ danylmnas plugins unlink
  $ danylmnas plugins remove

EXAMPLES
  $ danylmnas plugins remove myplugin
```

## `danylmnas plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ danylmnas plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `danylmnas plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ danylmnas plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ danylmnas plugins unlink
  $ danylmnas plugins remove

EXAMPLES
  $ danylmnas plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `danylmnas plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ danylmnas plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ danylmnas plugins unlink
  $ danylmnas plugins remove

EXAMPLES
  $ danylmnas plugins unlink myplugin
```

## `danylmnas plugins update`

Update installed plugins.

```
USAGE
  $ danylmnas plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->
