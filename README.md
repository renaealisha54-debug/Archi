# Archi# CodeArchitect IDE

CodeArchitect is an intelligent project management tool that automatically parses raw code snippets, detects the project language, and organizes them into a production-ready file structure.

## Features
- **Smart Detection:** Automatically identifies language (Flutter, React, Python, etc.) from raw input.
- **Auto-Scaffolding:** Creates directory trees and component files based on framework best practices.
- **Code Dissection:** Paste large code blocks into the terminal to automatically split them into modular files.
- **Project Export:** Zip entire project structures with one click.

## Getting Started
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use the terminal interface to input code or manage projects.

## Logic Implementation
The **Dissector** engine uses Abstract Syntax Trees (AST) to analyze code flow and imports, allowing it to accurately split components into separate files without breaking logic.
