## STDM-lab-1

# Quadratic Equation CLI Solver
A command-line utility for solving quadratic equations of the form:
```bash
a x^2 + b x + c = 0
```

The application can operate in two modes:
- Interactive mode — coefficients are entered manually via console prompts.
- Non Interactive mode — coefficients are read from a provided file.

## Getting Started
### Prerequisites
- Node.js (version 18 or newer recommended)

### Installation
Clone the repository and install the necessary dependencies:
```bash
git clone https://github.com/KuHavoc/STDM-lab-1
cd STDM-lab-1
npm install
```

## Build Instructions
Before running the application, compile the TypeScript source code:
```bash
npx tsc
```
The compiled JavaScript files will be located in the dist folder.

## Usage
### Interactive Mode
Run the application without any arguments to enter interactive mode:
```bash
node dist/main.js
```
You will be prompted to enter values for <b>a</b>, <b>b</b>, and <b>c</b>.

The program will validate your inputs and then display the equation along with its real roots (if any).

### Non Interactive Mode
Provide a file path as a command-line argument to solve the equation using values from a file:
```bash
node dist/main.js path/to/values.txt
```
#### Example:
```bash
node dist/main.js value.txt
```

## Input File Format
For Non Interactive mode, the input file must meet the following criteria:
- Contain exactly three real numbers (a, b, c) separated by a single space.
- The file must end with a newline character (\n).
- Numbers use a dot (.) as a decimal separator.

## [Revert Commit](https://github.com/KuHavoc/STDM-lab-1/commit/0cc4c43b1a6740f0c6bff23701b9fafd3faea9d1)