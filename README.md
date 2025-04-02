# Personal VS Code Configuration

This repository contains my personal VS Code configurations. These settings are tailored for a minimalist, distraction-free coding environment with Vim keybindings and a customized Catppuccin theme.

![UI](https://i.ibb.co/HD9FLm8B/Screenshot-2025-04-02-at-4-55-16-AM.png)

## Installation

1. Install all required extensions listed above
2. Copy the settings from `settings.json` to your VS Code settings
3. Create the custom CSS/JS files 
4. Reload VS Code to apply changes

## Required Extensions

To fully utilize these configurations, you'll need to install the following extensions:

1. [Catppuccin for VSCode](https://github.com/catppuccin/vscode) - Main theme
2. [Catppuccin Icons](https://github.com/catppuccin/vscode-icons) - File icons
3. [Alt Catppuccin](https://github.com/Dooez/alt-catppuccin-vscode) - Alternative Catppuccin theme
4. [Path Intellisense](https://github.com/ChristianKohler/PathIntellisense) - Autocomplete filenames
5. [Advanced New File](https://github.com/patbenatar/vscode-advanced-new-file) - Better file creation
6. [File Browser](https://github.com/bodil/vscode-file-browser) - Enhanced file navigation
7. [Custom CSS and JS](https://github.com/be5invis/vscode-custom-css) - Custom styling

## Font
- [Fira Code](https://github.com/tonsky/FiraCode)

## Extension-specific Settings

Here are the relevant settings from `settings.json` for each extension:

### Catppuccin Theme

```json
"workbench.colorTheme": "Alt Catppuccin Mocha",
"workbench.iconTheme": "catppuccin-latte",
"catppuccin.accentColor": "pink",
"catppuccin.workbenchMode": "default",
"catppuccin.colorOverrides": {
    "mocha": {
    "base": "#000000",
    "mantle": "#010101",
    "crust": "#020202",
    },
},
"catppuccin.customUIColors": {
    "mocha": {
        "statusBar.foreground": "mauve",
        "breadcrumb.background": "accent",
        "breadcrumb.foreground": "crust",
        "minimap.background": "rosewater 0.2",
    },
    "all": {
        "breadcrumb.background": "overlay0",
        "breadcrumb.foreground": "text",
    },
},
"catppuccin.bracketMode": "monochromatic",
```

### Alt Catppuccin

```json
"alt-catppuccin.syntaxMode": "monokai",
```

### Advanced New File

```json
"advancedNewFile.exclude": {
    "node_modules": true,
    "node_modules_electron": true,
    "dev": true,
    "dist": true
},
"advancedNewFile.showInformationMessages": true,
"advancedNewFile.convenienceOptions": [
    "last",
    "current",
    "root"
]
```

### Custom CSS and JS

```json
"vscode_custom_css.imports": [
    "file:///path/to/your/custom.css",
    "file:///path/to/your/custom.js"
]
```

## Other Notable Features

- Vim key bindings with customized leader keys
- Minimalist UI with hidden activity bar and single tab mode
- Distraction-free scrolling with hidden scrollbars
- Dark theme with pink accents
- Relative line numbers for easier Vim navigation
