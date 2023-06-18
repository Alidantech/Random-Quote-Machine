export function changeColors() {
  // Define the range of RGB values for less bright colors
  const minRGB = 50; // Minimum RGB value (0-255)
  const maxRGB = 200; // Maximum RGB value (0-255)

  // Generate random RGB values for background color within the defined range
  const randomRed = Math.floor(Math.random() * (maxRGB - minRGB + 1)) + minRGB;
  const randomGreen = Math.floor(Math.random() * (maxRGB - minRGB + 1)) + minRGB;
  const randomBlue = Math.floor(Math.random() * (maxRGB - minRGB + 1)) + minRGB;

  // Convert RGB values to CSS format (e.g., rgb(255, 0, 0))
  const color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  // Set the background and text colors using plain JavaScript
  document.body.style.backgroundColor = color;
  document.getElementById('text').style.color = color;
}
