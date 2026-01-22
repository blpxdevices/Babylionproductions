import React, { useState, useEffect } from "react";

// Baby Lion Productions & Device Limited - Landing Page
export default function BabyLionProductions() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "services", "work", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      icon: "🎬",
      title: "Commercial Production",
      desc: "High-impact commercials that tell your brand story and drive results.",
    },
    {
      icon: "🎵",
      title: "Music Videos",
      desc: "Visually stunning music videos that bring your sound to life.",
    },
    {
      icon: "📽️",
      title: "Documentaries",
      desc: "Compelling documentary films that capture real stories with authenticity.",
    },
    {
      icon: "🎥",
      title: "Corporate Videos",
      desc: "Professional corporate content for training, events, and communications.",
    },
    {
      icon: "✨",
      title: "Post-Production",
      desc: "Expert editing, color grading, VFX, and sound design.",
    },
    {
      icon: "📱",
      title: "Digital Content",
      desc: "Engaging social media and digital-first video content.",
    },
  ];

  const projects = [
    {
      title: "Brand Campaign",
      client: "Luxury Fashion",
      category: "Commercial",
      color: "#1a1a2e",
    },
    {
      title: "Coming Soon",
      client: "Upcoming",
      category: "In Production",
      color: "#1a1a1a",
      isPlaceholder: true,
    },
    {
      title: "Coming Soon",
      client: "Upcoming",
      category: "In Production",
      color: "#1a1a1a",
      isPlaceholder: true,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#1a1a1a",
        background: "#fafafa",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem 2rem",
          background: isScrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
          borderBottom: isScrolled ? "1px solid #eee" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#1a1a1a" }}>BABY LION</span>
            <span
              style={{ color: "#666", fontWeight: 400, marginLeft: "0.5rem" }}
            >
              Productions
            </span>
          </div>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  color: activeSection === item.id ? "#1a1a1a" : "#666",
                  fontWeight: activeSection === item.id ? 600 : 400,
                  transition: "color 0.2s ease",
                  padding: "0.5rem 0",
                  position: "relative",
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "#1a1a1a",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            className="mobile-menu-btn"
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a1a",
                marginBottom: "6px",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a1a",
                marginBottom: "6px",
                opacity: isMenuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "#1a1a1a",
                transition: "all 0.3s ease",
                transform: isMenuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              padding: "1rem 2rem",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  padding: "1rem 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 2rem 4rem",
          background: "linear-gradient(180deg, #fff 0%, #fafafa 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#888",
              marginBottom: "1.5rem",
            }}
          >
            Film & Video Production
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            We bring stories
            <br />
            <span style={{ color: "#666" }}>to life.</span>
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: 1.6,
            }}
          >
            Baby Lion Productions & Device Limited crafts compelling visual
            narratives for brands, artists, and storytellers across Africa and
            beyond.
          </p>

          {/* Video Placeholder */}
          <div
            style={{
              aspectRatio: "16/9",
              maxWidth: "900px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: "20px solid #1a1a1a",
                  marginLeft: "4px",
                }}
              />
            </div>
            <p
              style={{
                position: "absolute",
                bottom: "2rem",
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.9rem",
              }}
            >
              Watch Our Showreel
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollToSection("work")}
              style={{
                padding: "1rem 2rem",
                background: "#1a1a1a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                padding: "1rem 2rem",
                background: "transparent",
                color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{ padding: "8rem 2rem", background: "#fff" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#888",
              marginBottom: "1rem",
            }}
          >
            What We Do
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "4rem",
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  background: "#fafafa",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {service.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section
        id="work"
        style={{ padding: "8rem 2rem", background: "#fafafa" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#888",
              marginBottom: "1rem",
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              marginBottom: "4rem",
              letterSpacing: "-0.02em",
            }}
          >
            Selected Work
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: "4/3",
                  background: `linear-gradient(135deg, ${project.color} 0%, #0a0a0a 100%)`,
                  borderRadius: "12px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    left: "1.5rem",
                    background: "rgba(255,255,255,0.15)",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.8)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}
                >
                  {project.client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "8rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#888",
                  marginBottom: "1rem",
                }}
              >
                About Us
              </p>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Crafting visual stories since 2018
              </h2>
              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                Baby Lion Productions & Device Limited is a full-service video
                production company based in Nigeria. We specialize in creating
                compelling visual content that resonates with audiences and
                drives meaningful impact for our clients.
              </p>
              <p
                style={{ color: "#666", lineHeight: 1.8, marginBottom: "2rem" }}
              >
                From concept to final delivery, our team of passionate
                filmmakers, editors, and creative strategists work
                collaboratively to bring your vision to life with authenticity
                and excellence.
              </p>
              <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                <div>
                  <p style={{ fontSize: "2.5rem", fontWeight: 700 }}>50+</p>
                  <p style={{ color: "#888", fontSize: "0.9rem" }}>
                    Projects Completed
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "2.5rem", fontWeight: 700 }}>30+</p>
                  <p style={{ color: "#888", fontSize: "0.9rem" }}>
                    Happy Clients
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "2.5rem", fontWeight: 700 }}>6+</p>
                  <p style={{ color: "#888", fontSize: "0.9rem" }}>
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                aspectRatio: "1",
                background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "4rem" }}>🦁</span>
                <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
                  Team Photo Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "8rem 2rem", background: "#fff" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#888",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Let's Create Together
            </h2>
            <p style={{ color: "#666", maxWidth: "500px", margin: "0 auto" }}>
              Have a project in mind? We'd love to hear from you. Send us a
              message and let's start the conversation.
            </p>
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.2s ease",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.2s ease",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Project Type
              </label>
              <select
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  background: "white",
                  cursor: "pointer",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select a project type</option>
                <option value="commercial">Commercial Production</option>
                <option value="music-video">Music Video</option>
                <option value="documentary">Documentary</option>
                <option value="corporate">Corporate Video</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  resize: "vertical",
                  fontFamily: "inherit",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "1rem 2rem",
                background: "#1a1a1a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Send Message
            </button>
          </form>

          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid #eee",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Or reach us directly
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:hello@babylionproductions.com"
                style={{ color: "#1a1a1a", textDecoration: "none" }}
              >
                hello@babylionproductions.com
              </a>
              <span style={{ color: "#ccc" }}>|</span>
              <a
                href="tel:+2348160285265"
                style={{ color: "#1a1a1a", textDecoration: "none" }}
              >
                +234 816 028 5265
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "3rem 2rem",
          background: "#fafafa",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span style={{ fontWeight: 700 }}>BABY LION</span>
            <span
              style={{ color: "#666", fontWeight: 400, marginLeft: "0.5rem" }}
            >
              Productions & Device Limited
            </span>
          </div>
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            © 2026 Baby Lion Productions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* CSS for responsive nav */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}
