import { LanguageIcon } from '../models';

/**
 * Defines icons for language ids
 */
export const languageIcons: LanguageIcon[] = [
  { icon: { name: 'git' }, ids: ['git', 'git-commit', 'git-rebase', 'ignore'] },
  { icon: { name: 'yaml' }, ids: ['yaml'] },
  { icon: { name: 'xml' }, ids: ['xml', 'xquery', 'xsl'] },
  { icon: { name: 'matlab' }, ids: ['matlab'] },
  {
    icon: { name: 'settings' },
    ids: ['makefile', 'toml', 'ini', 'properties'],
  },
  { icon: { name: 'shaderlab' }, ids: ['shaderlab'] },
  { icon: { name: 'diff' }, ids: ['diff'] },
  { icon: { name: 'json' }, ids: ['json', 'jsonc', 'json5'] },
  { icon: { name: 'blink' }, ids: ['blink'] },
  { icon: { name: 'java' }, ids: ['java'] },
  { icon: { name: 'razor' }, ids: ['razor', 'aspnetcorerazor'] },
  { icon: { name: 'python' }, ids: ['python'] },
  { icon: { name: 'mojo' }, ids: ['mojo'] },
  { icon: { name: 'javascript' }, ids: ['javascript'] },
  { icon: { name: 'typescript' }, ids: ['typescript'] },
  { icon: { name: 'scala' }, ids: ['scala'] },
  { icon: { name: 'handlebars' }, ids: ['handlebars'] },
  { icon: { name: 'perl' }, ids: ['perl', 'perl6'] },
  { icon: { name: 'haxe' }, ids: ['haxe', 'hxml'] },
  { icon: { name: 'puppet' }, ids: ['puppet'] },
  { icon: { name: 'elixir' }, ids: ['elixir'] },
  { icon: { name: 'livescript' }, ids: ['livescript'] },
  { icon: { name: 'erlang' }, ids: ['erlang'] },
  { icon: { name: 'twig' }, ids: ['twig'] },
  { icon: { name: 'julia' }, ids: ['julia'] },
  { icon: { name: 'elm' }, ids: ['elm'] },
  { icon: { name: 'purescript' }, ids: ['purescript'] },
  { icon: { name: 'stylus' }, ids: ['stylus'] },
  { icon: { name: 'nunjucks' }, ids: ['nunjucks'] },
  { icon: { name: 'pug' }, ids: ['pug'] },
  { icon: { name: 'robot' }, ids: ['robotframework'] },
  { icon: { name: 'sass' }, ids: ['sass', 'scss'] },
  { icon: { name: 'less' }, ids: ['less'] },
  { icon: { name: 'css' }, ids: ['css'] },
  { icon: { name: 'visualstudio' }, ids: ['testOutput', 'vb'] },
  { icon: { name: 'angular' }, ids: ['ng-template'] },
  { icon: { name: 'graphql' }, ids: ['graphql'] },
  { icon: { name: 'solidity' }, ids: ['solidity'] },
  { icon: { name: 'autoit' }, ids: ['autoit'] },
  { icon: { name: 'haml' }, ids: ['haml'] },
  { icon: { name: 'yang' }, ids: ['yang'] },
  { icon: { name: 'terraform' }, ids: ['terraform'] },
  { icon: { name: 'applescript' }, ids: ['applescript'] },
  { icon: { name: 'cake' }, ids: ['cake'] },
  { icon: { name: 'cucumber' }, ids: ['cucumber'] },
  { icon: { name: 'nim' }, ids: ['nim', 'nimble'] },
  { icon: { name: 'apiblueprint' }, ids: ['apiblueprint'] },
  { icon: { name: 'riot' }, ids: ['riot'] },
  { icon: { name: 'postcss' }, ids: ['postcss'] },
  { icon: { name: 'coldfusion' }, ids: ['lang-cfml'] },
  { icon: { name: 'haskell' }, ids: ['haskell'] },
  { icon: { name: 'dhall' }, ids: ['dhall'] },
  { icon: { name: 'cabal' }, ids: ['cabal'] },
  { icon: { name: 'nix' }, ids: ['nix'] },
  { icon: { name: 'ruby' }, ids: ['ruby'] },
  { icon: { name: 'slim' }, ids: ['slim'] },
  { icon: { name: 'php' }, ids: ['php'] },
  { icon: { name: 'php_elephant' }, ids: [] },
  { icon: { name: 'php_elephant_pink' }, ids: [] },
  { icon: { name: 'hack' }, ids: ['hack'] },
  { icon: { name: 'react' }, ids: ['javascriptreact'] },
  { icon: { name: 'mjml' }, ids: ['mjml'] },
  { icon: { name: 'processing' }, ids: ['processing'] },
  { icon: { name: 'hcl' }, ids: ['hcl'] },
  { icon: { name: 'go' }, ids: ['go'] },
  { icon: { name: 'go_gopher' }, ids: [] },
  { icon: { name: 'nodejs_alt' }, ids: [] },
  { icon: { name: 'django' }, ids: ['django-html', 'django-txt'] },
  { icon: { name: 'html' }, ids: ['html'] },
  { icon: { name: 'godot' }, ids: ['gdscript'] },
  { icon: { name: 'godot-assets' }, ids: ['gdresource', 'gdshader'] },
  { icon: { name: 'vim' }, ids: ['viml'] },
  { icon: { name: 'silverstripe' }, ids: [] },
  { icon: { name: 'prolog' }, ids: ['prolog'] },
  { icon: { name: 'pawn' }, ids: ['pawn'] },
  { icon: { name: 'reason' }, ids: ['reason', 'reason_lisp'] },
  { icon: { name: 'sml' }, ids: ['sml'] },
  { icon: { name: 'tex' }, ids: ['tex', 'doctex', 'latex', 'latex-expl3'] },
  { icon: { name: 'salesforce' }, ids: ['apex'] },
  { icon: { name: 'sas' }, ids: ['sas'] },
  { icon: { name: 'docker' }, ids: ['dockerfile', 'dockercompose'] },
  { icon: { name: 'table' }, ids: ['csv', 'tsv', 'psv'] },
  { icon: { name: 'csharp' }, ids: ['csharp'] },
  { icon: { name: 'console' }, ids: ['bat', 'awk', 'shellscript'] },
  { icon: { name: 'c' }, ids: ['c'] },
  { icon: { name: 'cpp' }, ids: ['cpp'] },
  { icon: { name: 'objective-c' }, ids: ['objective-c'] },
  { icon: { name: 'objective-cpp' }, ids: ['objective-cpp'] },
  { icon: { name: 'coffee' }, ids: ['coffeescript'] },
  { icon: { name: 'fsharp' }, ids: ['fsharp'] },
  { icon: { name: 'editorconfig' }, ids: ['editorconfig'] },
  { icon: { name: 'clojure' }, ids: ['clojure'] },
  { icon: { name: 'groovy' }, ids: ['groovy'] },
  { icon: { name: 'markdown' }, ids: ['markdown'] },
  { icon: { name: 'jinja' }, ids: ['jinja'] },
  { icon: { name: 'proto' }, ids: ['proto'] },
  { icon: { name: 'python-misc' }, ids: ['pip-requirements'] },
  { icon: { name: 'vue' }, ids: ['vue', 'vue-postcss', 'vue-html'] },
  { icon: { name: 'lua' }, ids: ['lua'] },
  { icon: { name: 'lib' }, ids: ['bibtex', 'bibtex-style'] },
  { icon: { name: 'log' }, ids: ['log'] },
  { icon: { name: 'jupyter' }, ids: ['jupyter'] },
  { icon: { name: 'document' }, ids: ['plaintext'] },
  { icon: { name: 'pdf' }, ids: ['pdf'] },
  { icon: { name: 'powershell' }, ids: ['powershell'] },
  { icon: { name: 'pug' }, ids: ['jade'] },
  { icon: { name: 'r' }, ids: ['r', 'rsweave'] },
  { icon: { name: 'rust' }, ids: ['rust'] },
  { icon: { name: 'database' }, ids: ['sql'] },
  { icon: { name: 'kusto' }, ids: ['kql'] },
  { icon: { name: 'lock' }, ids: ['ssh_config'] },
  { icon: { name: 'svg' }, ids: ['svg'] },
  { icon: { name: 'swift' }, ids: ['swift'] },
  { icon: { name: 'react_ts' }, ids: ['typescriptreact'] },
  { icon: { name: 'search' }, ids: ['search-result'] },
  { icon: { name: 'minecraft' }, ids: ['mcfunction'] },
  { icon: { name: 'rescript' }, ids: ['rescript'] },
  { icon: { name: 'otne' }, ids: ['otne'] },
  {
    icon: { name: 'twine' },
    ids: ['twee3', 'twee3-harlowe-3', 'twee3-chapbook-1', 'twee3-sugarcube-2'],
  },
  { icon: { name: 'grain' }, ids: ['grain'] },
  { icon: { name: 'lolcode' }, ids: ['lolcode'] },
  { icon: { name: 'idris' }, ids: ['idris'] },
  { icon: { name: 'chess' }, ids: ['pgn'] },
  { icon: { name: 'gemini' }, ids: ['gemini', 'text-gemini'] },
  { icon: { name: 'vlang' }, ids: ['v'] },
  { icon: { name: 'wolframlanguage' }, ids: ['wolfram'] },
  { icon: { name: 'shader' }, ids: ['hlsl', 'glsl', 'wgsl'] },
  { icon: { name: 'tree' }, ids: ['tree'] },
  { icon: { name: 'svelte' }, ids: ['svelte'] },
  { icon: { name: 'dart' }, ids: ['dart'] },
  { icon: { name: 'cadence' }, ids: ['cadence'] },
  { icon: { name: 'stylable' }, ids: ['stylable'] },
];
