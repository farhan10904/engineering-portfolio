/* Portfolio content - edit this file to add, hide, or remove projects.
   Project links are optional. Use verified URLs only.
   See PROJECTS_GUIDE.md for simple examples. */
window.FARHAN_PORTFOLIO = {
  categories: [
    { id: "embedded", label: "Embedded systems & hardware" },
    { id: "software", label: "Software & systems" },
    { id: "cad", label: "CAD & mechanical design" },
    { id: "electronics", label: "Electronics design" },
    { id: "simulation", label: "Simulation & analysis" }
  ],
  projects: [
    {
      id: "gimbal", title: "ESP32 dual-axis PID gimbal", category: "embedded",
      sidebarTitle: "Self-levelling gimbal", featured: true, visible: true, ready: true,
      page: "projects/gimbal.html", accent: "mint", label: "CONTROL / HARDWARE",
      summary: "Built a two-axis ESP32 gimbal with MPU6050 feedback, limited-angle PID correction, custom KiCad PCB and printed frame.",
      technologies: "ESP32 · C/C++ · MPU6050 · PID · KiCad · Fusion 360",
      github: "https://github.com/farhan10904/ESP32-Self-Levelling-Gimbal",
      medium: "", report: "", image: "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/Diagonal.png",
      details: []
    },
    {
      id: "robot", title: "Surgical instrument carrier robot", category: "software",
      sidebarTitle: "Surgical instrument carrier robot", featured: true, visible: true, ready: true,
      page: "projects/robot.html", accent: "sky", label: "ROBOTICS / SOFTWARE",
      summary: "Embedded navigation and instrument-delivery software for an eight-person university robotics project.",
      technologies: "Arduino · C/C++ · IR sensing · Ultrasonic sensing",
      github: "https://github.com/farhan10904/Surgical-Instrument-Carrier-Robot",
      medium: "", report: "", image: "https://raw.githubusercontent.com/farhan10904/Surgical-Instrument-Carrier-Robot/main/images/Overview.jpg", details: []
    },
    {
      id: "brayton", title: "Brayton-cycle gas turbine simulator", category: "simulation",
      sidebarTitle: "Brayton-cycle simulator", featured: true, visible: true, ready: true,
      page: "projects/brayton.html", accent: "amber", label: "ENERGY / SIMULATION",
      summary: "A numerical tool comparing ideal and non-ideal Brayton cycles and the trade-off between net power and thermal efficiency.",
      technologies: "Python · NumPy · Pandas · Matplotlib",
      github: "https://github.com/farhan10904/Brayton-Cycle-Turbine-Simulator",
      medium: "", report: "", image: "", details: []
    },
    {
      id: "radar", title: "ESP32 ultrasonic radar scanner", category: "embedded",
      sidebarTitle: "Radar scanner", featured: true, visible: true, ready: true,
      page: "projects/radar.html", accent: "violet", label: "SENSING / EMBEDDED",
      summary: "Built and tested an ESP32 ultrasonic scanner with 180° servo sweep, OLED readout and live Wi-Fi radar dashboard.",
      technologies: "ESP32 · HC-SR04 · SG90 · OLED · MT3608 · Wi-Fi",
      github: "https://github.com/farhan10904/ESP32_Radar_Scanner",
      medium: "", report: "", image: "https://raw.githubusercontent.com/farhan10904/ESP32_Radar_Scanner/main/docs/images/Actual%20Dashboard.png", details: []
    },
    // Smaller projects stay in the archive without invented details or broken links.
    // Set ready: true and provide details when their case studies are complete.
    { id: "gimbal-frame", title: "Fusion 360 gimbal frame and electronics enclosure", category: "cad", visible: true, ready: false, featured: false },
    { id: "clutch", title: "Clutch assembly", category: "cad", visible: true, ready: false, featured: false },
    { id: "epicyclic", title: "Epicyclic gear assembly", category: "cad", visible: true, ready: false, featured: false },
    { id: "gimbal-pcb", title: "ESP32 gimbal carrier PCB", category: "electronics", visible: true, ready: false, featured: false },
    { id: "night-light", title: "EasyEDA night-light PCB (LDR / 555 timer)", category: "electronics", visible: true, ready: false, featured: false },
    { id: "opamp", title: "TinkerCAD op-amp amplifier circuit", category: "electronics", visible: true, ready: false, featured: false },
    { id: "trading", title: "Algorithmic trading system", category: "software", visible: true, ready: false, featured: false },
    { id: "wokwi", title: "Wokwi embedded-system simulations", category: "software", visible: true, ready: false, featured: false },
    { id: "gimbal-simulation", title: "ESP32 self-levelling gimbal simulation", category: "simulation", visible: true, ready: false, featured: false },
    { id: "radar-simulation", title: "ESP32 radar simulation", category: "simulation", visible: true, ready: false, featured: false },
    { id: "ansys", title: "ANSYS Workbench engineering exercises", category: "simulation", visible: true, ready: false, featured: false },
    { id: "matlab", title: "MATLAB & Simulink control-system training", category: "simulation", visible: true, ready: false, featured: false },
    { id: "aerofoil", title: "Fluid dynamics lab: NACA 0020 aerofoil", category: "simulation", visible: true, ready: false, featured: false }
  ]
};
