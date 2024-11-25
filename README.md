# Fake Data Generator
## Overview

Fake Data Generator is a simple and lightweight NPM package designed for developers who need fake data for testing or seeding databases. The package includes functions for generating random names, email addresses, and fake card details.

## Features

- Generate realistic **names** (first name, last name, and full name).
- Generate random but realistic **email addresses**.
- Generate **fake credit card details** (card number, CVV, expiry date, and more).

## Installation

Install the package using npm:

```bash
npm install fake-data-generator
```

or with yarn:

```bash
yarn add fake-data-generator
```

## Usage

### Importing the Package

```javascript
const { fake_email, fake_name, fake_card_details } = require('fake-data-generator');
```

### Generating Fake Email

```javascript
const email = fake_email();
console.log(email); // e.g., AlexanderSmith@gmail.com
```

### Generating Fake Name

```javascript
const name = fake_name();
console.log(name);
// Output:
// {
//   full_Name: 'Sophia Johnson',
//   first_name: 'Sophia',
//   last_name: 'Johnson'
// }
```

### Generating Fake Card Details

```javascript
const cardDetails = fake_card_details();
console.log(cardDetails);
// Output:
// {
//   name: { full_Name: 'Lucas Brown', first_name: 'Lucas', last_name: 'Brown' },
//   password: '1234',
//   expiry_date: '03/2029',
//   cvv: '567',
//   card_number: '123456789012345'
// }
```

## API Reference

### `fake_email()`

Generates a random email address using a realistic name.

**Returns:**  
A string representing an email address.  
Example: `JohnDoe@gmail.com`.

---

### `fake_name()`

Generates a random name.

**Returns:**  
An object containing:
- `full_Name`: Full name as a single string.
- `first_name`: First name.
- `last_name`: Last name.

---

### `fake_card_details()`

Generates fake credit card details.

**Returns:**  
An object containing:
- `name`: An object with the user's full name, first name, and last name.
- `password`: A 4-digit random password.
- `expiry_date`: A random expiry date in `MM/YYYY` format.
- `cvv`: A 3-digit CVV code.
- `card_number`: A 15-digit card number.
