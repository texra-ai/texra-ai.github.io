import{_ as e,c as a,o as s,a2 as t}from"./chunks/framework.D30IVGRC.js";const l="/images/api-key-setup.png",g=JSON.parse('{"title":"Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation.md","filePath":"guide/installation.md"}'),n={name:"guide/installation.md"};function o(r,i,h,p,d,c){return s(),a("div",null,i[0]||(i[0]=[t(`<h1 id="installation-guide" tabindex="-1">Installation Guide <a class="header-anchor" href="#installation-guide" aria-label="Permalink to &quot;Installation Guide&quot;">​</a></h1><p>This guide will walk you through the process of installing TeXRA and all its dependencies to ensure optimal performance.</p><h2 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-label="Permalink to &quot;System Requirements&quot;">​</a></h2><p>TeXRA is designed to work on all major operating systems with the following minimum requirements:</p><ul><li><strong>Visual Studio Code</strong>: Version 1.96.2 or newer</li><li><strong>Operating System</strong>: Windows, macOS, or Linux</li><li><strong>Internet Connection</strong>: Required for API access to language models</li></ul><h2 id="installing-the-extension" tabindex="-1">Installing the Extension <a class="header-anchor" href="#installing-the-extension" aria-label="Permalink to &quot;Installing the Extension&quot;">​</a></h2><h3 id="from-vs-code-marketplace-recommended" tabindex="-1">From VS Code Marketplace (Recommended) <a class="header-anchor" href="#from-vs-code-marketplace-recommended" aria-label="Permalink to &quot;From VS Code Marketplace (Recommended)&quot;">​</a></h3><p>The easiest way to install TeXRA is directly from the Visual Studio Code Marketplace:</p><ol><li>Open VS Code.</li><li>Go to the Extensions view (click the square icon in the Activity Bar or press <code>Ctrl+Shift+X</code>).</li><li>Search for &quot;TeXRA&quot;.</li><li>Find the extension published by &quot;texra-ai&quot;.</li><li>Click the &quot;Install&quot; button.</li><li>Reload VS Code if prompted.</li></ol><p><a href="https://marketplace.visualstudio.com/items?itemName=texra-ai.texra" target="_blank" style="display:inline-block;background-color:#007ACC;color:white;padding:8px 12px;text-decoration:none;border-radius:4px;font-weight:bold;margin:10px 0;">View on Marketplace</a></p><h2 id="installing-required-dependencies" tabindex="-1">Installing Required Dependencies <a class="header-anchor" href="#installing-required-dependencies" aria-label="Permalink to &quot;Installing Required Dependencies&quot;">​</a></h2><p>Now for the slightly less fun part – making sure TeXRA has all the tools it needs to work its magic. TeXRA relies on several external tools to function properly. Follow the instructions for your operating system.</p><h3 id="latex-distribution" tabindex="-1">LaTeX Distribution <a class="header-anchor" href="#latex-distribution" aria-label="Permalink to &quot;LaTeX Distribution&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">IMPORTANT</p><p>A LaTeX distribution is required for TeXRA to properly process LaTeX documents.</p></div><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><p>Install either:</p><ul><li><strong>MiKTeX</strong>: Download and install from <a href="https://miktex.org/download" target="_blank" rel="noreferrer">miktex.org</a></li><li><strong>TeX Live</strong>: Download and install from <a href="https://tug.org/texlive/windows.html" target="_blank" rel="noreferrer">tug.org/texlive/windows.html</a></li></ul><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><p>Install MacTeX:</p><ul><li>Download from <a href="https://www.tug.org/mactex/mactex-download.html" target="_blank" rel="noreferrer">tug.org/mactex/mactex-download.html</a></li><li>Or use Homebrew: <code>brew install --cask mactex</code></li></ul><h4 id="linux-ubuntu-debian" tabindex="-1">Linux (Ubuntu/Debian) <a class="header-anchor" href="#linux-ubuntu-debian" aria-label="Permalink to &quot;Linux (Ubuntu/Debian)&quot;">​</a></h4><p>Install TeX Live:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> texlive-full</span></span></code></pre></div><h3 id="perl" tabindex="-1">Perl <a class="header-anchor" href="#perl" aria-label="Permalink to &quot;Perl&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Perl is required for LaTeX tools and document processing.</p></div><h4 id="windows-1" tabindex="-1">Windows <a class="header-anchor" href="#windows-1" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><ul><li>Included with MiKTeX or TeX Live</li><li>Verify installation by running <code>perl --version</code> in Command Prompt</li></ul><h4 id="macos-1" tabindex="-1">macOS <a class="header-anchor" href="#macos-1" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><ul><li>Pre-installed</li><li>Verify with <code>perl --version</code> in Terminal</li></ul><h4 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perl</span></span></code></pre></div><h3 id="graphicsmagick-imagemagick" tabindex="-1">GraphicsMagick/ImageMagick <a class="header-anchor" href="#graphicsmagick-imagemagick" aria-label="Permalink to &quot;GraphicsMagick/ImageMagick&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">RECOMMENDED</p><p>GraphicsMagick is the recommended option for better performance.</p></div><h4 id="graphicsmagick" tabindex="-1">GraphicsMagick <a class="header-anchor" href="#graphicsmagick" aria-label="Permalink to &quot;GraphicsMagick&quot;">​</a></h4><p><strong>Windows</strong>:</p><ul><li>Download from <a href="http://www.graphicsmagick.org/download.html" target="_blank" rel="noreferrer">GraphicsMagick website</a></li><li>Add installation directory to PATH</li></ul><p><strong>macOS</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graphicsmagick</span></span></code></pre></div><p><strong>Linux</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> graphicsmagick</span></span></code></pre></div><h4 id="imagemagick-alternative" tabindex="-1">ImageMagick (Alternative) <a class="header-anchor" href="#imagemagick-alternative" aria-label="Permalink to &quot;ImageMagick (Alternative)&quot;">​</a></h4><p><strong>Windows</strong>:</p><ul><li>Download from <a href="https://imagemagick.org/script/download.php" target="_blank" rel="noreferrer">ImageMagick website</a></li><li>Follow the <a href="https://github.com/yakovmeister/pdf2image/blob/HEAD/docs/gm-installation.md" target="_blank" rel="noreferrer">detailed installation guide</a></li></ul><p><strong>macOS</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagemagick</span></span></code></pre></div><p><strong>Linux</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> imagemagick</span></span></code></pre></div><h3 id="ghostscript" tabindex="-1">Ghostscript <a class="header-anchor" href="#ghostscript" aria-label="Permalink to &quot;Ghostscript&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">REQUIRED</p><p>Ghostscript is required by GraphicsMagick/ImageMagick for PDF processing.</p></div><h4 id="windows-2" tabindex="-1">Windows <a class="header-anchor" href="#windows-2" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><ul><li>Download from <a href="https://ghostscript.com/releases/gsdnld.html" target="_blank" rel="noreferrer">Ghostscript website</a></li><li>For compatibility issues, you might need to install version 9.52 from <a href="https://github.com/ArtifexSoftware/ghostpdl-downloads/releases/tag/gs952" target="_blank" rel="noreferrer">this link</a></li></ul><h4 id="macos-2" tabindex="-1">macOS <a class="header-anchor" href="#macos-2" aria-label="Permalink to &quot;macOS&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghostscript</span></span></code></pre></div><h4 id="linux-1" tabindex="-1">Linux <a class="header-anchor" href="#linux-1" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ghostscript</span></span></code></pre></div><h2 id="setting-up-api-keys" tabindex="-1">Setting Up API Keys <a class="header-anchor" href="#setting-up-api-keys" aria-label="Permalink to &quot;Setting Up API Keys&quot;">​</a></h2><p>TeXRA requires API keys to access language models. Here&#39;s how to set them up:</p><ol><li>Open VS Code with TeXRA installed</li><li>Click on the TeXRA icon in the Activity Bar</li><li>Click &quot;Set API Key&quot; in the TeXRA panel</li><li>Select the provider (OpenAI or Anthropic)</li><li>Enter your API key when prompted</li></ol><p><img src="`+l+`" alt="API Key Setup"></p><div class="info custom-block"><p class="custom-block-title">Getting API Keys</p><ul><li><strong>OpenAI API Key</strong>: Available from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">OpenAI API</a></li><li><strong>Anthropic API Key</strong>: Available from <a href="https://console.anthropic.com/" target="_blank" rel="noreferrer">Anthropic Console</a></li><li><strong>Google API Key</strong>: Available from <a href="./....html">Google AI Studio</a></li></ul></div><h2 id="verifying-installation" tabindex="-1">Verifying Installation <a class="header-anchor" href="#verifying-installation" aria-label="Permalink to &quot;Verifying Installation&quot;">​</a></h2><p>To verify that TeXRA and all dependencies are correctly installed:</p><ol><li>Open VS Code</li><li>Click on the TeXRA icon in the Activity Bar</li><li>The TeXRA panel should load without errors</li><li>Create or open a LaTeX document</li><li>Try a simple command like &quot;Indent Current TeX&quot; from the editor title menu</li></ol><p>If any component is missing, TeXRA will typically show an error message indicating what needs to be installed.</p><h2 id="optimizing-your-setup" tabindex="-1">Optimizing Your Setup <a class="header-anchor" href="#optimizing-your-setup" aria-label="Permalink to &quot;Optimizing Your Setup&quot;">​</a></h2><h3 id="setting-up-vs-code" tabindex="-1">Setting Up VS Code <a class="header-anchor" href="#setting-up-vs-code" aria-label="Permalink to &quot;Setting Up VS Code&quot;">​</a></h3><p>For optimal use with TeXRA:</p><ol><li><p>Move TeXRA to the secondary sidebar:</p><ul><li>Open VS Code&#39;s Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)</li><li>Run &quot;View: Toggle Secondary Side Bar Visibility&quot; (or use Alt+Cmd+B on macOS)</li><li>Drag the TeXRA view from the primary sidebar to the secondary sidebar</li></ul></li><li><p>Configure LaTeX Workshop (if installed):</p><ul><li>In VS Code settings, search for &quot;Latex-workshop: Out Dir&quot;</li><li>Set to <code>%DIR%/build</code> to direct LaTeX output files to a build subdirectory</li><li>Add <code>-pdf</code> and <code>-f</code> to latexmk command for better compatibility:</li></ul></li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;latex-workshop.latex.magic.args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-synctex=1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-interaction=nonstopmode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-file-line-error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;%DOC%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;-f&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="setting-up-cross-computer-sync" tabindex="-1">Setting Up Cross-Computer Sync <a class="header-anchor" href="#setting-up-cross-computer-sync" aria-label="Permalink to &quot;Setting Up Cross-Computer Sync&quot;">​</a></h3><p>If you work across multiple computers:</p><ol><li><p>Use cloud storage (e.g., Dropbox) to sync key folders:</p><ul><li><strong>Diffs</strong>: Stores difference files from LaTeX diff operations</li><li><strong>History</strong>: Tracks different versions of your documents</li></ul></li><li><p>Create symbolic links to maintain your local directory structure:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/Dropbox/texra-papers/ProjectName/Diffs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/ProjectName</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/Dropbox/texra-papers/ProjectName/History</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/local/ProjectName</span></span></code></pre></div></li></ol><h2 id="troubleshooting-installation" tabindex="-1">Troubleshooting Installation <a class="header-anchor" href="#troubleshooting-installation" aria-label="Permalink to &quot;Troubleshooting Installation&quot;">​</a></h2><h3 id="common-installation-issues" tabindex="-1">Common Installation Issues <a class="header-anchor" href="#common-installation-issues" aria-label="Permalink to &quot;Common Installation Issues&quot;">​</a></h3><ol><li><p><strong>Extension Not Loading</strong>:</p><ul><li>Check VS Code&#39;s minimum version requirement (1.96.2+)</li><li>Look for errors in the Output panel (select &quot;TeXRA&quot; in the dropdown)</li><li>Try reinstalling the extension</li></ul></li><li><p><strong>LaTeX Processing Errors</strong>:</p><ul><li>Verify LaTeX is in your system PATH</li><li>Run <code>pdflatex --version</code> in terminal to confirm installation</li><li>Check if required LaTeX packages are installed</li></ul></li><li><p><strong>Image Processing Errors</strong>:</p><ul><li>Confirm GraphicsMagick/ImageMagick is properly installed</li><li>Verify Ghostscript is installed and accessible</li><li>Check PATH environment variables</li></ul></li><li><p><strong>API Key Issues</strong>:</p><ul><li>Verify API keys are entered correctly</li><li>Check your subscription status and usage limits</li><li>Ensure your network allows connections to API endpoints</li></ul></li></ol><h3 id="getting-help" tabindex="-1">Getting Help <a class="header-anchor" href="#getting-help" aria-label="Permalink to &quot;Getting Help&quot;">​</a></h3><p>If you encounter persistent installation issues:</p><ol><li>Check the <a href="https://github.com/texra-ai/texra-issues/issues" target="_blank" rel="noreferrer">GitHub Issues page</a> for known problems</li><li>Look for error messages in the TeXRA ProgressBoard</li><li>File a new issue with detailed information about your system and the specific error</li></ol><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><p>With TeXRA and all dependencies installed, you&#39;re ready to start using the tool to enhance your academic research. Check out the <a href="/guide/quick-start.html">Quick Start Guide</a> to learn the basics, or explore specific features in the other documentation sections.</p>`,80)]))}const k=e(n,[["render",o]]);export{g as __pageData,k as default};
