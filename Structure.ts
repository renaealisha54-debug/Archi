/archi-app
├── /assets              # Icons and UI styles
├── /core
│   ├── scanner.ts       # Language identification logic
│   ├── dissector.ts     # Main logic to parse and split code
│   └── architect.ts     # Project folder/file generation logic
├── /fs
│   ├── manager.ts       # Cross-platform file/directory creation
│   └── zip.ts           # Archiving logic for project export
├── /terminal
│   ├── xterm.ts         # Terminal interface wrapper
│   └── commands.ts      # Terminal command definitions
├── /templates           # Boilerplate presets
│   ├── react.json
│   ├── flutter.json
│   └── node.json
├── package.json         # Archi dependencies
└── README.md            # Documentation
