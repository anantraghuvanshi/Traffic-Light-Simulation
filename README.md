# Traffic Light Simulation

This project simulates a traffic light using HTML, CSS, and plain JavaScript. It cycles through three states (red, green, and yellow) indefinitely, mimicking the behavior of a real-world traffic signal.

## File Structure

- **index.html**  
  Contains the HTML structure, including SEO-friendly meta tags, semantic elements (header, main, footer), and links to external CSS and JavaScript files.

- **styles.css**  
  Provides styling for the traffic light container and its individual lights, arranged in a vertical layout to resemble an actual traffic signal.

- **script.js**  
  Implements the logic to cycle through the traffic light states at specified intervals using plain JavaScript.

## How It Works

1. **HTML Structure**:  
   The HTML file defines a semantic layout with a header (with a page title), a main section for the traffic light, and a footer. SEO meta tags (description, keywords, author, viewport) are added to help search engines understand the content of the page.

2. **CSS Styling**:  
   The CSS file styles the traffic light container and the three circular lights. Each light is dimmed by default, and the `.active` class brightens the corresponding light when it is active.

3. **JavaScript Behavior**:  
   The JavaScript file defines an array of objects, each specifying a light's color and display duration. The `changeLight()` function cycles through these states, updates the active light, and uses `setTimeout` to schedule the next change, creating an infinite loop.

## SEO Best Practices

To improve the SEO of this project, the following enhancements have been made:
- **Meta Tags**:  
  Added meta tags for description, keywords, and author in the `<head>` of `index.html` to provide search engines with relevant information about the page.
- **Semantic HTML**:  
  Utilized semantic elements such as `<header>`, `<main>`, and `<footer>` to improve content structure and accessibility.
- **Responsive Design**:  
  Included the viewport meta tag to ensure the site displays well on mobile devices.
- **Descriptive Title**:  
  Chose a descriptive title that accurately reflects the content and purpose of the page.

## Usage

1. **Clone or Download**  
   Clone the repository or download the project files to your local machine.

2. **Open the Project**  
   Open the `index.html` file in your preferred web browser. You will see a traffic signal that cycles through red, green, and yellow lights at the defined intervals.

## Customization

- **Adjusting Durations**:  
  To change the duration of each light, modify the `duration` values in the `lights` array inside `script.js`.

- **Styling Adjustments**:  
  Modify `styles.css` to customize the appearance of the traffic signal, such as changing the colors, sizes, or layout of the lights.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

This project was created as a learning exercise and can be used as a starting point for more complex simulations or web development projects.
