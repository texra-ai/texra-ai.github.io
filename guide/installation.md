# Installation Guide

This guide will walk you through the process of installing TeXRA and all its dependencies to ensure optimal performance.

## System Requirements

TeXRA is designed to work on all major operating systems with the following minimum requirements:

- **Visual Studio Code**: Version 1.99 or newer
- **Operating System**: Windows, macOS, or Linux
- **Internet Connection**: Required for API access to language models

## Installing the Extension

### From Extension Marketplaces

The easiest way to install TeXRA is directly from an extension marketplace:

1.  Open VS Code or your VSCodium-compatible editor.
2.  Go to the Extensions view (click the square icon in the Activity Bar or press `Ctrl+Shift+X`).
3.  Search for "TeXRA".
4.  Find the extension published by "texra-ai".
5.  Click the "Install" button.
6.  Reload your editor if prompted.

TeXRA is available on both the official VS Code Marketplace and the Open VSX Registry:

<a href="https://marketplace.visualstudio.com/items?itemName=texra-ai.texra" target="_blank" style="display: inline-block; background-color: #007ACC; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 10px 5px 10px 0;">View on VS Code Marketplace</a>
<a href="https://open-vsx.org/extension/texra-ai/texra" target="_blank" style="display: inline-block; background-color: #4D5D99; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; margin: 10px 0 10px 5px;">View on Open VSX</a>

### From VSIX File

1. Open VS Code
2. Obtain the newest release (`.vsix` file, e.g., `texra-0.28.0.vsix`)
3. Find the `.vsix` file in the VS Code file explorer
4. Right-click on the `.vsix` file
5. From the context menu, select "Install Extension VSIX"

## Installing Required Dependencies

Now for the slightly less fun part – making sure TeXRA has all the tools it needs to work its magic. TeXRA relies on several external tools to function properly. Follow the instructions for your operating system.

### LaTeX Distribution

::: tip IMPORTANT
A LaTeX distribution is required for TeXRA to properly process LaTeX documents.
:::

#### Windows

Install either:

- **MiKTeX**: Download and install from [miktex.org](https://miktex.org/download)
- **TeX Live**: Download and install from [tug.org/texlive/windows.html](https://tug.org/texlive/windows.html)

#### macOS

Install MacTeX:

- Download from [tug.org/mactex/mactex-download.html](https://www.tug.org/mactex/mactex-download.html)
- Or use Homebrew: `brew install --cask mactex`

#### Linux (Ubuntu/Debian)

Install TeX Live:

```bash
sudo apt-get update
sudo apt-get install texlive-full
```

### Perl

::: info
Perl is required for LaTeX tools and document processing.
:::

#### Windows

- Included with MiKTeX or TeX Live
- Verify installation by running `perl --version` in Command Prompt

#### macOS

- Pre-installed
- Verify with `perl --version` in Terminal

#### Linux

```bash
sudo apt-get install perl
```

### GraphicsMagick/ImageMagick

::: tip RECOMMENDED
GraphicsMagick is the recommended option for better performance.
:::

#### GraphicsMagick

**Windows**:

- Download from [GraphicsMagick website](http://www.graphicsmagick.org/download.html)
- Add installation directory to PATH

**macOS**:

```bash
brew install graphicsmagick
```

**Linux**:

```bash
sudo apt-get install graphicsmagick
```

#### ImageMagick (Alternative)

**Windows**:

- Download from [ImageMagick website](https://imagemagick.org/script/download.php)
- Follow the [detailed installation guide](https://github.com/yakovmeister/pdf2image/blob/HEAD/docs/gm-installation.md)

**macOS**:

```bash
brew install imagemagick
```

**Linux**:

```bash
sudo apt-get install imagemagick
```

### Ghostscript

::: warning REQUIRED
Ghostscript is required by GraphicsMagick/ImageMagick for PDF processing.
:::

#### Windows

- Download from [Ghostscript website](https://ghostscript.com/releases/gsdnld.html)
- For compatibility issues, you might need to install version 9.52 from [this link](https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/tag/gs952)

#### macOS

```bash
brew install ghostscript
```

#### Linux

```bash
sudo apt-get install ghostscript
```

## Setting Up API Keys

TeXRA requires API keys to access language models. Here's how to set them up:

1. Open VS Code with TeXRA installed
2. Click on the TeXRA icon in the Activity Bar
3. Click "Set API Key" in the TeXRA panel
4. Select the provider (OpenAI or Anthropic)
5. Enter your API key when prompted

Alternatively, you can access the extension settings (including API key setup) by clicking the gear icon (<i class="codicon codicon-gear"></i>) in the TeXRA webview panel.

TeXRA also loads environment variables from a `.env` file in your workspace. Define variables like `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` in this file to avoid entering keys manually.

![API Key Setup](/images/api-key-setup.png)

::: info Getting API Keys

- **OpenAI API Key**: Available from [OpenAI API](https://platform.openai.com/api-keys)
- **Anthropic API Key**: Available from [Anthropic Console](https://console.anthropic.com/)
- **Google API Key**: Available from [Google AI Studio](https://aistudio.google.com/app/apikey)
  :::

## Verifying Installation

To verify that TeXRA and all dependencies are correctly installed:

1. Open VS Code
2. Click on the TeXRA icon in the Activity Bar
3. The TeXRA panel should load without errors
4. Create or open a LaTeX document
5. Try a simple command like "Indent Current TeX" from the editor title menu

If any component is missing, TeXRA will typically show an error message indicating what needs to be installed.

## Troubleshooting Installation

### Common Installation Issues

1. **Extension Not Loading**:
   - Check VS Code's minimum version requirement (1.94.2+)
   - Look for errors in the Output panel (select "TeXRA" in the dropdown)
   - Try reinstalling the extension

2. **LaTeX Processing Errors**:
   - Verify LaTeX is in your system PATH

- Run `latexmk --version` (or `pdflatex --version`) in terminal to confirm installation
- Check if required LaTeX packages are installed

3. **Image Processing Errors**:
   - Confirm GraphicsMagick/ImageMagick is properly installed
   - Verify Ghostscript is installed and accessible
   - Check PATH environment variables

4. **API Key Issues**:
   - Verify API keys are entered correctly
   - Check your usage limits
   - Ensure your network allows connections to API endpoints

### Getting Help

If you encounter persistent installation issues:

1. Check the [GitHub Issues page](https://github.com/texra-ai/texra-issues/issues) for known problems
2. Look for error messages in the TeXRA ProgressBoard
3. File a new issue with detailed information about your system and the specific error

## Next Steps

With TeXRA and all dependencies installed, you're ready to start using the tool to enhance your academic research. Check out the [Quick Start Guide](/guide/quick-start) to learn the basics, or examine specific features in the other documentation sections.
