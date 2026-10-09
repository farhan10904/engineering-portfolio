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
      summary: "Python gas turbine model comparing ideal and real Brayton cycles with pressure-ratio sweeps, exergy analysis and saved performance results.",
      technologies: "Python · NumPy · Pandas · Matplotlib · Thermodynamics",
      github: "https://github.com/farhan10904/Brayton-Cycle-Turbine-Simulator",
      medium: "", report: "", image: "https://raw.githubusercontent.com/farhan10904/Brayton-Cycle-Turbine-Simulator/main/Graphs/Power_vs_Pressure_Ratio.png", details: []
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
    // Smaller case studies and learning exercises, imported from the Notion export.
    // Add/edit these entries to change the site-wide archive and individual pages.
    {
      "id": "gimbal-frame",
      "title": "Fusion 360 gimbal frame and electronics enclosure",
      "category": "cad",
      "sidebarTitle": "Gimbal CAD frame & enclosure",
      "summary": "Adapted a two-axis gimbal structure in Fusion 360 and developed a custom printed electronics housing with a removable lid, servo brackets and cable access.",
      "technologies": "Fusion 360 · FDM printing · Mechanical assembly",
      "type": "Independent mechanical design",
      "github": "https://github.com/farhan10904/ESP32-Self-Levelling-Gimbal",
      "facts": [
        {
          "value": "2 axes",
          "label": "Roll and pitch; yaw removed"
        },
        {
          "value": "Separate parts",
          "label": "Servo mounts, platform, box and lid"
        },
        {
          "value": "Removable",
          "label": "PCB and electronics access"
        }
      ],
      "sections": [
        {
          "heading": "Mechanical design scope",
          "paragraphs": [
            "The original gimbal bracket and platform geometry was adapted from the HowToMechatronics self-stabilising platform for a two-axis ESP32 project. The custom electronics box, PCB mounting layout, wiring openings and lid were developed for the assembled electronics.",
            "Yaw hardware was removed because the prototype was intended to correct roll and pitch only, reducing unnecessary parts and routing complexity."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_full_assembly.png",
              "caption": "Fusion 360 assembly with the two-axis frame above the electronics box",
              "alt": "Fusion 360 assembly with the two-axis frame above the electronics box"
            }
          ]
        },
        {
          "heading": "Brackets and moving platform",
          "paragraphs": [
            "Roll and base/pitch servo brackets were designed as independent printed parts so they could be replaced or modified. The moving platform carries the MPU6050, keeping the measurement point on the surface being stabilised."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_roll_servo_bracket.png",
              "caption": "Roll-servo bracket",
              "alt": "Roll-servo bracket"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_base_pitch_servo_bracket.png",
              "caption": "Base/pitch servo bracket",
              "alt": "Base/pitch servo bracket"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_stabilizing_platform.png",
              "caption": "Moving platform with attachment slots",
              "alt": "Moving platform with attachment slots"
            }
          ]
        },
        {
          "heading": "Electronics housing",
          "paragraphs": [
            "The printed enclosure provides clearance for the carrier PCB, battery holder, boost converter, switch wiring and USB access. The PCB uses screw mounting rather than adhesive, and the lid is removable for debugging.",
            "Simple cable cut-outs and fasteners were prioritised over complex printed threads."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_electronics_box.png",
              "caption": "PCB and power electronics enclosure",
              "alt": "PCB and power electronics enclosure"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/cad_electronics_lid.png",
              "caption": "Removable friction-fit lid",
              "alt": "Removable friction-fit lid"
            }
          ]
        },
        {
          "heading": "Outcome and attribution",
          "paragraphs": [
            "The CAD components were exported separately for manufacture and assembled in the physical gimbal prototype. Mechanical stiffness and printed-part alignment remained performance limitations.",
            "Base frame geometry was adapted from HowToMechatronics; this case study concentrates on the modifications and enclosure decisions rather than claiming the entire initial design as original."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "clutch",
      "title": "Single-plate automotive clutch assembly",
      "category": "cad",
      "sidebarTitle": "Clutch assembly",
      "type": "University SolidWorks coursework",
      "summary": "Parametric SolidWorks model of a single-plate clutch, including the friction disc, pressure plate, flywheel, diaphragm spring, assembly mates and engineering drawings.",
      "technologies": "SolidWorks · Assembly mates · Engineering drawings · BOM",
      "facts": [
        {
          "value": "~40",
          "label": "Modelled and assembly components"
        },
        {
          "value": "SolidWorks",
          "label": "Parametric CAD"
        },
        {
          "value": "BOM",
          "label": "Exploded drawing and part callouts"
        }
      ],
      "sections": [
        {
          "heading": "System and modelling approach",
          "paragraphs": [
            "The clutch assembly was constructed from individual components, including the flywheel, friction disc, pressure plate, diaphragm spring and housing. Major structural components were modelled, while standard hardware was sourced from the SolidWorks library."
          ],
          "images": [
            {
              "src": "assets/images/archive/clutch-assembly.png",
              "caption": "Assembly view of the clutch model",
              "alt": "Assembly view of the clutch model"
            }
          ]
        },
        {
          "heading": "Assembly constraints",
          "paragraphs": [
            "Mechanical mates controlled concentric positioning of the friction disc and flywheel while constraining unwanted axial motion. The aim was a mechanically representative assembled model, not a measured clutch torque-capacity prediction."
          ],
          "images": [
            {
              "src": "assets/images/archive/clutch-section.png",
              "caption": "Sectioned assembly showing the internal component arrangement",
              "alt": "Sectioned assembly showing the internal component arrangement"
            }
          ]
        },
        {
          "heading": "Manufacturing documentation",
          "paragraphs": [
            "The coursework included an exploded visualisation and an engineering drawing with title block, balloon callouts and a bill of materials. These outputs communicate component identity and assembly relationships."
          ],
          "images": [
            {
              "src": "assets/images/archive/clutch-exploded.png",
              "caption": "Exploded SolidWorks assembly",
              "alt": "Exploded SolidWorks assembly"
            },
            {
              "src": "assets/images/archive/clutch-drawing.png",
              "caption": "Engineering drawing and bill of materials",
              "alt": "Engineering drawing and bill of materials"
            }
          ]
        },
        {
          "heading": "Verification boundary",
          "paragraphs": [
            "The original portfolio documents assembled geometry, mate configuration and drawings. It does not provide tested engagement torque, fatigue life, friction performance or prototype validation; none of those are claimed."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "epicyclic",
      "title": "Epicyclic planetary gearbox assembly",
      "category": "cad",
      "sidebarTitle": "Epicyclic gear assembly",
      "type": "University SolidWorks coursework",
      "summary": "SolidWorks planetary gearbox assembly comprising a sun gear, four planet gears, carrier, internal ring gear and output shaft, documented with section and exploded views.",
      "technologies": "SolidWorks · Gear assembly · Mechanical mates · CAD drawings",
      "facts": [
        {
          "value": "4 planets",
          "label": "Planet gears around the sun gear"
        },
        {
          "value": "CAD assembly",
          "label": "Sun, ring, carrier and shaft"
        },
        {
          "value": "Drawings",
          "label": "Exploded and component detail"
        }
      ],
      "sections": [
        {
          "heading": "Gear-system geometry",
          "paragraphs": [
            "The model consists of a central sun gear, four planet gears, an internally toothed ring gear, a carrier plate and an output shaft. Parts were modelled individually before bringing them together using assembly mates."
          ],
          "images": [
            {
              "src": "assets/images/archive/epicyclic-assembly.png",
              "caption": "Planetary gearbox assembly model",
              "alt": "Planetary gearbox assembly model"
            }
          ]
        },
        {
          "heading": "Assembly and constraint logic",
          "paragraphs": [
            "The original coursework applied mates to reproduce appropriate spatial relationships and rotational motion. Section views were used to inspect gear engagement and internal alignment.",
            "This documents CAD constraints, not verified transmission efficiency or measured gear contact loads."
          ],
          "images": [
            {
              "src": "assets/images/archive/epicyclic-exploded.png",
              "caption": "Exploded gear, carrier and shaft arrangement",
              "alt": "Exploded gear, carrier and shaft arrangement"
            }
          ]
        },
        {
          "heading": "Engineering outputs",
          "paragraphs": [
            "The work includes an exploded assembly drawing and a dimensioned carrier plate drawing for technical communication and checking part geometry."
          ],
          "images": [
            {
              "src": "assets/images/archive/epicyclic-drawing.png",
              "caption": "Exploded engineering drawing",
              "alt": "Exploded engineering drawing"
            },
            {
              "src": "assets/images/archive/epicyclic-carrier-drawing.png",
              "caption": "Carrier plate engineering drawing",
              "alt": "Carrier plate engineering drawing"
            }
          ]
        },
        {
          "heading": "Evidence boundary",
          "paragraphs": [
            "The portfolio shows model geometry and drawings, but it does not include measured backlash, tooth strength analysis, manufacturing inspection or gearbox testing."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "gimbal-pcb",
      "title": "ESP32 gimbal carrier PCB",
      "category": "electronics",
      "type": "Independent PCB design",
      "summary": "Compact two-layer KiCad carrier board for the ESP32 gimbal, integrating socketed ESP32 headers, remote IMU, servo outputs and external 5 V power distribution.",
      "technologies": "KiCad · PCB layout · DRC · Gerbers · Soldering",
      "github": "https://github.com/farhan10904/ESP32-Self-Levelling-Gimbal",
      "facts": [
        {
          "value": "70 × 55 mm",
          "label": "PCB footprint"
        },
        {
          "value": "2 layers",
          "label": "Manufactured carrier PCB"
        },
        {
          "value": "4 × M3",
          "label": "Mechanical mounting holes"
        },
        {
          "value": "1000 µF",
          "label": "Servo rail bulk capacitor"
        }
      ],
      "sections": [
        {
          "heading": "Why a carrier PCB",
          "paragraphs": [
            "Breadboard validation preceded the PCB. The carrier replaces loose jumper leads with labelled connectors while retaining a removable ESP32, a remote MPU6050 connector, separate roll/pitch servo headers and an external 5 V input.",
            "The board is a wiring and power-distribution carrier, not a custom bare ESP32 processing board."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/kicad-schematic-close-up.png",
              "caption": "KiCad schematic, connectors and decoupling capacitors",
              "alt": "KiCad schematic, connectors and decoupling capacitors"
            }
          ]
        },
        {
          "heading": "Routing and manufacturability",
          "paragraphs": [
            "The PCB was routed in two layers with wider paths for 5 V/GND, labelled silkscreen headers, a clearly identified USB orientation and four M3 mounts. Gerber and drill files were exported following KiCad design-rule checks."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/kicad-pcb-preview.png",
              "caption": "3D view of the routed ESP32 carrier",
              "alt": "3D view of the routed ESP32 carrier"
            },
            {
              "src": "assets/images/archive/gimbal-pcb-layout.png",
              "caption": "KiCad PCB editor routed layout",
              "alt": "KiCad PCB editor routed layout"
            }
          ]
        },
        {
          "heading": "Hardware integration",
          "paragraphs": [
            "Soldered boards were mounted in the gimbal enclosure alongside the battery/boost system. The 1000 µF bulk capacitor supports transient behaviour but does not prove the power rail can deliver the servo peak current. Servo supply instability was a limitation in the final system."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/Both%20Sides%20of%20PCB.png",
              "caption": "Manufactured PCB viewed from front and rear",
              "alt": "Manufactured PCB viewed from front and rear"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/Inside.png",
              "caption": "Integrated enclosure wiring and board",
              "alt": "Integrated enclosure wiring and board"
            }
          ]
        },
        {
          "heading": "Design decisions",
          "bullets": [
            "Keep the MPU6050 on the moving platform via a remote 4-pin connector",
            "Use socket headers to simplify component replacement and debugging",
            "Make the carrier removable with mechanical fasteners",
            "Separate high-current servo rail from ESP32 logic power"
          ],
          "paragraphs": [
            "PCB layout and fabrication evidence are available in the associated gimbal repository. Trace current capacity was not experimentally verified."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "night-light",
      "title": "EasyEDA light-sensitive night-light PCB",
      "category": "electronics",
      "type": "University electronics coursework",
      "summary": "LDR-controlled night-light circuit designed in EasyEDA from schematic to a compact PCB, using transistor switching and a 555 timer stage.",
      "technologies": "EasyEDA · LDR · Transistor · 555 timer · PCB routing",
      "facts": [
        {
          "value": "50 × 50 mm",
          "label": "Board-size coursework constraint"
        },
        {
          "value": "LDR",
          "label": "Light detection"
        },
        {
          "value": "555 timer",
          "label": "Timing and control stage"
        }
      ],
      "sections": [
        {
          "heading": "Circuit design",
          "paragraphs": [
            "The circuit combines light-dependent-resistor sensing, transistor switching and 555 timer logic. The schematic was constructed in EasyEDA before component footprints were transferred into board layout."
          ],
          "images": [
            {
              "src": "assets/images/archive/night-light-schematic.png",
              "caption": "EasyEDA schematic with LDR, transistor and 555 control circuitry",
              "alt": "EasyEDA schematic with LDR, transistor and 555 control circuitry"
            }
          ]
        },
        {
          "heading": "PCB layout",
          "paragraphs": [
            "The board work included footprint assignment, component placement, signal/power routing and silkscreen labels under a 50 × 50 mm dimensional constraint."
          ],
          "images": [
            {
              "src": "assets/images/archive/night-light-layout.png",
              "caption": "Routed night-light PCB layout",
              "alt": "Routed night-light PCB layout"
            }
          ]
        },
        {
          "heading": "Validation scope",
          "paragraphs": [
            "The Notion portfolio contains schematic and PCB layout screenshots. It does not establish that a physical PCB was fabricated, electrically tested or characterised for switching thresholds."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "opamp",
      "title": "TinkerCAD op-amp amplifier circuit",
      "category": "electronics",
      "type": "University circuit simulation",
      "summary": "Virtual dual-supply op-amp amplifier with oscilloscope probes used to examine signal amplification and waveform behaviour across stages.",
      "technologies": "TinkerCAD Circuits · Op-amps · Virtual oscilloscope",
      "facts": [
        {
          "value": "±12 V",
          "label": "Dual supply"
        },
        {
          "value": "Virtual",
          "label": "Breadboard and instrumentation"
        },
        {
          "value": "Waveforms",
          "label": "Input/output comparison"
        }
      ],
      "sections": [
        {
          "heading": "Circuit simulation",
          "paragraphs": [
            "A multi-stage amplifier was assembled in TinkerCAD using a split ±12 V supply. Oscilloscope channels were placed at several circuit nodes to view input and output signal behaviour."
          ],
          "images": [
            {
              "src": "assets/images/archive/opamp-tinkercad.png",
              "caption": "TinkerCAD circuit and virtual oscilloscope probes",
              "alt": "TinkerCAD circuit and virtual oscilloscope probes"
            }
          ]
        },
        {
          "heading": "Engineering objective",
          "paragraphs": [
            "The exercise focused on recognising amplification and waveform changes between stages, rather than fabrication. It is classified as a circuit simulation and university exercise."
          ],
          "bullets": [
            "Observe input and output waveform amplitude",
            "Compare signals at intermediate nodes",
            "Interpret amplifier behaviour with a dual-rail supply"
          ]
        },
        {
          "heading": "Evidence boundary",
          "paragraphs": [
            "The original material does not give a verified numerical gain, bandwidth, component tolerance sweep or physical breadboard measurements."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "trading",
      "title": "Algorithmic trading backtesting system",
      "category": "software",
      "type": "Independent Python software project",
      "summary": "Modular Python backtesting pipeline for historical market data, moving-average signals, execution simulation, risk parameters and structured trade logging.",
      "technologies": "Python · Pandas · NumPy · YFinance · Backtesting",
      "github": "https://github.com/farhan10904/Algorithmic-Trading-System",
      "facts": [
        {
          "value": "8 modules",
          "label": "Reported Python components"
        },
        {
          "value": "MA10/MA50",
          "label": "Signal strategy in Notion"
        },
        {
          "value": "11 equities",
          "label": "Reported historical-test universe"
        },
        {
          "value": "Costs",
          "label": "Slippage and fees considered"
        }
      ],
      "sections": [
        {
          "heading": "Pipeline architecture",
          "paragraphs": [
            "The system separates market-data ingestion, indicators, signal generation, simulated execution and logging. A central configuration file controls instrument lists, indicator windows, timeframes and risk parameters.",
            "The Notion portfolio describes API data through Alpha Vantage and YFinance; the current GitHub README specifically describes YFinance. The live repository should be treated as the authoritative source for current code behaviour."
          ],
          "images": [
            {
              "src": "assets/images/archive/trading-architecture.png",
              "caption": "Original project architecture screenshot",
              "alt": "Original project architecture screenshot"
            },
            {
              "src": "assets/images/archive/trading-module-structure.png",
              "caption": "Project modules and data-folder organisation",
              "alt": "Project modules and data-folder organisation"
            }
          ]
        },
        {
          "heading": "Signal generation and execution",
          "paragraphs": [
            "The documented strategy compares fast and slow moving averages to assign long (+1) or short (−1) signals. The backtester models trade entry and exit, stop-loss/take-profit settings, slippage and transaction fees."
          ],
          "bullets": [
            "Signal: MA10 > MA50 gives +1; MA10 < MA50 gives −1 in the Notion description",
            "Example configuration in Notion: 5% position sizing and 2% stop loss",
            "Trade logs record direction, entry, exit and simulated profit/loss"
          ],
          "images": [
            {
              "src": "assets/images/archive/trading-signals.png",
              "caption": "Moving-average crossover strategy visualisation",
              "alt": "Moving-average crossover strategy visualisation"
            },
            {
              "src": "assets/images/archive/trading-trade-logs.png",
              "caption": "CSV transaction log from the project",
              "alt": "CSV transaction log from the project"
            }
          ]
        },
        {
          "heading": "Reported results and uncertainty",
          "paragraphs": [
            "The Notion portfolio reports approximately 30–40% win rate across historical tests. The GitHub README includes a separate illustrative output with a different win rate. Without a specified run configuration and reproducible log, these figures should not be treated as a verified strategy benchmark.",
            "This is a software and simulation project, not evidence of successful live trading or a profitable investment strategy."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "gimbal-simulation",
      "title": "Wokwi ESP32 gimbal simulation",
      "category": "simulation",
      "type": "Pre-build embedded simulation",
      "summary": "Wokwi test of ESP32/MPU6050 wiring, dual-servo commands, OLED angle output and the Wi-Fi dashboard before gimbal hardware integration.",
      "technologies": "Wokwi · ESP32 · MPU6050 · Servo · OLED",
      "github": "https://github.com/farhan10904/ESP32-Self-Levelling-Gimbal",
      "facts": [
        {
          "value": "MPU6050",
          "label": "Simulated orientation sensing"
        },
        {
          "value": "2 servos",
          "label": "Roll/pitch outputs"
        },
        {
          "value": "OLED + web",
          "label": "Two feedback interfaces"
        }
      ],
      "sections": [
        {
          "heading": "Simulation objective",
          "paragraphs": [
            "Before assembling physical hardware, Wokwi was used to check the ESP32 wiring arrangement and the software path from MPU6050 measurements to control outputs and displays."
          ],
          "images": [
            {
              "src": "assets/images/archive/wokwi-gimbal-circuit.png",
              "caption": "Original Wokwi gimbal wiring simulation",
              "alt": "Original Wokwi gimbal wiring simulation"
            }
          ]
        },
        {
          "heading": "Dashboard and control",
          "paragraphs": [
            "The simulation exercised an OLED angle display, a Wi-Fi-served browser interface and stabilisation/control-mode logic. This reduced integration risk but did not establish final dynamic response of physical servo hardware."
          ],
          "images": [
            {
              "src": "assets/images/archive/wokwi-gimbal-dashboard.png",
              "caption": "Gimbal dashboard during simulated testing",
              "alt": "Gimbal dashboard during simulated testing"
            }
          ]
        },
        {
          "heading": "Relationship to full build",
          "paragraphs": [
            "This page documents a development stage of the separately featured physical ESP32 gimbal, not a second independent completed physical system."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "radar-simulation",
      "title": "Wokwi ESP32 radar simulation",
      "category": "simulation",
      "type": "Pre-build embedded simulation",
      "summary": "ESP32 ultrasonic scanner simulated in Wokwi with HC-SR04 input, 0–180° servo sweep, OLED readout and browser-based distance display.",
      "technologies": "Wokwi · ESP32 · HC-SR04 · SG90 · OLED",
      "github": "https://github.com/farhan10904/ESP32_Radar_Scanner",
      "facts": [
        {
          "value": "0–180°",
          "label": "Simulated servo scan"
        },
        {
          "value": "HC-SR04",
          "label": "Ultrasonic distance source"
        },
        {
          "value": "Dashboard",
          "label": "Wi-Fi visualisation"
        }
      ],
      "sections": [
        {
          "heading": "Virtual circuit",
          "paragraphs": [
            "The simulator was used to exercise the pin connections between an ESP32, HC-SR04 ultrasonic sensor, SG90 servo and OLED before physical breadboard assembly."
          ],
          "images": [
            {
              "src": "assets/images/archive/wokwi-radar-circuit.png",
              "caption": "Wokwi ESP32 radar scanner circuit",
              "alt": "Wokwi ESP32 radar scanner circuit"
            }
          ]
        },
        {
          "heading": "Visualisation and verification",
          "paragraphs": [
            "Simulated angle and distance values were displayed locally and on the browser dashboard. The work reduced basic interface and logic uncertainty ahead of the actual scanner build."
          ],
          "images": [
            {
              "src": "assets/images/archive/wokwi-radar-dashboard.png",
              "caption": "Simulated radar dashboard",
              "alt": "Simulated radar dashboard"
            }
          ]
        },
        {
          "heading": "Evidence boundary",
          "paragraphs": [
            "Wokwi simulation does not confirm ultrasonic ranging accuracy, servo backlash or the real-world sensor power-supply behaviour. Those were separate physical-build considerations."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "ansys",
      "title": "ANSYS Workbench simulation training",
      "category": "simulation",
      "type": "Self-directed engineering software training",
      "summary": "Training exercises in ANSYS Workbench covering rigid dynamics, transient structural response and thermal behaviour of air-cooled engine fins.",
      "technologies": "ANSYS Workbench · Structural simulation · Thermal analysis",
      "facts": [
        {
          "value": "ANSYS",
          "label": "Engineering simulation software"
        },
        {
          "value": "Structural",
          "label": "Rigid and transient dynamics"
        },
        {
          "value": "Thermal",
          "label": "Air-cooled fin analysis"
        }
      ],
      "sections": [
        {
          "heading": "Training scope",
          "paragraphs": [
            "The original portfolio records rigid dynamics, transient structural analysis and air-cooled engine fin thermal models, using engineering geometries to explore how geometry and added material affect predicted heat transfer."
          ],
          "images": [
            {
              "src": "assets/images/archive/ansys-engine.png",
              "caption": "Engine geometry used in ANSYS exercises",
              "alt": "Engine geometry used in ANSYS exercises"
            }
          ]
        },
        {
          "heading": "Thermal results",
          "paragraphs": [
            "Contour images were used to compare the temperature distribution in different fin arrangements. The original notes describe diminishing returns when additional material is added beyond an effective geometry."
          ],
          "images": [
            {
              "src": "assets/images/archive/ansys-thermal-1.png",
              "caption": "ANSYS thermal result and geometry",
              "alt": "ANSYS thermal result and geometry"
            },
            {
              "src": "assets/images/archive/ansys-thermal-2.png",
              "caption": "Additional ANSYS thermal simulation view",
              "alt": "Additional ANSYS thermal simulation view"
            },
            {
              "src": "assets/images/archive/ansys-thermal-3.png",
              "caption": "Thermal contour from another design iteration",
              "alt": "Thermal contour from another design iteration"
            }
          ]
        },
        {
          "heading": "Evidence boundary",
          "paragraphs": [
            "The screenshots and notes support completion of training exercises, but do not document a mesh independence study, boundary-condition table, exact heat-transfer rates or physical temperature validation. These are not claimed."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "matlab",
      "title": "MATLAB and Simulink control-system training",
      "category": "simulation",
      "type": "MathWorks learning courses",
      "summary": "MATLAB/Simulink training in dynamic system models, signal flow, transfer functions and elementary closed-loop control.",
      "technologies": "MATLAB · Simulink · Transfer functions · Feedback control",
      "facts": [
        {
          "value": "Simulink",
          "label": "Block-diagram system models"
        },
        {
          "value": "Controls",
          "label": "Elementary feedback loops"
        },
        {
          "value": "Courses",
          "label": "MathWorks Onramp training"
        }
      ],
      "sections": [
        {
          "heading": "Learning objectives",
          "paragraphs": [
            "The training covered transfer functions, integrators, feedback loops and practical block-diagram modelling in MATLAB and Simulink. Examples in the original material include thermostats, DC motors and switching circuits."
          ],
          "images": [
            {
              "src": "assets/images/archive/simulink-system.png",
              "caption": "Simulink dynamic-system training model",
              "alt": "Simulink dynamic-system training model"
            }
          ]
        },
        {
          "heading": "Control structure",
          "paragraphs": [
            "The course exercises use simulation blocks to represent control signals, feedback paths and system response. This is recorded as software training, rather than original closed-loop hardware validation."
          ],
          "images": [
            {
              "src": "assets/images/archive/simulink-feedback.png",
              "caption": "Simulink feedback-control model",
              "alt": "Simulink feedback-control model"
            }
          ]
        },
        {
          "heading": "Evidence and credentials",
          "paragraphs": [
            "The original Notion portfolio lists MATLAB Onramp and Simulink Onramp (2026). It does not contain uploaded PDF certificates within the supplied export."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    },
    {
      "id": "aerofoil",
      "title": "NACA 0020 aerofoil wind-tunnel lab",
      "category": "simulation",
      "type": "University experimental fluid dynamics coursework",
      "summary": "Wind-tunnel pressure measurements on a NACA 0020 aerofoil, with pressure coefficients, angle-of-attack changes and Reynolds-number comparisons.",
      "technologies": "Wind tunnel · Pressure tapping · Aerodynamics · Data analysis",
      "facts": [
        {
          "value": "14 taps",
          "label": "Surface-pressure locations"
        },
        {
          "value": "0–22.5°",
          "label": "Angle-of-attack range"
        },
        {
          "value": "3.65–9.43 × 10⁴",
          "label": "Reported Reynolds-number range"
        }
      ],
      "sections": [
        {
          "heading": "Experimental method",
          "paragraphs": [
            "The university lab used 14 surface taps on a NACA 0020 aerofoil to measure pressure distributions in a subsonic wind tunnel. Pressure coefficients and lift coefficients were evaluated over varying angle of attack and Reynolds number."
          ],
          "images": [
            {
              "src": "assets/images/archive/aerofoil-cp-low.png",
              "caption": "Pressure-coefficient distributions at lower angles of attack",
              "alt": "Pressure-coefficient distributions at lower angles of attack"
            }
          ]
        },
        {
          "heading": "Angle-of-attack behaviour",
          "paragraphs": [
            "The original report summary describes a stronger leading-edge suction peak with increasing angle until the peak collapses near 22.5°, interpreted as evidence of flow separation and stall onset."
          ],
          "images": [
            {
              "src": "assets/images/archive/aerofoil-cp-high.png",
              "caption": "Pressure distributions at larger angles of attack",
              "alt": "Pressure distributions at larger angles of attack"
            }
          ]
        },
        {
          "heading": "Reynolds-number comparison",
          "paragraphs": [
            "The recorded notes place peak measured lift coefficient around Re ≈ 6.15 × 10⁴, with reduced lift at the lower and upper values within the tested range."
          ],
          "images": [
            {
              "src": "assets/images/archive/aerofoil-reynolds-lift.png",
              "caption": "Lift coefficient versus Reynolds number chart",
              "alt": "Lift coefficient versus Reynolds number chart"
            }
          ]
        },
        {
          "heading": "Limits of the supplied evidence",
          "paragraphs": [
            "The Notion export contains the result plots and written interpretation but not the raw pressure table, calibration records, full uncertainty calculations or original lab report. The observations are presented as coursework results, not independently verified aerodynamic correlations."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": ""
    }

  ]
};
