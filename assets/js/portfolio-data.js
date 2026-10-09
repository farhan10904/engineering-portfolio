/* Editable project catalogue. Update entries and showcaseOrder to change the homepage. */
window.FARHAN_PORTFOLIO = {
  "categories": [
    {
      "id": "embedded",
      "label": "Embedded systems & hardware"
    },
    {
      "id": "software",
      "label": "Software & systems"
    },
    {
      "id": "cad",
      "label": "CAD & mechanical design"
    },
    {
      "id": "electronics",
      "label": "Electronics design"
    },
    {
      "id": "simulation",
      "label": "Simulation & analysis"
    }
  ],
  "projects": [
    {
      "id": "gimbal",
      "title": "ESP32 dual-axis PID gimbal",
      "category": "embedded",
      "sidebarTitle": "Self-levelling gimbal",
      "featured": true,
      "visible": true,
      "ready": true,
      "page": "projects/gimbal.html",
      "accent": "mint",
      "label": "CONTROL / HARDWARE",
      "summary": "Built a two-axis ESP32 gimbal with MPU6050 feedback, limited-angle PID correction, custom KiCad PCB and printed frame.",
      "technologies": "ESP32 · C/C++ · MPU6050 · PID · KiCad · Fusion 360",
      "github": "https://github.com/farhan10904/ESP32-Self-Levelling-Gimbal",
      "medium": "",
      "report": "",
      "image": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/Diagonal.png",
      "details": []
    },
    {
      "id": "robot",
      "title": "Surgical instrument carrier robot",
      "category": "software",
      "sidebarTitle": "Surgical instrument carrier robot",
      "featured": true,
      "visible": true,
      "ready": true,
      "page": "projects/robot.html",
      "accent": "sky",
      "label": "ROBOTICS / SOFTWARE",
      "summary": "Embedded navigation and instrument-delivery software for an eight-person university robotics project.",
      "technologies": "Arduino · C/C++ · IR sensing · Ultrasonic sensing",
      "github": "https://github.com/farhan10904/Surgical-Instrument-Carrier-Robot",
      "medium": "",
      "report": "",
      "image": "https://raw.githubusercontent.com/farhan10904/Surgical-Instrument-Carrier-Robot/main/images/Overview.jpg",
      "details": []
    },
    {
      "id": "brayton",
      "title": "Brayton-cycle gas turbine simulator",
      "category": "simulation",
      "sidebarTitle": "Brayton-cycle simulator",
      "featured": true,
      "visible": true,
      "ready": true,
      "page": "projects/brayton.html",
      "accent": "amber",
      "label": "ENERGY / SIMULATION",
      "summary": "Python gas turbine model comparing ideal and real Brayton cycles with pressure-ratio sweeps, exergy analysis and saved performance results.",
      "technologies": "Python · NumPy · Pandas · Matplotlib · Thermodynamics",
      "github": "https://github.com/farhan10904/Brayton-Cycle-Turbine-Simulator",
      "medium": "",
      "report": "",
      "image": "https://raw.githubusercontent.com/farhan10904/Brayton-Cycle-Turbine-Simulator/main/Graphs/Power_vs_Pressure_Ratio.png",
      "details": []
    },
    {
      "id": "radar",
      "title": "ESP32 ultrasonic radar scanner",
      "category": "embedded",
      "sidebarTitle": "Radar scanner",
      "featured": true,
      "visible": true,
      "ready": true,
      "page": "projects/radar.html",
      "accent": "violet",
      "label": "SENSING / EMBEDDED",
      "summary": "Built and tested an ESP32 ultrasonic scanner with 180° servo sweep, OLED readout and live Wi-Fi radar dashboard.",
      "technologies": "ESP32 · HC-SR04 · SG90 · OLED · MT3608 · Wi-Fi",
      "github": "https://github.com/farhan10904/ESP32_Radar_Scanner",
      "medium": "",
      "report": "",
      "image": "https://raw.githubusercontent.com/farhan10904/ESP32_Radar_Scanner/main/docs/images/Actual%20Dashboard.png",
      "details": []
    },
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
      "summary": "Parametric SolidWorks assembly of a single-plate automotive clutch with roughly 40 components, constrained rotational relationships, sectional views, an exploded drawing and BOM.",
      "technologies": "SolidWorks · Assembly mates · Engineering drawings · BOM",
      "facts": [
        {
          "value": "~40",
          "label": "Modelled and standard components"
        },
        {
          "value": "Fully mated",
          "label": "Concentricity and rotational freedom"
        },
        {
          "value": "Section views",
          "label": "Internal component inspection"
        },
        {
          "value": "BOM",
          "label": "Exploded technical drawing"
        }
      ],
      "sections": [
        {
          "heading": "Design brief and engineering objective",
          "paragraphs": [
            "This university CAD coursework recreated the component structure of a single-plate automotive friction clutch in SolidWorks. The objective was to represent the physical arrangement of the flywheel, friction disc, pressure plate, diaphragm spring, housing and standard fasteners in a single constrained mechanical assembly.",
            "Approximately 40 parts were used. I modelled the major structural components from scratch and used SolidWorks library items for standard hardware rather than creating unnecessary duplicate bolt and washer geometry."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/Single-Plate-Clutch-Assembly/main/Images/clutch-assembly.png",
              "caption": "Complete SolidWorks clutch assembly",
              "alt": "Assembled single-plate automotive clutch model"
            }
          ]
        },
        {
          "heading": "Part modelling and mechanical interfaces",
          "paragraphs": [
            "Parts were designed individually before assembly. The friction disc sits between the flywheel and pressure-plate surfaces; the diaphragm spring and housing establish the surrounding compression mechanism.",
            "The design work emphasised fit, component alignment and assembly structure. It did not calculate dynamic engagement torque, friction heating or detailed material failure life."
          ],
          "bullets": [
            "Individual flywheel, clutch disc, pressure plate and diaphragm spring models",
            "Housing and standard fasteners assembled into a compact mechanism",
            "Component dimensions checked in the context of the complete assembly"
          ]
        },
        {
          "heading": "Mates and rotational constraints",
          "paragraphs": [
            "Concentric mates were used to align the flywheel, friction disc and related rotating features along a common axis. Other mates restricted unwanted relative displacement while retaining the intended degrees of rotational motion.",
            "Fully constraining an assembly requires distinguishing geometry that must remain fixed from parts that need to rotate or translate. This was a central technical task in the coursework rather than simply positioning shapes for a render."
          ]
        },
        {
          "heading": "Section-view verification",
          "paragraphs": [
            "Sectional geometry was used to inspect component order, axial clearance and the relationship between friction surfaces, diaphragm spring and housing. This provides a more meaningful check than an exterior render because interference and assembly orientation are visible."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/Single-Plate-Clutch-Assembly/main/Images/clutch-section.png",
              "caption": "Internal clutch components shown in section view",
              "alt": "Section of SolidWorks clutch showing pressure plate, disc and surrounding components"
            }
          ]
        },
        {
          "heading": "Exploded assembly and production documentation",
          "paragraphs": [
            "An exploded view communicates how separate parts occupy their positions in the assembled system and helps explain the assembly sequence.",
            "The final engineering drawing includes a title block, labelled component balloons and a bill of materials. The drawing supports manufacturing communication and component identification; it is not an inspection record or a verified manufacturing process plan."
          ],
          "images": [
            {
              "src": "https://raw.githubusercontent.com/farhan10904/Single-Plate-Clutch-Assembly/main/Images/clutch-exploded.png",
              "caption": "Exploded view revealing the component arrangement",
              "alt": "Exploded automotive clutch SolidWorks CAD assembly"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/Single-Plate-Clutch-Assembly/main/Images/clutch-drawing.png",
              "caption": "Engineering assembly drawing with balloons and bill of materials",
              "alt": "Clutch mechanical engineering drawing"
            }
          ]
        },
        {
          "heading": "Outcomes, evidence and further validation",
          "paragraphs": [
            "The documented outcome is a constrained parametric CAD assembly with section, exploded and engineering drawing outputs. This establishes experience with parts, mates, subassembly reasoning and technical drawings.",
            "The original material does not include physical manufacture, torque transmission testing, engagement force calculations, thermal analysis or fatigue validation. Future work could estimate clamp force, slip energy and required friction area using measured or sourced material properties."
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": "",
      "github": "https://github.com/farhan10904/Single-Plate-Clutch-Assembly",
      "image": "https://raw.githubusercontent.com/farhan10904/Single-Plate-Clutch-Assembly/main/Images/clutch-assembly.png",
      "showcaseOrder": 2,
      "cardSummary": "~40-part SolidWorks mechanism and drawings."
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
              "src": "https://raw.githubusercontent.com/farhan10904/Epicyclic-Gearbox-Assembly/main/Images/epicyclic-assembly.png",
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
              "src": "https://raw.githubusercontent.com/farhan10904/Epicyclic-Gearbox-Assembly/main/Images/epicyclic-exploded.png",
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
              "src": "https://raw.githubusercontent.com/farhan10904/Epicyclic-Gearbox-Assembly/main/Images/epicyclic-drawing.png",
              "caption": "Exploded engineering drawing",
              "alt": "Exploded engineering drawing"
            },
            {
              "src": "https://raw.githubusercontent.com/farhan10904/Epicyclic-Gearbox-Assembly/main/Images/epicyclic-carrier-drawing.png",
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
      "report": "",
      "github": "https://github.com/farhan10904/Epicyclic-Gearbox-Assembly",
      "image": "https://raw.githubusercontent.com/farhan10904/Epicyclic-Gearbox-Assembly/main/Images/epicyclic-assembly.png",
      "showcaseOrder": 3,
      "cardSummary": "Planetary gearbox assembly and engineering CAD."
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
      "report": "",
      "showcaseOrder": 4,
      "cardSummary": "Custom KiCad two-layer carrier for an ESP32 gimbal.",
      "image": "https://raw.githubusercontent.com/farhan10904/ESP32-Self-Levelling-Gimbal/main/docs/images/kicad-pcb-preview.png"
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
      "report": "",
      "showcaseOrder": 5,
      "cardSummary": "EasyEDA LDR and 555 timer PCB coursework."
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
      "summary": "Python data-to-backtest pipeline for 11-equity historical analysis, MA10/MA50 signals, risk rules, transaction-cost assumptions and recorded trades.",
      "technologies": "Python · Pandas · NumPy · yfinance · Alpha Vantage · Backtesting",
      "github": "https://github.com/farhan10904/Algorithmic-Trading-System",
      "facts": [
        {
          "value": "8 files",
          "label": "Main, config and six modules"
        },
        {
          "value": "MA10 / MA50",
          "label": "Configurable signal generation"
        },
        {
          "value": "5%",
          "label": "Configured trade allocation"
        },
        {
          "value": "CSV logs",
          "label": "Trade-level and summary exports"
        }
      ],
      "sections": [
        {
          "heading": "Engineering problem and scope",
          "paragraphs": [
            "I developed a modular Python pipeline to evaluate rule-based equity strategies using historical price data. Rather than placing live trades, the system downloads and prepares data, calculates indicators, generates position signals, simulates exits and transaction costs, and exports a traceable log for subsequent analysis.",
            "The original development report describes tests on 11 equities, including AAPL, NVDA and TSLA. The system was structured to keep data handling, strategy logic, execution rules and reporting separate, so changes to a strategy did not require rewriting the entire workflow."
          ],
          "images": [
            {
              "src": "assets/images/archive/trading-architecture.png",
              "caption": "Original software architecture from the development portfolio",
              "alt": "Python backtesting system module architecture"
            },
            {
              "src": "assets/images/archive/trading-module-structure.png",
              "caption": "Repository organisation: data, modules, scripts and logs",
              "alt": "Python project file and folder structure"
            }
          ]
        },
        {
          "heading": "Modular software architecture",
          "paragraphs": [
            "The committed repository has project/Main.py as the command-line launcher, project/config.py for parameters and six modules: price_fetcher.py, indicators.py, strategy.py, backtest.py, runner.py and utils.py. The runner coordinates bulk downloads, feature generation, backtests and CSV output.",
            "The launcher presents options for price alerts, backtests, analysis preparation, trade exports, historical downloads and profit summaries. The real-time price-alert utility uses an independent price threshold; it should not be confused with the MA10/MA50 backtest strategy."
          ],
          "bullets": [
            "Data acquisition - Alpha Vantage for price quotes and yfinance for historical OHLC data",
            "Feature calculation - rolling MA10/MA50, price percentage change and trend direction",
            "Signal generation - assign long (+1) or short (-1) states from moving-average comparison",
            "Backtesting - process entries, exits, stop-loss/take-profit events and costs",
            "Reporting - per-symbol trade logs, aggregate transaction CSVs and profit summaries"
          ]
        },
        {
          "heading": "Historical data and indicators",
          "paragraphs": [
            "Historical data is downloaded per symbol and written to structured folders such as project/data/Hourly/ and project/data/Daily/. The current configuration requests hourly data and provides a fixed-date option and a rolling historical-period option.",
            "The indicator module uses pandas rolling means to generate MA10 and MA50, percentage changes between prices and a trend indicator from the MA50 change. Analysis files contain the source prices, calculated features, raw Signal values and carried Position values.",
            "The code does not establish that every requested date range is available at every sampling interval from yfinance; provider retention limits need to be checked when reproducing runs."
          ]
        },
        {
          "heading": "Moving-average strategy and position state",
          "paragraphs": [
            "The strategy compares the fast and slow averages at each timestamp. MA10 greater than MA50 assigns +1 (long), MA10 less than MA50 assigns -1 (short), and equal averages assign zero. A separate position-building function carries the latest nonzero direction forward.",
            "This is a simple trend-following baseline, not a machine-learning prediction model. The moving-average windows are declared in the configuration file so they can be changed without editing the signal-generation function."
          ],
          "code": {
            "language": "python",
            "caption": "Source function: project/modules/strategy.py (Fast_MA and Slow_MA are imported from config.py)",
            "text": "def generate_signals(df):\n    \"\"\"\n    generate_signals - generates +1, 0, -1 signals based\n    on Fast_MA and Slow_MA crossovers\n    \"\"\"\n    df[\"Signal\"] = 0\n    \n    df.loc[df[Fast_MA] > df[Slow_MA], \"Signal\"] = 1\n    df.loc[df[Fast_MA] < df[Slow_MA], \"Signal\"] = -1\n    \n    return df"
          },
          "images": [
            {
              "src": "assets/images/archive/trading-signals.png",
              "caption": "Original MA10/MA50 strategy visualisation",
              "alt": "Market data and moving average crossover strategy"
            }
          ]
        },
        {
          "heading": "Execution simulation and risk parameters",
          "paragraphs": [
            "The backtester iterates chronologically through prepared price rows, opening or closing long/short positions when the recorded direction changes. It also implements percentage-based stop-loss and take-profit exits and closes remaining open trades at the end of the test data.",
            "In the committed configuration, a trade allocates 5% of the available simulated balance. Stop loss is configured at -2%, take profit at +2%, slippage at 0.0005 (0.05%), fixed fee at 0.1 and percentage fee at 0.001 (0.1%). These are simulation settings, not exchange quotes or measured execution costs."
          ],
          "bullets": [
            "Position size - balance × risk_per_trade, converted into simulated share quantity",
            "Transaction prices - modified using configured slippage on entry/exit",
            "Exit conditions - stop-loss, take-profit, direction change or final sample",
            "Trade log - symbol, entry/exit timestamps and prices, direction and simulated profit"
          ]
        },
        {
          "heading": "Logging and result interpretation",
          "paragraphs": [
            "The source exports individual symbol trade logs and a combined transactions file. A profit-summary routine aggregates total profit, win rate, average win/loss and largest profit/loss into text and CSV summaries.",
            "The original portfolio reported approximately 30–40% win rate on particular historical tests, but no matching run configuration, dated input dataset and complete test log were included with that statement. The repository README gives a different illustrative result. Neither should be represented as a verified, reproducible performance benchmark.",
            "A win rate alone is insufficient to assess a strategy: average win, average loss, costs, drawdown and the number and timing of trades matter."
          ],
          "images": [
            {
              "src": "assets/images/archive/trading-trade-logs.png",
              "caption": "Original structured trading transaction log",
              "alt": "Saved trade CSV with entry, exit and profit fields"
            }
          ]
        },
        {
          "heading": "Engineering review and limitations",
          "paragraphs": [
            "The value of this project is in its modular Python architecture and ability to inspect individual simulated decisions. It is not proof of profitable trading. Further validation should include a frozen historical dataset, parameter and run-date metadata, automated tests, benchmark comparisons and a reproducible command to regenerate all results.",
            "The current backtesting implementation should be reviewed for potential same-bar signal/execution bias and the consistent application of transaction fees to quantity before making stronger performance claims. A walk-forward or out-of-sample evaluation would be a useful next step.",
            "The real-time price-alert option simply compares the latest price with a threshold; it is separate from the moving-average backtest."
          ],
          "bullets": [
            "Add unit tests for long/short transitions and stop-loss/take-profit events",
            "Verify position accounting, fees, slippage and end-of-test liquidation",
            "Enforce next-bar execution after a signal is generated",
            "Save an exact data snapshot, code version and config for each reported run",
            "Add equity curves, maximum drawdown and a passive benchmark"
          ]
        }
      ],
      "featured": false,
      "visible": true,
      "ready": true,
      "medium": "",
      "report": "",
      "showcaseOrder": 1,
      "cardSummary": "Python strategy pipeline, risk rules and backtesting."
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
      "report": "",
      "showcaseOrder": 6,
      "cardSummary": "Wind-tunnel pressure distributions and lift analysis."
    }
  ]
};
