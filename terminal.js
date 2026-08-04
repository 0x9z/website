<div class="terminal-panel" id="panel-terminal">
          <div class="terminal-output" id="terminal-output">
<span class="cmd-cyan">   ___  __  __   _  _   ___   _____   ___   _  _ 
  / _ \ \ \/ /  | || | |_ _| |__  /  / _ \ | || |
 | | | | \  /   | || |_ | |    / /  | | | || || |_
 | |_| | /  \   |__   _|| |   / /_  | |_| ||__   _|
  \___/ /_/\_\     |_| |___| /____|  \___/   |_|
</span>
<span class="cmd-dim">CyberNetwork.Technology // 0x9z OS v3.0</span>
<span class="cmd-dim">Type <span class="cmd-green">help</span> to see available commands.</span>
<span class="cmd-dim">──────────────────────────────────────────────</span>
          </div>
          <div class="terminal-input-line">
            <span class="prompt-symbol">0x9z@cybernetwork:~$</span>
            <input type="text" id="terminal-input" autofocus autocomplete="off" spellcheck="false">
          </div>
        </div>

      </div>
    </div>
  </div>

  <script>
    // --- Particles ---
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 15) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      p.style.width = (1 + Math.random() * 2) + 'px';
      p.style.height = p.style.width;
      particlesContainer.appendChild(p);
    }

    // --- Clock ---
    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour12: false });
    }
    updateClock();
    setInterval(updateClock, 1000);

    // --- Panel Switching ---
    const panels = {
      about: document.getElementById('panel-about'),
      projects: document.getElementById('panel-projects'),
      certs: document.getElementById('panel-certs'),
      blog: document.getElementById('panel-blog'),
      terminal: document.getElementById('panel-terminal'),
    };

    function switchPanel(panelName) {
      Object.values(panels).forEach(p => p.classList.remove('active'));
      if (panels[panelName]) panels[panelName].classList.add('active');

      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));

      const tab = document.querySelector(`.tab[data-panel="${panelName}"]`);
      if (tab) tab.classList.add('active');
      const sidebarItem = document.querySelector(`.sidebar-item[data-panel="${panelName}"]`);
      if (sidebarItem) sidebarItem.classList.add('active');

      if (panelName === 'terminal') {
        setTimeout(() => document.getElementById('terminal-input').focus(), 100);
      }
    }

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => switchPanel(tab.dataset.panel));
    });
    document.querySelectorAll('.sidebar-item[data-panel]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        switchPanel(item.dataset.panel);
      });
    });

    // --- Terminal Commands ---
    const termOutput = document.getElementById('terminal-output');
    const termInput = document.getElementById('terminal-input');

    const commands = {
      help: () => `
<span class="cmd-yellow">Available commands:</span>
  <span class="cmd-green">about</span>      - whoami
  <span class="cmd-green">whoami</span>     - display identity
  <span class="cmd-green">projects</span>   - list pinned repos
  <span class="cmd-green">certs</span>      - show certifications
  <span class="cmd-green">blog</span>        - latest articles
  <span class="cmd-green">contact</span>     - social links
  <span class="cmd-green">stats</span>       - github & linkedin stats
  <span class="cmd-green">neofetch</span>    - system info
  <span class="cmd-green">clear</span>       - clear terminal
  <span class="cmd-green">gui</span>         - switch to graphical mode
  <span class="cmd-green">sudo rm -rf /</span> - don't.
`,
      about: () => `
<span class="cmd-cyan">┌─ about 0x9z ───────────────────────┐</span>
<span class="cmd-white">Name:</span>        Anas Ait baani
<span class="cmd-white">Handle:</span>      @0x9z | he/him
<span class="cmd-white">Location:</span>    Marrakech, Morocco
<span class="cmd-white">Domain:</span>      cybernetwork.technology
<span class="cmd-white">Focus:</span>       Networking | Linux | Python & Bash
<span class="cmd-white">Mission:</span>     I break down networks to see how they work.
<span class="cmd-white">Motto:</span>       "I learn by doing — one command at a time."
<span class="cmd-cyan">└────────────────────────────────────┘</span>
`,
      whoami: () => `<span class="cmd-green">0x9z</span> — Self-taught Linux enthusiast. Networking. Cybersecurity. Homelabs.`,
      projects: () => `
<span class="cmd-cyan">📦 pinned repositories:</span>
  <span class="cmd-green">⚙️ Automated-Backup-Script</span> <span class="cmd-dim">[Shell]</span> ⭐1
  <span class="cmd-green">📘 CCNA-Jeremy-Notes</span> <span class="cmd-dim">[Markdown]</span> ⭐1
  <span class="cmd-green">📊 system-monitor</span> <span class="cmd-dim">[Shell]</span> ⭐1
  <span class="cmd-green">🌐 website</span> <span class="cmd-dim">[HTML]</span> 🌐Live
  <span class="cmd-green">+ community</span> <span class="cmd-dim">[Ruby]</span> ⭐8.6k
`,
      certs: () => `
<span class="cmd-cyan">📜 certifications:</span>
  ▹ Linux 100: Fundamentals — TCM Security (Mar 2026)
  ▹ Introduction to Cybersecurity — Cisco (Mar 2026)
  ▹ ISC2 Candidate — ISC2 (2026)
  ▹ LPIC / Linux Foundation (in progress)
`,
      blog: () => `
<span class="cmd-cyan">📡 latest:</span> "I Killed Firefox From the Terminal — Here's What I Learned"
  🔥 103 impressions | 💬 1 comment
  <span class="cmd-dim">Read more: medium.com/@0x9z</span>
`,
      contact: () => `
<span class="cmd-cyan">🔗 connect:</span>
  🐙 <a href="https://github.com/0x9z" target="_blank" style="color:#8ab8d8;">github.com/0x9z</a>
  💼 <a href="https://linkedin.com/in/0x9z" target="_blank" style="color:#8ab8d8;">linkedin.com/in/0x9z</a>
  📖 <a href="https://medium.com/@0x9z" target="_blank" style="color:#8ab8d8;">medium.com/@0x9z</a>
  📝 <a href="https://dev.to/0x9z" target="_blank" style="color:#8ab8d8;">dev.to/0x9z</a>
`,
      stats: () => `
<span class="cmd-cyan">📊 live stats:</span>
  Contributions (year): <span class="cmd-green">503</span>
  GitHub Followers:     <span class="cmd-green">60</span>
  LinkedIn Followers:   <span class="cmd-green">2,453</span>
  Repositories:         <span class="cmd-green">9</span>
  Profile Views (7d):   <span class="cmd-green">481</span>
`,
      neofetch: () => `
<span class="cmd-cyan">      .---.        </span> <span class="cmd-white">0x9z</span><span class="cmd-dim">@</span><span class="cmd-green">cybernetwork.tech</span>
<span class="cmd-cyan">     /     \\       </span> <span class="cmd-dim">OS:</span> 0x9z OS v3.0 "White Crow"
<span class="cmd-cyan">     \\.@-@./       </span> <span class="cmd-dim">Host:</span> CyberNetwork Server
<span class="cmd-cyan">     /\`\\_/\`\\      </span> <span class="cmd-dim">Kernel:</span> Linux 6.x
<span class="cmd-cyan">    //  _  \\\\     </span> <span class="cmd-dim">Shell:</span> bash 5.x
<span class="cmd-cyan">   | \\     )|_    </span> <span class="cmd-dim">Uptime:</span> since day one
<span class="cmd-cyan">  /\`\\_\\>  <_/ \\   </span> <span class="cmd-dim">Packages:</span> 9 repos
<span class="cmd-cyan">  \\__/'---'\\__/   </span> <span class="cmd-dim">Theme:</span> Neon Glass
`,
      gui: () => {
        setTimeout(() => switchPanel('about'), 300);
        return `<span class="cmd-green">Switching to graphical interface...</span>`;
      },
      clear: () => {
        setTimeout(() => { termOutput.innerHTML = ''; }, 50);
        return '';
      },
      'sudo': (args) => {
        if (args.includes('rm') && args.includes('-rf') && args.includes('/')) {
          return `<span class="cmd-yellow">⚠ Nice try. This isn't a real system. But I respect the energy. ⚠</span>`;
        }
        return `<span class="cmd-yellow">sudo: command not found in this simulation. Try 'help'.</span>`;
      }
    };

    function appendOutput(html) {
      if (!html) return;
      termOutput.innerHTML += '\n' + html;
      termOutput.scrollTop = termOutput.scrollHeight;
    }

    termInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const input = termInput.value.trim();
        if (!input) return;

        appendOutput(`\n<span class="prompt-symbol">0x9z@cybernetwork:~$</span> <span class="cmd-white">${input}</span>`);

        const parts = input.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (commands[cmd]) {
          const result = commands[cmd](args);
          appendOutput(result);
        } else if (cmd === 'sudo') {
          const result = commands['sudo'](args);
          appendOutput(result);
        } else {
          appendOutput(`<span class="cmd-dim">bash: ${cmd}: command not found. Type 'help' for available commands.</span>`);
        }

        termInput.value = '';
        termOutput.scrollTop = termOutput.scrollHeight;
      }
    });

    // --- Blog Fetch ---
    (async function loadBlog() {
      const container = document.getElementById('blog-container');
      if (!container) return;
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0x9z');
        const data = await res.json();
        if (data.status === 'ok' && data.items?.length) {
          container.innerHTML = data.items.slice(0, 100).map(post => {
            const date = new Date(post.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            const div = document.createElement('div');
            div.innerHTML = post.description || '';
            const desc = (div.textContent || '').substring(0, 120) + '...';
            return `<div class="glass-card">
              <strong><a href="${post.link}" target="_blank" style="color:#e0f0ff;text-decoration:none;">${post.title}</a></strong>
              <div style="font-size:1rem;color:#5f7b99;">${date}</div>
              <p style="font-size:1rem;color:#8ba9c7;margin-top:0.7rem;">${desc}</p>
              <a href="${post.link}" target="_blank" style="color:var(--accent);font-size:0.75rem;">Read →</a>
            </div>`;
          }).join('');
        } else {
          container.innerHTML = `<div class="glass-card"><p>📖 Visit <a href="https://medium.com/@0x9z" target="_blank" style="color:var(--accent);">medium.com/@0x9z</a></p></div>`;
        }
      } catch(e) {
        container.innerHTML = `<div class="glass-card"><p>📖 <a href="https://medium.com/@0x9z" target="_blank" style="color:var(--accent);">medium.com/@0x9z</a></p></div>`;
      }
    })();
  </script>
