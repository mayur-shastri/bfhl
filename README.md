# BFHL Data Processing API

This is a simple REST API built with Node.js and Express that processes an array of data and returns classified lists of numbers, alphabets, and special characters, along with a sum and a custom concatenated string.

---

## Features

-   Classifies input data into even numbers, odd numbers, alphabets, and special characters.
-   Calculates the sum of all numbers in the input.
-   Returns a reversed, alternating-case string of all alphabets.
-   Simple and lightweight with no external dependencies besides Express.

---

## Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd <your-project-directory>
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```

---

## Running the Server

To start the local development server, run the following command:

```sh
node app.js
```

## API Endpoint

Main Endpoint for processing data:

```sh
POST /bfhl
```
Request Body:

The request must be a JSON object with a data key containing an array of strings.
```sh
{
    "data": ["a", "1", "334", "4", "R", "$"]
}
```

