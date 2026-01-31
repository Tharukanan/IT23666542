# IT23666542 - Tamil Transliteration Testing Project

## 📋 Project Overview

This project contains automated test cases for validating a Tamil transliteration website ([tamil.changathi.com](https://tamil.changathi.com/)). The tests verify the accuracy of converting Thanglish (Tamil written in English letters) to Tamil script.

## 🎯 Test Coverage

### Test Categories

| Category | Count | Description |
|----------|-------|-------------|
| **Positive Functional (Pos_Fun)** | 24 | Valid inputs where translation is expected to be perfect |
| **Negative Functional (Neg_Fun)** | 10 | Edge cases, complex mixed language, or ambiguity scenarios |
| **UI Tests (Pos_UI)** | 1 | Verifying real-time update capability |
| **Total** | **35** | |

### Test Dimensions

#### Domain Coverage
- Daily language usage
- Greeting/request
- Mixed Thanglish + English
- Slang
- Punctuation/numbers
- Formatting

#### Grammar Coverage
- Simple/Compound/Complex sentences
- Interrogative
- Imperative
- Tense (Past/Present/Future)
- Negation
- Plural

#### Length Categories
- **S (Short)**: ≤30 characters
- **M (Medium)**: 31-299 characters
- **L (Long)**: ≥300 characters

## 🛠️ Technology Stack

- **Test Framework**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Runtime**: Node.js
- **Documentation**: Excel (Test Cases)

## 📁 Project Structure

```
IT23666542/
├── IT23666542.spec.ts          # Main test file with 35 test cases
├── Assignment 1 - Test cases-2.xlsx  # Excel documentation
├── package.json                # Node.js dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/IT23666542.git
   cd IT23666542
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

### Running Tests

Run all tests:
```bash
npx playwright test IT23666542.spec.ts
```

Run specific test category:
```bash
# Run only positive functional tests
npx playwright test --grep "Pos_Fun"

# Run only negative functional tests
npx playwright test --grep "Neg_Fun"

# Run only UI tests
npx playwright test --grep "Pos_UI"
```

Run with extended timeout (for slow connections):
```bash
npx playwright test IT23666542.spec.ts --timeout=60000
```

## 📊 Test Results

All 35 tests are designed to pass, validating:
- ✅ Basic transliteration accuracy
- ✅ Tense handling (past, present, future)
- ✅ Negation forms
- ✅ Plural forms
- ✅ Mixed language (Thanglish + English)
- ✅ Special characters and numbers
- ✅ Slang and colloquial expressions
- ✅ Regional dialect variations
- ✅ Real-time UI updates

## 📝 Test Case Documentation

Detailed test case documentation is available in `Assignment 1 - Test cases-2.xlsx` with the following columns:
- TC ID
- Test case name
- Input length type
- Input (Thanglish)
- Expected output (Tamil)
- Actual output
- Status
- Accuracy justification
- What is covered by the test

## 👨‍💻 Author

**Student ID**: IT23666542

## 📄 License

This project is for educational purposes as part of coursework assignment.

---

*Last Updated: January 2026*
