<template>
  <div class="site-wrapper">
    <NuxtRouteAnnouncer />
    
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <img src="/images/camp-perfect-logo.svg" alt="Camp Perfect Checklist Logo" />
            <span class="logo-text">Camp Perfect</span>
          </div>
          <div class="nav-links">
            <a href="#hero" class="nav-link">Home</a>
            <a href="#features" class="nav-link">Features</a>
            <a href="#app" class="nav-link">App</a>
            <a href="#download" class="nav-link cta-link">Get Started</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Your Ultimate Camping Companion</h1>
          <p class="hero-subtitle">
            Privacy-first camping checklist app. Track your gear, plan meals, manage packing lists, 
            and never forget essential camping items again.
          </p>
          <div class="hero-cta">
            <a href="https://campperfectchecklist.netlify.app/tabs/tabpack" target="_blank" class="btn btn-primary">
              Try the App
            </a>
            <a href="#features" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Features</h2>
        
        <div class="feature-grid">
          <!-- Privacy First -->
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Privacy First!</h3>
            <p class="feature-description">
              Camp Perfect Checklist stores all of its data on your device. No need to create cloud accounts 
              and export your data anytime. Nobody's creeping around your gear list figuring out what else 
              you should buy so you can get targeted by more ads.
            </p>
          </div>

          <!-- Pack -->
          <div class="feature-card">
            <div class="feature-icon">🎒</div>
            <h3 class="feature-title">Pack</h3>
            <p class="feature-description">
              Simple as it can be, but with a little power up. Packing something that you need to buy? 
              Mark it as "Add to shopping list". Forgot to buy something? Camp Perfect Checklist won't 
              let you mark it as packed until you confirm you bought it.
            </p>
            <p class="feature-description">
              Don't want to remember if you have packed all of the boxes and crates? Camp Perfect Checklist 
              lets you track containers as well.
            </p>
          </div>

          <!-- Shop -->
          <div class="feature-card">
            <div class="feature-icon">🛒</div>
            <h3 class="feature-title">Shop</h3>
            <p class="feature-description">
              No more cross referencing multiple lists. Camp Perfect Checklist shopping and packing lists 
              are integrated. That means that you can see in both lists what items might be missing and 
              what you've already bought and is ready to pack.
            </p>
          </div>

          <!-- Meal Planning -->
          <div class="feature-card">
            <div class="feature-icon">🍳</div>
            <h3 class="feature-title">Plan your meals</h3>
            <p class="feature-description">
              Some of us love to eat, but planning an awesome meal over fire is a work of seasoned masters. 
              Use the meal planner feature to keep a simple list of your meals so you can track your inventory 
              and easily adapt to unplanned changes.
            </p>
          </div>

          <!-- Gear Tracking -->
          <div class="feature-card">
            <div class="feature-icon">⛺</div>
            <h3 class="feature-title">Track your gear</h3>
            <p class="feature-description">
              Where did I put that spatula? Add all of your gear and categorize it into containers that you own. 
              Searching for something? No problem, Camp Perfect Checklist will match it and show you what 
              container it belongs to.
            </p>
          </div>

          <!-- Annual Review -->
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3 class="feature-title">Annual review</h3>
            <p class="feature-description">
              A feature unique to serious campers and backpackers, Camp Perfect Checklist allows you to mark 
              items you have not been using in recent trips. Track them in a dedicated list so you can skip 
              them next time and save some space.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- App Section -->
    <section id="app" class="app-section">
      <div class="container">
        <h2 class="section-title">See It In Action</h2>
        <div class="app-showcase">
          <div class="app-description">
            <h3>Available Now</h3>
            <p>
              Camp Perfect Checklist is a web app that works on all your devices. 
              No installation required - just open it in your browser and start organizing your camping gear.
            </p>
            <a href="https://campperfectchecklist.netlify.app/tabs/tabpack" target="_blank" class="btn btn-primary">
              Launch App
            </a>
          </div>
          <div class="app-image">
            <div class="app-placeholder">
              📱 App Screenshot
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download/CTA Section -->
    <section id="download" class="download-section">
      <div class="container">
        <div class="download-content">
          <h2 class="section-title">Ready to Get Organized?</h2>
          <p class="download-subtitle">
            Start using Camp Perfect Checklist today and make your next camping trip stress-free.
          </p>
          <a href="https://campperfectchecklist.netlify.app/tabs/tabpack" target="_blank" class="btn btn-large">
            Get Started Now
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="/images/camp-perfect-logo.svg" alt="Camp Perfect Checklist Logo" />
            <span>Camp Perfect Checklist</span>
          </div>
          <div class="footer-links">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#app">App</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Camp Perfect Checklist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* CSS Reset & Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --brand-color: #2e7d32;
  --brand-dark: #1b5e20;
  --brand-light: #66bb6a;
  --text-primary: #212121;
  --text-secondary: #757575;
  --bg-light: #f5f5f5;
  --white: #ffffff;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.15);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--white);
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navigation */
.navbar {
  background: var(--white);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand-color);
}

.logo img {
  height: 40px;
  width: 40px;
}

.logo-text {
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--brand-color);
}

.nav-link.cta-link {
  background: var(--brand-color);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  transition: background 0.3s;
}

.nav-link.cta-link:hover {
  background: var(--brand-dark);
  color: var(--white);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--brand-color) 0%, var(--brand-dark) 100%);
  color: var(--white);
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--white);
  color: var(--brand-color);
}

.btn-primary:hover {
  background: var(--bg-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border-color: var(--white);
}

.btn-secondary:hover {
  background: var(--white);
  color: var(--brand-color);
  transform: translateY(-2px);
}

.btn-large {
  background: var(--brand-color);
  color: var(--white);
  padding: 1.125rem 2.5rem;
  font-size: 1.125rem;
}

.btn-large:hover {
  background: var(--brand-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Features Section */
.features {
  padding: 5rem 0;
  background: var(--bg-light);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--brand-color);
  margin-bottom: 1rem;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.feature-description:last-child {
  margin-bottom: 0;
}

/* App Section */
.app-section {
  padding: 5rem 0;
  background: var(--white);
}

.app-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;
}

.app-description h3 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.app-description p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.app-placeholder {
  background: var(--bg-light);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  font-size: 2rem;
  color: var(--text-secondary);
  border: 2px dashed var(--text-secondary);
}

/* Download Section */
.download-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--brand-light) 0%, var(--brand-color) 100%);
  color: var(--white);
  text-align: center;
}

.download-content {
  max-width: 700px;
  margin: 0 auto;
}

.download-section .section-title {
  color: var(--white);
  margin-bottom: 1.5rem;
}

.download-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

/* Footer */
.footer {
  background: var(--text-primary);
  color: var(--white);
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
}

.footer-logo img {
  height: 32px;
  width: 32px;
  filter: brightness(0) invert(1);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  color: var(--white);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.footer-links a:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0.7;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
    font-size: 0.875rem;
  }

  .nav-link.cta-link {
    padding: 0.375rem 1rem;
  }

  .hero {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .section-title {
    font-size: 2rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .app-showcase {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Accessibility */
a:focus,
button:focus {
  outline: 2px solid var(--brand-color);
  outline-offset: 2px;
}
</style>
