const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input: 'data' must be array.",
      });
    }
    // Changed user details as requested
    const userId = "mayur_shastri";
    const email = "shastrimayur2993@gmail.com";
    const rollNumber = "22BBS0016";
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let alphabetChars = "";

    data.forEach((item) => {
      if (!isNaN(item)) {
        const num = parseInt(item, 10);
        if (num % 2 === 0) {
          evenNumbers.push(String(num));
        } else {
          oddNumbers.push(String(num));
        }
        sum += num;
      } else if (/[a-zA-Z]/.test(item)) {
        alphabets.push(item.toUpperCase());
        alphabetChars += item;
      } else {
        specialCharacters.push(item);
      }
    });
    const reversedAlphabets = alphabetChars.split("").reverse().join("");
    let concatString = "";
    for (i = 0; i < reversedAlphabets.length; i++) {
      if (i % 2 === 0) concatString += reversedAlphabets[i].toUpperCase();
      else concatString += reversedAlphabets[i].toLowerCase();
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error Occurred:", error);
    res.status(500).json({
      is_success: false,
      error: "An internal server error occurred.",
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});