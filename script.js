function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

     // Regular expression pattern to match 'pet_' followed by alphanumeric characters
     let pattern = /^pet_[a-zA-Z0-9]+$/;

     // Check if input matches the pattern
     if (pattern.test(input)) {
         result = 'Valid Syntax \u{1F7E2}';
     } else {
         result = 'Invalid Syntax \u{1F534}';
     }
    // Update the result element with the validation result
            document.getElementById('result').innerText = result;
}