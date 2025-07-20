
---

### ✅ Midterm-Style Introductory & Meta-Web Questions

## (`Intro.pdf`_)
#### 🟣 Course & Ecosystem Foundations

**Q1.** What are the core technologies emphasized in the CSCI 571 course?  
**A1.**

- HTML, CSS
    
- HTTP
    
- Web servers
    
- Client-side JavaScript and JS frameworks
    
- Server-side JavaScript and Python
    
- AJAX-based development
    

**Q2.** Name three newer technologies mentioned in the course that support modern web development.  
**A2.**

- Responsive design with Bootstrap
    
- JS frameworks like Angular, React, Node.js
    
- Cloud functions (e.g., AWS Lambda)
    

---

#### 🟣 Web Evolution & Architecture

**Q3.** What is the significance of serverless architecture?  
**A3.** It allows developers to run backend logic without managing infrastructure. Providers like AWS Lambda or GCP Functions scale automatically and bill per request.

**Q4.** Match each web generation to its core characteristic:

- 1st Gen → Static HTML
    
- 3rd Gen → Dynamic pages, ODBC/JDBC
    
- 6th Gen → Microservices, containers, cloud-native apps
    

**Q5.** What is the role of DNS in platforms like AWS Route 53?  
**A5.** It maps domain names to IP addresses and routes users to geographically closest resources, aiding performance and redundancy.

---

#### 🟣 Real-World Infrastructure Examples

**Q6.** What web stack did `www.fogdog.com` use?  
**A6.**

- Apache 2.0
    
- Linux server
    
- MySQL database
    
- Moved to eBay infrastructure later
    

**Q7.** What architecture did E*TRADE use to handle 60M page views/month?  
**A7.**

- IBM xSeries, Citrix Netscaler
    
- Apache and Tomcat
    
- Oracle DB
    
- AWS Route 53 for DNS
    

**Q8.** What is a web server farm and what problems does it address?  
**A8.** A group of co-located servers that handle load balancing, redundancy, and failover; prevents single-point failures.

---

#### 🟣 Browsers & User Agents

**Q9.** List three key capabilities of modern web browsers.  
**A9.**

- Display HTML, CSS, media
    
- Run JavaScript and extensions
    
- Establish secure HTTPS connections with certificates
    

**Q10.** What does browser caching do, and name its three types.  
**A10.**

- Improves performance by storing web resources
    
- Types: Disk cache, memory cache, offline content
    

---

#### 🟣 Cloud Services & Hosting

**Q11.** Name three major cloud providers mentioned in the document.  
**A11.** Amazon AWS, Google Cloud Platform, Microsoft Azure

**Q12.** Compare two web hosting strategies:  
**A12.**

- **Traditional Hosting**: Uses physical or virtual servers, manual scaling, provider-managed
    
- **Serverless**: Code runs on demand, auto-scaled, event-driven (e.g., AWS Lambda)
    

---

#### 🟣 Web Evolution Timeline (Theory Question)

**Q13.** According to the evolution chart in the PDF, what came after CGI and server scripts?  
**A13.** Dynamic web pages with database backends using ODBC, JDBC and application layers.

**Q14.** What phase introduced Web 2.0, JSON, and Ajax?  
**A14.** 5th Generation (circa 2008)

---

### ✅  `Intro.pdf`

| Theme                | Core Content                                           |
| -------------------- | ------------------------------------------------------ |
| Course Scope         | Tools, languages, protocols                            |
| Web Growth Trends    | Site usage stats, real companies (Fogdog, E*TRADE)     |
| Hosting Solutions    | Shared vs cloud, serverless platforms                  |
| Browser Capabilities | Rendering, plugins, secure comms                       |
| Evolution Timeline   | Static → Dynamic → Web Services → Web 2.0 → IoT, Cloud |
| Tools and Deployment | GitHub Pages, Node.js, Docker, Cloud Functions         |
| Security & Standards | SSL, certificates, HTML5 deprecation notes             |

---

Thanks! Now that you've uploaded the detailed `WebBasics.pdf`, here's a fresh set of **midterm-style questions** modeled exactly like your CSCI 571 sample exam. These questions test your grasp of the **internet infrastructure, WWW architecture, DNS, URLs, web history, protocols, and hypertext systems.**

---

### ✅ Midterm-Style Web Basics Questions

## ( `WebBasics.pdf`_)


#### 🟣 Internet vs WWW

**Q1.** Differentiate between the Internet and the World Wide Web.  
**A1.**

- **Internet** is the physical and logical network infrastructure connecting millions of devices globally.
    
- **WWW** is a service built on top of the Internet that allows users to access multimedia documents via HTTP and web browsers.
    

**Q2.** Define **intranet** and **extranet** with one use-case each.  
**A2.**

- **Intranet**: Internal organizational network (e.g., USC's internal course system).
    
- **Extranet**: Private network using public channels to share data securely with partners/suppliers (e.g., vendor portal).
    

---

#### 🟣 Trends and Growth

**Q3.** List three major trends in recent Internet development.  
**A3.**

- Growth in smartphone usage (Android, iOS)
    
- Expansion of cloud computing and mobile-first design
    
- Increased use of social media and mobile access over desktops
    

**Q4.** What does it mean that "hosts were doubling every 18 months"?  
**A4.** It indicates exponential growth of Internet-connected devices/IPs, suggesting rapid network expansion during early years.

---

#### 🟣 DNS (Domain Name System)

**Q5.** What is the role of DNS in the web ecosystem?  
**A5.** DNS resolves human-readable domain names into machine-readable IP addresses, enabling users to access websites by names like `google.com`.

**Q6.** What are Google's public DNS servers?  
**A6.**

- IPv4: `8.8.8.8` and `8.8.4.4`
    
- IPv6: `2001:4860:4860::8888` and `2001:4860:4860::8844`
    

**Q7.** What causes latency in DNS lookups? Mention two factors.  
**A7.**

- Network congestion or overloaded servers
    
- Cache misses requiring recursive resolution
    

---

#### 🟣 Domain Names and URL Structure

**Q8.** What are the five parts of a typical URL?  
**A8.**

1. Scheme (e.g., `http:`)
    
2. Domain name (e.g., `usc.edu`)
    
3. Optional port (e.g., `:8080`)
    
4. Path (e.g., `/docs/info.html`)
    
5. Query string (e.g., `?id=123`)
    

**Q9.** Give an example of each of the following URL schemes: `http`, `mailto`, `ftp`  
**A9.**

- `http://example.com/index.html`
    
- `mailto:someone@usc.edu`
    
- `ftp://usc.edu/docs/file.txt`
    

**Q10.** What character must be percent-encoded in a URL, and how is space represented?  
**A10.**  
Reserved characters like `?`, `#`, `&`, `%` must be encoded. Space is encoded as `%20`.

---

#### 🟣 HTTP & Web Server Model

**Q11.** What is the function of the HTTP protocol in the client-server model?  
**A11.** It enables web clients (browsers) to request resources from web servers using standardized methods like GET and POST.

**Q12.** Name three things a web server **can do** and two things it **cannot do**.  
**A12.**

- Can: respond to HTTP requests, serve static files, execute CGI scripts
    
- Cannot: interpret file contents or validate embedded image formats
    

---

#### 🟣 History of the Web

**Q13.** Who invented the WWW and when was it released?  
**A13.** Tim Berners-Lee invented the WWW at CERN in 1989–1990, releasing the prototype on a NeXT machine in 1990.

**Q14.** What key technologies were launched between 1993 and 2008? Name any three.  
**A14.**

- 1993: Mosaic browser
    
- 1994: Netscape Navigator
    
- 2008: Google Chrome
    

---

#### 🟣 Markup and Hypertext

**Q15.** Define Hypertext and give a real-world example.  
**A15.** Hypertext is regular text with embedded links to other documents. Example: Wikipedia pages with clickable references.

**Q16.** What is the difference between HTML and word processors like MS Word?  
**A16.** HTML describes structure and layout but not precise visual formatting; word processors are WYSIWYG and focus on exact layout.

---

#### 🟣 Web Infrastructure and Client/Server Architecture

**Q17.** What are the main components of client/server architecture in the web?  
**A17.**

- Clients (e.g., browsers)
    
- Servers (e.g., HTTP, FTP servers)
    
- Communication protocols (e.g., HTTP, FTP)
    
- Addressing (e.g., URLs)
    

**Q18.** What does MIME negotiation do during a web request?  
**A18.** MIME negotiation helps clients and servers agree on the content type (e.g., `text/html`, `image/png`) to ensure correct rendering.

---

### ✅ Topics Covered from `WebBasics.pdf`

|Category|Concepts Included|
|---|---|
|Internet vs WWW|Core definitions, intranet, extranet|
|DNS & Domain Names|DNS resolution, IP mapping, latency causes|
|URL Anatomy & RFCs|Schemes, components, encoding|
|Growth & Trends|Smartphone, social, mobile, cloud, media|
|Web Architecture|Client-server model, protocols, server limitations|
|Markup & Hypertext|HTML, hypertext navigation|
|Web History|Timeline from Berners-Lee to Chrome|
|MIME, Protocols, Ports|HTTP/FTP/SMTP, MIME negotiation, default ports|

---

Would you now like a **complete PDF practice midterm exam** combining questions across all uploaded modules — HTML, CSS, JS, Python, HTTP, Forms/CGI, DOM, DNS, etc.? I can organize it by topic or in a randomized format simulating the real exam.

Thanks for uploading `HTMLBasics.pdf`. This document covers **HTML structure, syntax, elements, attributes, linking, images, tables, lists, meta tags**, and more.

Below is a set of **CSCI 571-style midterm questions**, crafted in the same format you've asked for, pulling from every key concept in the file.

---

### ✅ Midterm-Style HTML Basics Questions

## (`HTMLBasics.pdf`_)

#### 🟡 Core HTML & History

**Q1.** What is HTML and who created it?  
**A1.** HTML (HyperText Markup Language) is used to describe text formatting, graphics, hyperlinks, and forms for web display. It was created by Tim Berners-Lee at CERN around 1990.

**Q2.** What are the main differences between HTML 4.01 and HTML5?  
**A2.**

- HTML5 introduced new semantic tags, multimedia support, and APIs.
    
- HTML 4.01 focused on structure and formatting with limited multimedia integration.
    

---

#### 🟡 Structure & Syntax

**Q3.** What are the two main parts of an HTML document?  
**A3.**

1. `<HEAD>` – contains meta information and title
    
2. `<BODY>` – contains visible content like paragraphs, images, links
    

**Q4.** What does the `<!DOCTYPE ...>` line specify?  
**A4.** It tells the browser which HTML version and ruleset (DTD) to use for rendering.

**Q5.** True or False: All HTML tags require closing tags.  
**A5.** False. Some tags like `<P>` or `<HR>` are optional or self-closing.

---

#### 🟡 Tags & Elements

**Q6.** What are attributes in HTML and how are they written?  
**A6.** Attributes provide extra information to elements. They follow the format `name="value"` and are placed inside the opening tag.

**Q7.** Which tag is used to insert comments, and what are its rules?  
**A7.**

```html
<!-- comment goes here -->
```

- Cannot be nested
    
- Must not have space between `<!` and `--`
    

---

#### 🟡 Lists

**Q8.** How are ordered and unordered lists defined?  
**A8.**

- Ordered: `<OL>`, uses `<LI>` for items
    
- Unordered: `<UL>`, uses `<LI>` for items
    

**Q9.** What are deprecated list attributes and how should they be handled in modern HTML?  
**A9.** `TYPE` in `<OL>` is deprecated. Use CSS:

```html
<STYLE> OL.roman { list-style-type: lower-roman; } </STYLE>
```

**Q10.** Define a definition list with two entries.  
**A10.**

```html
<DL>
  <DT>HTML<DD>A markup language for web pages
  <DT>CSS<DD>A stylesheet language for styling HTML
</DL>
```

---

#### 🟡 Tables

**Q11.** What are the key tags used in HTML tables?  
**A11.**

- `<TABLE>`, `<TR>`, `<TD>`, `<TH>`, `<CAPTION>`
    

**Q12.** How do `rowspan` and `colspan` work in a table?  
**A12.**

- `rowspan` makes a cell span multiple rows
    
- `colspan` makes a cell span multiple columns
    

**Q13.** Define a table with 3 rows, 2 columns, and a caption.  
**A13.**

```html
<TABLE BORDER="1">
<CAPTION>Example Table</CAPTION>
<TR><TD>Row 1</TD><TD>Data</TD></TR>
<TR><TD>Row 2</TD><TD>Data</TD></TR>
<TR><TD>Row 3</TD><TD>Data</TD></TR>
</TABLE>
```

---

#### 🟡 Character Encoding & References

**Q14.** What does `&#60;` and `&gt;` represent in HTML?  
**A14.**

- `&#60;` = `<` (less-than sign)
    
- `&gt;` = `>` (greater-than sign)
    

**Q15.** What is the `charset` value used in a `Content-Type` header to specify encoding?  
**A15.**

```html
Content-Type: text/html; charset=UTF-8
```

---

#### 🟡 Anchors & Hyperlinks

**Q16.** How do you create a hyperlink to another page?  
**A16.**

```html
<A HREF="http://example.com">Visit Example</A>
```

**Q17.** What are fragment identifiers in URLs used for?  
**A17.** They refer to specific elements within the same page using the `id` attribute:

```html
<A href="#section2">Jump</A> … <H2 id="section2">Section</H2>
```

**Q18.** List three types of anchors with `HREF`:  
**A18.**

- `mailto:someone@usc.edu`
    
- `ftp://domain/file.pdf`
    
- `news:comp.lang.python`
    

---

#### 🟡 Images & Graphics

**Q19.** What are key attributes of the `<IMG>` tag?  
**A19.**

- `SRC`, `ALT`, `WIDTH`, `HEIGHT`, `BORDER`, `ALIGN`
    

**Q20.** What does `ALT` do in `<IMG>`?  
**A20.** Provides alternate text for screen readers or when the image fails to load.

---

#### 🟡 Imagemaps & Interactivity

**Q21.** How do you define clickable regions in an image map?  
**A21.**  
Use `<MAP>` and `<AREA>` tags with coordinates:

```html
<IMG SRC="map.jpg" USEMAP="#regions">
<MAP NAME="regions">
  <AREA SHAPE="RECT" COORDS="10,10,50,50" HREF="page1.html">
</MAP>
```

**Q22.** What are valid `SHAPE` values in `<AREA>`?  
**A22.** `default`, `rect`, `circle`, `poly`

---

#### 🟡 Meta & Link Tags

**Q23.** What does the `<META>` tag do? Give one use.  
**A23.** Provides metadata.  
Example:

```html
<META name="author" content="Ellis Horowitz">
```

**Q24.** How is redirection done using `<META>`?  
**A24.**

```html
<META HTTP-EQUIV="REFRESH" CONTENT="5; URL=http://usc.edu">
```

---

#### 🟡 HTML Validation

**Q25.** Why should you validate your HTML?  
**A25.**

- Ensures browser consistency
    
- Catches syntax errors
    
- Helps transition to modern HTML5 standards
    

**Q26.** What is the W3C URL for HTML validation?  
**A26.** [http://validator.w3.org](http://validator.w3.org/)

---

### ✅ HTML Topics Covered from `HTMLBasics.pdf`

|Category|Concepts Included|
|---|---|
|Syntax & Structure|Tags, attributes, DOCTYPE, browsers|
|Lists|`<UL>`, `<OL>`, `<DL>`, nesting|
|Tables|`<TABLE>`, `rowspan`, `colspan`, `caption`|
|Anchors & Links|`HREF`, named anchors, fragment ids|
|Images & Imagemaps|`<IMG>`, `<MAP>`, `<AREA>`, `ALT`|
|Meta & Link Elements|Metadata, redirection, robot control|
|Character Entities|`&lt;`, `&#60;`, etc.|
|HTML History|Versions, W3C, HTML5|
|Tools|Editors, validators, W3C links|

---


Based on the extensive content in **`CSS.pdf`**, here is a comprehensive set of **CSCI 571-style midterm questions**, designed to reflect the formatting, depth, and topic distribution of your course’s sample midterm.

---

### ✅ Midterm-Style CSS Questions

## (`CSS.pdf`_)

#### 🟢 CSS Fundamentals

**Q1.** What is the main purpose of using style sheets in HTML?  
**A1.** To separate content from presentation, enabling control over layout, spacing, colors, fonts, and responsive design across web pages.

**Q2.** What does “cascading” in Cascading Style Sheets (CSS) mean?  
**A2.** When multiple styles apply to the same element, the **most specific** rule or the **last one defined** wins, following a **priority order**.

---

#### 🟢 Ways to Apply CSS

**Q3.** List three ways to apply CSS to an HTML document.  
**A3.**

1. Inline via the `style` attribute
    
2. Embedded via `<STYLE>` element
    
3. External via `<LINK>` to a `.css` file
    

**Q4.** Which method of applying CSS has the highest precedence?  
**A4.** Inline styles (`style="..."` inside an element)

---

#### 🟢 Selectors & Specificity

**Q5.** What is the difference between class and ID selectors in CSS?  
**A5.**

- **Class** (`.classname`) can be applied to multiple elements.
    
- **ID** (`#idname`) should be used only once per page.
    

**Q6.** What is the precedence order for these selectors?

1. `H1.special`
    
2. `.special`
    
3. `H1`  
    **A6.**  
    1 > 2 > 3 (most specific to least)
    

---

#### 🟢 Pseudo-Classes and Elements

**Q7.** What does the following CSS snippet do?

```css
a:visited { color: green; }
a:hover   { color: pink; }
```

**A7.**

- `a:visited`: changes color of visited links to green
    
- `a:hover`: changes color of hovered links to pink
    

**Q8.** Define two pseudo-elements and explain what they do.  
**A8.**

- `::first-line`: applies styles to the first line of text
    
- `::before`: inserts content before an element
    

---

#### 🟢 Fonts, Colors, and Backgrounds

**Q9.** What are four valid ways to define a red color in CSS?  
**A9.**

- `#f00`
    
- `#ff0000`
    
- `rgb(255,0,0)`
    
- `rgb(100%,0%,0%)`
    

**Q10.** Write a CSS rule to set the background image of `<H1>` to `black5.gif` and make the text white.  
**A10.**

```css
H1 {
  background: black url(black5.gif) no-repeat;
  color: white;
}
```

---

#### 🟢 Box Model

**Q11.** What are the four parts of the CSS box model (from innermost to outermost)?  
**A11.**

1. Content
    
2. Padding
    
3. Border
    
4. Margin
    

**Q12.** How would you remove bullets and space from an unordered list using CSS?  
**A12.**

```css
ul { list-style: none; margin: 0; padding: 0; }
```

---

#### 🟢 Positioning & Layout

**Q13.** Compare `position: absolute` and `position: relative`.  
**A13.**

- `absolute`: positioned relative to the nearest positioned ancestor
    
- `relative`: positioned relative to its normal position
    

**Q14.** Write CSS to display three newspaper-style columns.  
**A14.**

```css
.newspaper {
  column-count: 3;
  column-gap: 40px;
  column-rule: 4px outset #ff00ff;
}
```

---

#### 🟢 Media Queries and Responsive Design

**Q15.** What is the purpose of media queries in CSS?  
**A15.** To apply different styles depending on device characteristics like screen size or type (e.g., print, screen, projection).

**Q16.** Write a media query that changes font size when width > 600px.  
**A16.**

```css
@media (min-width: 600px) {
  body { font-size: 18px; }
}
```

---

#### 🟢 CSS3 Features

**Q17.** What CSS3 property is used to add rounded corners to an element?  
**A17.** `border-radius`

**Q18.** What does the `box-shadow` property do?  
**A18.** Adds shadow to a box element.  
Example:

```css
box-shadow: 10px 10px 5px #888888;
```

---

#### 🟢 CSS Reset

**Q19.** What is the purpose of a CSS reset file?  
**A19.** To remove default browser styles and create a consistent baseline across all browsers.

**Q20.** Which site offers popular reset stylesheets?  
**A20.** [http://www.cssreset.com](http://www.cssreset.com/)

---

#### 🟢 Validation & Tools

**Q21.** Where can you validate your CSS code?  
**A21.** [http://jigsaw.w3.org/css-validator/](http://jigsaw.w3.org/css-validator/)

**Q22.** What browser tool helps inspect and test CSS live?  
**A22.** Firefox Developer Tools or Chrome DevTools.

---

### ✅ Topics Covered from `CSS.pdf`

|Category|Key Concepts|
|---|---|
|CSS Basics|Cascade, inheritance, specificity|
|Selectors|Class, ID, element, pseudo-classes/elements|
|Fonts & Colors|RGB, names, font styles|
|Box Model|Margin, padding, border, content|
|Layout|Positioning, columns, center alignment|
|Advanced CSS3|Border images, transitions, media queries|
|Accessibility|Screen readers, aural media|
|Cross-Browser|Vendor prefixes: `-webkit-`, `-moz-`, etc.|
|Reset & Consistency|CSS resets, user agent stylesheet overrides|
|Validation & Tools|W3C validator, DevTools|

---

✅ You're now fully covered on all CSS topics for your midterm.

Would you like a **final compiled midterm PDF** or quiz format that mixes all topics: HTML, CSS, JS, DOM, Forms/CGI, JSON, HTTP, Servers, Python, and Intro?
### ✅ Midterm-Style JavaScript Questions

## (`JSBasics.pdf`_)

#### 🟡 JavaScript Fundamentals

**Q1.** What are the two systems JavaScript is split into, and where do they run?  
**A1.** Client-side JavaScript runs in browsers and controls web page behavior; Server-side JavaScript runs on servers (e.g. Node.js) and handles backend logic.

**Q2.** How is JavaScript embedded in an HTML page? Give two ways.  
**A2.**

1. Within the `<body>` using a `<script>` tag.
    
2. Inside the `<head>` as a deferred script to define reusable functions.
    

**Q3.** What is the difference between `null` and `undefined` in JavaScript?  
**A3.** `null` is an intentional assignment representing no value; `undefined` indicates a variable has been declared but not initialized.

---

#### 🟡 JavaScript Behavior & Syntax

**Q4.** What is the significance of JavaScript being case-sensitive? Give an example.  
**A4.** Variable names are case-sensitive: `value`, `Value`, and `VALUE` are different identifiers.

**Q5.** How does JavaScript handle multiple statements on one line?  
**A5.** Semicolons are required to separate multiple statements on the same line.

**Q6.** Why are strings in JavaScript considered immutable?  
**A6.** Because their contents cannot be changed after creation. Operations like concatenation return new strings instead of modifying the original.

---

#### 🟡 Events and Interaction

**Q7.** What happens when a user clicks an HTML button with `onClick="alert('Hi')"`?  
**A7.** A JavaScript `alert` box pops up with the message "Hi".

**Q8.** Name two mouse events and two keyboard events in JavaScript.  
**A8.** Mouse: `onclick`, `onmouseover`; Keyboard: `onkeydown`, `onkeyup`.

---

#### 🟡 Data Types, Variables, Arrays

**Q9.** What data types does JavaScript support? List at least four.  
**A9.** String, Number, Boolean, Null, Object, Function, Undefined.

**Q10.** How are arrays different in JavaScript compared to traditional arrays?  
**A10.** JavaScript arrays are dynamic, can hold mixed data types, are sparse, and their length can be much larger than the actual number of elements stored.

**Q11.** How can you define an array with 10 elements initialized to 0?  
**A11.**

```javascript
Array.dim = function(dimension, initial) {
  var a = [];
  for (var i = 0; i < dimension; i++) {
    a[i] = initial;
  }
  return a;
};
var myArray = Array.dim(10, 0);
```

---

#### 🟡 Objects and Functions

**Q12.** How do you define and instantiate an object using a constructor in JavaScript?  
**A12.**

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}
var car1 = new Car("Toyota", "Corolla");
```

**Q13.** What is the use of the `this` keyword inside a constructor?  
**A13.** It refers to the newly created object instance and allows assignment of properties.

---

#### 🟡 Built-in Functions & Objects

**Q14.** What is the purpose of the following JavaScript functions: `alert()`, `confirm()`, `prompt()`?  
**A14.**

- `alert()`: Shows a popup message.
    
- `confirm()`: Shows OK/Cancel popup and returns true/false.
    
- `prompt()`: Displays a dialog asking for input from the user.
    

**Q15.** Write JavaScript code to print the current date and time to the page.  
**A15.**

```javascript
var d = new Date();
document.write(d.toLocaleString());
```

---

#### 🟡 String & Array Methods

**Q16.** What does `"Lincoln".length` return, and why?  
**A16.** Returns `7`, because there are 7 characters in the string.

**Q17.** What does the `indexOf()` method do on a string or array?  
**A17.** It returns the position of the first occurrence of a specified value, or -1 if not found.

---

#### 🟡 Interview-Like Conceptuals

**Q18.** In what sense are arrays and objects semantically the same in JavaScript?  
**A18.** Both are treated as objects. `typeof` returns `"object"` for both. Properties can be dynamically added.

**Q19.** What is the output of `typeof([])` and `typeof({})`?  
**A19.** Both return `"object"`.

**Q20.** What happens if you assign to an undeclared variable in JavaScript?  
**A20.** It becomes a global variable, which can lead to bugs and unexpected behavior.

---

### ✅ What's Covered from `JSBasics.pdf`

|Category|Covered Concepts|
|---|---|
|Language Structure|Syntax, literals, scope, escape chars, reserved words|
|DOM Interaction|`document.write`, event handlers|
|Data Types|string, number, boolean, null, array, object|
|Objects|literals, constructors, nested objects|
|Arrays|dynamic behavior, methods, sparse arrays|
|Built-ins|`Date`, `Math`, `alert`, `confirm`, `prompt`|
|Browser Tools|Chrome, Firefox, Safari, Edge debugging consoles|
|Common Pitfalls|`undefined` ≠ `null`, undeclared vars, no overloading|

---

Would you like a quiz sheet with these in multiple choice format next, or should I continue with the next file (e.g., React or Node, if you upload it)?


Thanks for your patience! Based on the **`JSON.pdf`** document, here's a detailed set of **exam-style questions** formatted exactly like your sample midterm. These questions span **concepts**, **code behavior**, **real-world use**, and **API usage**.

---

### ✅ Midterm-Style JSON Questions

## (`JSON.pdf`_)

#### 🔵 Core JSON Concepts

**Q1.** What does JSON stand for, and what is it primarily used for in web development?  
**A1.** JSON stands for **JavaScript Object Notation**. It is used for **data interchange** between a web client and a server because it is lightweight, readable, and easy to parse in JavaScript.

**Q2.** Compare JSON and XML in terms of format and use. Mention two differences.  
**A2.**

- JSON uses a key-value pair format; XML uses tags.
    
- JSON is more compact and JavaScript-friendly; XML supports attributes and is verbose.
    

**Q3.** What are the two main data structures supported in JSON?  
**A3.** Objects (key-value pairs) and Arrays (ordered lists of values).

---

#### 🔵 JSON Syntax & Types

**Q4.** Identify the error in the following JSON snippet:

```json
{ "name": "John", age: 25 }
```

**A4.** The key `"age"` is missing quotes. JSON keys must be in double quotes.

**Q5.** List all the valid data types allowed in JSON.  
**A5.**

- Strings
    
- Numbers
    
- Booleans (`true`, `false`)
    
- `null`
    
- Arrays
    
- Objects
    

---

#### 🔵 JavaScript Integration

**Q6.** How can you convert a JSON string into a JavaScript object?  
**A6.** Use `JSON.parse(jsonString)`.

**Q7.** How can you convert a JavaScript object into a JSON string?  
**A7.** Use `JSON.stringify(jsObject)`.

**Q8.** Why is the `eval()` function not recommended for parsing JSON?  
**A8.** It poses a **security risk** by executing arbitrary code. `JSON.parse()` is safer and more reliable.

---

#### 🔵 JSON + XMLHttpRequest (AJAX)

**Q9.** What is the purpose of `req.onreadystatechange = myCode;` in a JSON HTTP request?  
**A9.** It sets a **callback function** (`myCode`) that will be called whenever the state of the HTTP request changes.

**Q10.** What is checked in a standard `XMLHttpRequest` callback before accessing the JSON response?  
**A10.**

```javascript
if (req.readyState === 4 && req.status === 200) {
   // safe to parse response
}
```

**Q11.** In a JSON API response, how do you access the value of `title` in the first item of an array called `commands`?  
**A11.**

```javascript
doc.commands[0].title
```

---

#### 🔵 Real-World API Example

**Q12.** What is the expected format of a JSON response from the Markit On Demand API for a stock symbol lookup?  
**A12.** An **array of objects**, where each object contains keys like `Symbol`, `Name`, and `Exchange`.

**Q13.** Give the endpoint URL to get a stock quote for `AAPL` using the sample JSON API.  
**A13.**

```
http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL
```

**Q14.** What fields are typically returned in a stock quote JSON from the Markit API?  
**A14.** `Name`, `Symbol`, `LastPrice`, `Change`, `ChangePercent`, `Timestamp`, `High`, `Low`, `Open`.

---

#### 🔵 Advanced / Pitfall Style

**Q15.** True or False: You can include functions as values in a JSON object.  
**A15.** **False**. JSON supports only data, not functions or methods.

**Q16.** Why might `JSON.parse()` fail on a well-formed JavaScript object?  
**A16.** If it contains:

- Unquoted keys,
    
- Comments,
    
- Trailing commas,
    
- Or uses single quotes instead of double quotes.
    

**Q17.** Explain the potential security issue with `eval('(' + req.responseText + ')')`.  
**A17.** If the response contains malicious code, `eval()` will execute it, which may compromise the browser or user data.

---

### ✅ Topics Covered from `JSON.pdf`

|Topic Category|Key Concepts Extracted|
|---|---|
|Syntax & Structure|Key-value format, quotes, arrays, nesting|
|Parsing & Serialization|`JSON.parse()`, `JSON.stringify()`, `eval()` risks|
|JavaScript Integration|Accessing fields, setting values, array of objects|
|API & Real Data|Using JSON APIs, HTTP requests, handling responses|
|Practical Snippets|XMLHttpRequest, callbacks, stock quote examples|
|Security & Limitations|Safe parsing, invalid syntax, data-only model|

---

Would you like me to compile all questions from all uploaded files into a **master mock midterm PDF** or **flashcard-style quiz** next? Or should I continue with the next file (if you upload one)?


Based on the comprehensive `DOM.pdf` you've uploaded, here is a structured set of **midterm-style questions** in the exact format of your course sample midterm. These questions cover the **Document Object Model**, **DOM manipulation via JavaScript**, and **XML parsing**, with emphasis on **code behavior**, **DOM tree traversal**, and **real-world interaction.**

---

### ✅ Midterm-Style DOM Questions

## ( `DOM.pdf`_)

#### 🔵 DOM Fundamentals

**Q1.** What is the Document Object Model (DOM), and what types of documents does it apply to?  
**A1.** The DOM is a programming interface for XML and HTML documents. It represents the document as a tree of nodes, allowing access and manipulation of its structure, style, and content.

**Q2.** In a DOM tree, what is the role of the `documentElement` node?  
**A2.** It represents the root of the document tree (e.g., `<html>` or `<order>`) and provides access to its children through properties like `childNodes`.

---

#### 🔵 DOM API and JavaScript

**Q3.** What is the difference between `getElementById()` and `getElementsByTagName()`?  
**A3.**

- `getElementById()` returns a single element with a matching ID.
    
- `getElementsByTagName()` returns a NodeList of all elements with the given tag name.
    

**Q4.** How can you use JavaScript to change the color of an element with ID `sample` to red?  
**A4.**

```javascript
document.getElementById("sample").style.color = "rgb(255,0,0)";
```

**Q5.** What does the `innerHTML` property do, and why should `+=` be avoided with it?  
**A5.** `innerHTML` replaces the entire content of an element with new HTML/text. Using `+=` causes full re-parsing of the content, which is inefficient and can break DOM references. Use `appendChild()` instead.

---

#### 🔵 Event Handling and CSS Manipulation

**Q6.** Write a short code snippet to move a button with ID `btn1` 50 pixels to the right on click.  
**A6.**

```javascript
var x = 0;
function moveRight() {
  x += 50;
  document.getElementById("btn1").style.left = x + "px";
}
```

**Q7.** How does the DOM handle rollover effects using class-based `<a>` elements?  
**A7.** By using `onmouseover` and `onmouseout` handlers inside a loop that targets elements with class `rolloverLink`, and replacing the `.gif` with `_over.gif`.

---

#### 🔵 XML and DOM Parsing

**Q8.** What JavaScript code is used to load an XML document in modern browsers?  
**A8.**

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "books.xml", true);
xhttp.send();
```

**Q9.** How do you access the text value of the first `<title>` in an XML document loaded via XHR?  
**A9.**

```javascript
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
```

**Q10.** What is the purpose of checking `nodeType == 1` when traversing XML nodes?  
**A10.** It ensures that only **element nodes** are processed (not whitespace or text nodes). `1` corresponds to `ELEMENT_NODE`.

---

#### 🔵 DOM Node Types and Traversal

**Q11.** What are `TEXT_NODE` and `ELEMENT_NODE` types in the DOM?  
**A11.**

- `TEXT_NODE` (3): represents text content.
    
- `ELEMENT_NODE` (1): represents element tags like `<title>`, `<book>`.
    

**Q12.** In Firefox, why might the number of childNodes differ from Internet Explorer?  
**A12.** Firefox treats whitespace between tags as `TEXT_NODE`s, which IE often ignores. This causes different node counts.

---

#### 🔵 Practical Example-Based Questions

**Q13.** What does the `reverse()` function in the DOM example do?  
**A13.** It reverses the order of all child nodes of a given parent node.

**Q14.** What happens when you set a background image using DOM JavaScript? Give an example.  
**A14.** The image is set as a CSS property:

```javascript
document.getElementById("test").style.backgroundImage = "url('bg.jpg')";
```

---

### ✅ DOM Topics Covered in This Set

|Concept Area|Key Topics|
|---|---|
|Tree Structure & Nodes|`document`, `childNodes`, `nodeType`, `ELEMENT_NODE`, `TEXT_NODE`|
|Element Access|`getElementById`, `getElementsByTagName`, `innerHTML`, style changes|
|Dynamic Manipulation|Button movement, fading text, innerHTML replacement, rollover|
|XML DOM Parsing|`XMLHttpRequest`, `responseXML`, asynchronous vs synchronous loading|
|Cross-Browser Differences|Whitespace handling, node count mismatches|
|Event Handling|`onclick`, `onmouseover`, `onmouseout`, DOM-style registration|
|Security & Best Practices|Avoid `innerHTML +=`, use `createElement` + `appendChild`|

---

Would you like me to now compile all questions (from HTML, CSS, JS, JSON, DOM, etc.) into one **comprehensive mock midterm paper** or keep going as you upload more files (like React, HTTP, Web APIs, etc.)?



Excellent — the `FormsAndCGI.pdf` document contains rich, exam-relevant topics involving **HTML forms**, **input types**, and **server-side CGI handling**. Based on your sample midterm format, here’s a new set of highly-targeted questions that align closely with the level and style of your exam.

---

### ✅ Midterm-Style Questions – HTML Forms & CGI

## ( `FormsAndCGI.pdf`_)

#### 🟦 HTML Form Basics

**Q1.** What are the two essential steps to enable a webpage form to collect and process data?  
**A1.**

1. Use HTML form elements (`<form>`, `<input>`, etc.) to collect user input.
    
2. Use a server-side script (e.g., in `cgi-bin`) to process and respond to the input.
    

**Q2.** What are the `method` options in the `<form>` tag and how do they differ?  
**A2.**

- `GET`: appends form data to the URL; visible in browser; good for idempotent queries.
    
- `POST`: sends form data in the request body; suitable for sensitive or large data.
    

**Q3.** What is the purpose of the `enctype` attribute in a form tag?  
**A3.** It defines how the form data is encoded before sending to the server. The default `application/x-www-form-urlencoded` encodes data as key-value pairs.

---

#### 🟦 `<input>` Tag Types and Attributes

**Q4.** How does a `radio` input work, and how is it different from `checkbox`?  
**A4.**

- `radio`: one selection per group (same name); only one option can be selected.
    
- `checkbox`: each box is independent; multiple selections allowed.
    

**Q5.** What does the `type="hidden"` input do in a form?  
**A5.** It stores data not visible to the user but sent to the server upon submission (e.g., session IDs).

**Q6.** Write the HTML to create a password field with a maximum length of 10 characters.  
**A6.**

```html
<INPUT TYPE="password" NAME="pw" SIZE=10 MAXLENGTH=10>
```

---

#### 🟦 HTML5 Input Types

**Q7.** List any four HTML5-specific `<input>` types and their usage.  
**A7.**

- `email`: validates email format
    
- `date`: calendar picker
    
- `range`: slider for numeric range
    
- `tel`: telephone input
    

**Q8.** What does `readonly` vs `disabled` attribute do in an input field?  
**A8.**

- `readonly`: visible and included in form submission, but cannot be edited.
    
- `disabled`: grayed out, not editable, and **not** submitted.
    

---

#### 🟦 Form Elements Beyond `<input>`

**Q9.** How is `<textarea>` different from `<input type="text">`?  
**A9.** `<textarea>` supports multi-line input with scrollbars and can be sized using `rows` and `cols`.

**Q10.** What does `<select>` with `multiple` attribute allow?  
**A10.** It allows the user to select multiple options from a scrollable list. Each selection is sent as a separate name/value pair.

---

#### 🟦 CGI (Common Gateway Interface)

**Q11.** What is the Common Gateway Interface (CGI)?  
**A11.** It is a protocol for running external programs via a web server to generate dynamic content in response to client requests.

**Q12.** How does a web server communicate with a CGI script?  
**A12.**

1. Receives a request (e.g., via form)
    
2. Launches the CGI script and passes the request data
    
3. The script processes the data and sends back output (often HTML)
    

---

#### 🟦 CGI Environment Variables

**Q13.** What are CGI environment variables used for?  
**A13.** They provide metadata about the HTTP request (e.g., method, client IP, server software) and help CGI scripts process input correctly.

**Q14.** What is the role of `CONTENT_TYPE` and `CONTENT_LENGTH` in CGI?  
**A14.**

- `CONTENT_TYPE`: the MIME type of the POST data (e.g., `application/x-www-form-urlencoded`)
    
- `CONTENT_LENGTH`: the size of the POST body data in bytes
    

**Q15.** What CGI environment variable contains the URL query string for a GET request?  
**A15.** `QUERY_STRING`

---

#### 🟦 Server Response from CGI

**Q16.** What are the three main server directives in CGI output?  
**A16.**

- `Content-type`: defines MIME type of response (e.g., `text/html`)
    
- `Location`: redirects to a different URL or file
    
- `Status`: sets HTTP status code and message (e.g., `404 Not Found`)
    

**Q17.** What does the following CGI output indicate?

```
Content-type: text/plain

Hello, world!
```

**A17.** The CGI script is responding with plain text `"Hello, world!"` instead of HTML.

---

### ✅ Topics Covered from `FormsAndCGI.pdf`

|Area|Key Concepts|
|---|---|
|HTML Form Basics|`<form>`, `action`, `method`, `enctype`, `target`|
|Input Elements|`text`, `password`, `checkbox`, `radio`, `hidden`, HTML5 types|
|Advanced Inputs|`<textarea>`, `<select>`, `<option>`, `<fieldset>`|
|Form Actions|`submit`, `reset`, validation attributes|
|CGI Architecture|definition, purpose, script handling|
|Environment Variables|`QUERY_STRING`, `SERVER_NAME`, `CONTENT_TYPE`, etc.|
|Server Directives|MIME, redirects, status codes|
|Output Behavior|Formatting CGI responses to the browser|

---

Would you like to now receive a **combined midterm-style PDF** for all topics so far, or should I continue processing additional files if you upload more (like Node, React, HTTP, Web APIs)?


Based on the thorough and wide-ranging content of the `Python.pdf`, here is a fresh set of **midterm-style questions** tailored to reflect the same structure, format, and depth as your CSCI 571 sample midterm. These questions blend foundational Python knowledge with web-focused libraries like **Flask**, **Requests**, and **Django**.

---

### ✅ Midterm-Style Python Questions

## ( `Python.pdf`_)

#### 🟢 Python Basics

**Q1.** List three features of Python that make it popular for web and scripting applications.  
**A1.**

- Interpreted and dynamically typed
    
- Simple, readable syntax
    
- Built-in data structures and libraries for rapid development
    

**Q2.** What does the following code output?

```python
a = "Python"
print(a[0], a[-1])
```

**A2.** `P n`

**Q3.** What is the difference between a **tuple** and a **list** in Python?  
**A3.**

- Tuples are immutable; lists are mutable.
    
- Tuples use `()`; lists use `[]`.
    

---

#### 🟢 Python Data Structures

**Q4.** What is the output of the following expression?

```python
bar = "Hi"
print(bar * 3)
```

**A4.** `HiHiHi`

**Q5.** Name three key-value operations you can perform on a Python dictionary.  
**A5.**

- Access a value: `dict[key]`
    
- Add or update: `dict[key] = value`
    
- Remove: `del dict[key]`
    

**Q6.** What is the difference between a **set** and a **list** in Python?  
**A6.**

- A set is unordered and contains unique elements; a list is ordered and allows duplicates.
    

---

#### 🟢 Python Functions and Control Flow

**Q7.** Define a function in Python that takes two numbers and returns their product.  
**A7.**

```python
def multiply(a, b):
    return a * b
```

**Q8.** What is a lambda function? Give an example.  
**A8.** A lambda is an anonymous function.  
Example: `f = lambda x: x * 2`

**Q9.** Write a `for` loop using `range(3)` and show its output.  
**A9.**

```python
for i in range(3):
    print(i)
```

**Output:**

```
0  
1  
2
```

---

#### 🟢 Object-Oriented Python

**Q10.** How is a class created in Python? Include a constructor.  
**A10.**

```python
class Dog:
    def __init__(self, name):
        self.name = name
```

**Q11.** What is the difference between a class variable and an instance variable?  
**A11.**

- Class variable: shared across all instances
    
- Instance variable: specific to each object
    

---

#### 🟢 String, List, and Dictionary Methods

**Q12.** What does `my_list.append(x)` do in Python?  
**A12.** Adds `x` to the end of the list.

**Q13.** Convert a float to a string and concatenate it with `%`.  
**A13.**

```python
rate = 0.175  
print(str(rate * 100) + "%")
```

---

#### 🟢 Python Web (Flask, Requests, Django)

**Q14.** What is Flask, and what is it primarily used for?  
**A14.** Flask is a lightweight WSGI Python web framework used to build web apps and RESTful APIs.

**Q15.** Write a minimal Flask app that returns “Hello, Flask!”  
**A15.**

```python
from flask import Flask  
app = Flask(__name__)  
@app.route('/')  
def home():  
    return "Hello, Flask!"
```

**Q16.** How do you return JSON from a Flask API?  
**A16.**

```python
from flask import jsonify  
@app.route('/api')  
def api():  
    return jsonify({'message': 'success'})
```

---

#### 🟢 Python and HTTP/Requests

**Q17.** What does the `requests.get()` function do?  
**A17.** Sends an HTTP GET request to the specified URL and returns the response.

**Q18.** How do you extract JSON from a `requests` response?  
**A18.**

```python
import requests  
r = requests.get('http://example.com')  
data = r.json()
```

---

#### 🟢 Django

**Q19.** What command initializes a new Django project?  
**A19.**

```bash
django-admin startproject mysite
```

**Q20.** What is the role of `views.py` in Django?  
**A20.** Defines the functions or classes that process requests and return HTTP responses.

**Q21.** What command runs the Django development server?  
**A21.**

```bash
python manage.py runserver
```

---

### ✅ Python Topics Covered from `Python.pdf`

|Area|Core Topics|
|---|---|
|Language Fundamentals|Variables, data types, print, operators|
|Data Structures|List, tuple, set, dict|
|Functions and Control Flow|`def`, `lambda`, `if`, `for`, `while`|
|OOP|Classes, `__init__`, inheritance|
|Web Programming|Flask, RESTful APIs, template rendering|
|HTTP Handling|`requests`, `jsonify`, API data|
|Django Basics|Project setup, views, URL routing|
|Error Handling|`try/except`, `ValueError`|
|Practical Integration|Web services, JSON APIs, static file handling|

---

Would you like me to now generate a **complete compiled midterm PDF or mock exam** with a mix of these questions across all topics so far? Or shall I continue with more file processing if you have additional uploads?



Thank you — your `WebServers.pdf` is very rich in technical details. Below is a fresh set of **realistic midterm-style questions**, modeled closely after your CSCI 571 sample midterm — focusing on **web server architecture, Apache configuration, CGI handling, logging, and virtual hosting.**

---

### ✅ Midterm-Style Web Server Questions

## ( `WebServers.pdf`_)

#### 🔵 General Web Server Concepts

**Q1.** What are three core responsibilities of a web server?  
**A1.**

1. Serve hypertext content (HTML, media).
    
2. Manage user access and authentication.
    
3. Handle server-side scripts (via CGI/API).
    

**Q2.** What are two ways a server can handle multiple client requests simultaneously?  
**A2.**

- Forking: spawn a new process per request.
    
- Multithreading: use threads within a single server process to handle concurrent requests.
    

---

#### 🔵 Web Server Features & Capabilities

**Q3.** Define “Document Root” and explain its significance.  
**A3.** The base directory from which a web server serves files. All relative URLs resolve starting from this location.

**Q4.** What is the purpose of virtual hosting?  
**A4.** Allows a single server to host multiple domains (websites) by mapping different IPs or domain names to different document roots.

**Q5.** How does a web server use `.htaccess`?  
**A5.** It provides directory-level configuration, commonly used for authentication and URL rewriting, though it can reduce performance.

---

#### 🔵 Apache Server Specifics

**Q6.** What configuration file does Apache use and what are two key directives it contains?  
**A6.** `httpd.conf`  
Examples:

- `DocumentRoot` – specifies root directory
    
- `ScriptAlias` – maps URLs to executable directories
    

**Q7.** What directive enables persistent connections in Apache, and what does it do?  
**A7.**

```apache
KeepAlive On
```

It allows multiple HTTP requests over a single TCP connection to improve performance.

**Q8.** Write the VirtualHost block to serve `www.example.com` from `/web/example`.  
**A8.**

```apache
<VirtualHost *:80>
    ServerName www.example.com
    DocumentRoot /web/example
</VirtualHost>
```

---

#### 🔵 CGI & Server-Side Apps

**Q9.** What are two interfaces for integrating server-side applications with Apache?  
**A9.**

- Common Gateway Interface (CGI)
    
- Apache Module APIs (e.g., mod_php, mod_perl)
    

**Q10.** How is a CGI script path configured in Apache?  
**A10.** Using the `ScriptAlias` directive, e.g.:

```apache
ScriptAlias /cgi-bin/ "/path/to/cgi-bin/"
```

---

#### 🔵 Security & Access Control

**Q11.** What happens when a client accesses a password-protected directory on an Apache server?  
**A11.** The server returns a 401 Unauthorized, prompting the browser for credentials, which are checked against `.htpasswd`.

**Q12.** What does the `Require` directive do in `.htaccess`?  
**A12.** Specifies which users or groups are permitted access.  
Example: `Require user student1`

**Q13.** Explain the role of `Allow` and `Deny` inside a `<Limit>` block.  
**A13.** They control host-based access. `order allow,deny` evaluates Allow first, Deny second.

---

#### 🔵 Logging & Performance

**Q14.** What fields are typically found in an Apache `access_log` entry?  
**A14.** IP address, timestamp, HTTP method and path, response code, size of response in bytes.

**Q15.** What is the difference between a page view and a hit in server logs?  
**A15.**

- **Hit**: any request (e.g., HTML, image, CSS).
    
- **Page View**: request for a full HTML page.
    

**Q16.** How can you handle 404 errors with a custom page in Apache?  
**A16.**

```apache
ErrorDocument 404 /error-page.html
```

---

#### 🔵 Advanced Features

**Q17.** What is content negotiation in Apache?  
**A17.** A mechanism that serves different document versions (e.g., language or format) based on client preferences.

**Q18.** What directive is used to enable proxy functionality in Apache?  
**A18.**

```apache
ProxyRequests On
```

**Q19.** List two caching directives used with Apache's proxy server.  
**A19.**

- `CacheRoot`: defines base directory for cache
    
- `CacheSize`: sets maximum size of cache in KB
    

---

#### 🔵 Real-World Scenarios

**Q20.** You want to host `www.x.com` and `www.y.org` on the same IP. What Apache feature do you use?  
**A20.** Name-based virtual hosting using `NameVirtualHost` and multiple `<VirtualHost>` blocks.

**Q21.** How does Apache handle a directory path when no file is specified?  
**A21.** It returns the file specified in the `DirectoryIndex` directive (default is `index.html`), or lists files if Indexing is enabled.

---

### ✅ Topics Covered from `WebServers.pdf`

|Category|Concepts Covered|
|---|---|
|Server Basics|HTTP support, request handling, APIs|
|Apache Server|httpd.conf, directives, modules, logging|
|CGI & Application Hosting|ScriptAlias, mod_php, .NET, Node.js|
|Authentication|.htaccess, `.htpasswd`, user & group control|
|Virtual Hosting|IP-based & name-based methods|
|Proxy & Caching|`mod_proxy`, `ProxyRequests`, `CacheRoot`|
|Error Handling|404 customization, `ErrorDocument`|
|Performance & Logs|access_log, error_log, tools like WebTrends|

---

Would you now like a **fully compiled practice midterm PDF** with a random but balanced mix of questions from **all topics** so far? Or should I keep generating questions if you’re uploading more files (e.g., React, Web APIs, Node.js)?

**Thanks! Based on your detailed `HTTP.pdf`, here's a comprehensive set of **midterm-style questions** modeled after your CSCI 571 sample exam — covering **HTTP versions, methods, headers, status codes, MIME, CORS, persistent connections**, and more.

---

### ✅ Midterm-Style HTTP Questions

## (`HTTP.pdf`_)

#### 🟠 HTTP Protocol Basics

**Q1.** What is the primary purpose of HTTP in the web ecosystem?  
**A1.** HTTP enables communication between web clients and servers for retrieving hypertext documents, invoking scripts, and exchanging data over the web.

**Q2.** What key feature makes HTTP different from FTP?  
**A2.** HTTP is stateless and lightweight, using a single connection per request (with optional persistence), whereas FTP maintains separate control and data channels with longer sessions.

---

#### 🟠 HTTP Versions & History

**Q3.** What are three enhancements introduced in HTTP/1.1 over HTTP/1.0?  
**A3.**

- Persistent connections (Keep-Alive)
    
- Support for virtual hosts
    
- Better caching and proxy capabilities
    

**Q4.** What is HTTP/2's primary goal, and how does it achieve it?  
**A4.** To improve performance by reducing latency through features like header compression, multiplexing, and server push.

**Q5.** What is an ETag and what HTTP response does it optimize?  
**A5.** An ETag is a unique identifier for a resource version, enabling conditional requests. If matched, the server responds with `304 Not Modified`.

---

#### 🟠 Request & Response Messages

**Q6.** What are the four components of an HTTP request?  
**A6.**

- Method
    
- Identifier (URL)
    
- HTTP Version
    
- Body (optional)
    

**Q7.** What is the meaning of the following HTTP request line?

```http
GET /index.html HTTP/1.1
```

**A7.** The client is requesting the resource `/index.html` from the server using the GET method with HTTP version 1.1.

**Q8.** Name three HTTP request methods besides GET.  
**A8.**

- POST
    
- PUT
    
- DELETE  
    (also: HEAD, OPTIONS, TRACE)
    

---

#### 🟠 HTTP Headers

**Q9.** What does the `Content-Type` header specify in an HTTP response?  
**A9.** It defines the MIME type of the response body, e.g., `text/html`, `image/jpeg`.

**Q10.** What is the purpose of the `User-Agent` header in an HTTP request?  
**A10.** It identifies the client software (browser, OS) making the request.

**Q11.** What does the `Range: bytes=0-511` header do?  
**A11.** It requests only a specific portion (bytes 0 to 511) of the resource, enabling partial downloads.

---

#### 🟠 MIME Types and Media

**Q12.** What MIME type would be used for a Microsoft PowerPoint file?  
**A12.** `application/vnd.ms-powerpoint`

**Q13.** What is the role of the `Content-Encoding` header?  
**A13.** Specifies how the content is encoded (e.g., `gzip`) before transfer; helps with compression.

---

#### 🟠 Persistent Connections (Keep-Alive)

**Q14.** What is the benefit of HTTP persistent connections?  
**A14.** They reduce latency by allowing multiple requests and responses on the same TCP connection.

**Q15.** What does the `Connection: close` header indicate?  
**A15.** It disables persistence, signaling that the connection should be closed after the current request/response cycle.

---

#### 🟠 Caching, Proxies & Intermediaries

**Q16.** Differentiate between proxy, gateway, and tunnel in HTTP.  
**A16.**

- **Proxy**: modifies or forwards requests.
    
- **Gateway**: translates protocol (e.g., HTTP to FTP).
    
- **Tunnel**: relays data blindly without inspection (e.g., for HTTPS).
    

**Q17.** What does the `Vary` response header do?  
**A17.** Indicates that the resource has multiple versions (e.g., by language or device) and proxies should cache accordingly.

---

#### 🟠 Status Codes

**Q18.** What status code does the server return if the resource is not modified since last access?  
**A18.** `304 Not Modified`

**Q19.** What status code is used when a requested page doesn’t exist?  
**A19.** `404 Not Found`

**Q20.** What’s the meaning of `401 Unauthorized`?  
**A20.** The server requires authentication credentials which are either missing or invalid.

---

#### 🟠 Authentication & Security

**Q21.** How does HTTP Basic Authentication work?  
**A21.** The server sends a `401 Unauthorized` with a `WWW-Authenticate` header. The client re-sends the request with credentials encoded in the `Authorization` header.

**Q22.** What is HTTP Strict-Transport-Security (HSTS)?  
**A22.** A header (`Strict-Transport-Security`) that instructs browsers to always use HTTPS for a domain, enforcing secure connections.

---

#### 🟠 CORS (Cross-Origin Resource Sharing)

**Q23.** What is the purpose of CORS and which header enables it?  
**A23.** CORS allows cross-domain AJAX requests. The `Access-Control-Allow-Origin` response header defines which domains are permitted.

**Q24.** What happens if a CORS request is denied?  
**A24.** The browser blocks the response and throws a CORS error.

---

### ✅ Topics Covered from `HTTP.pdf`

|Topic Area|Concepts Covered|
|---|---|
|HTTP Versions|HTTP/0.9 → 1.0 → 1.1 → 2.0|
|Requests & Responses|Syntax, headers, body, status codes|
|MIME & Content Types|MIME structure, encoding|
|Persistent Connections|Keep-alive, connection reuse|
|Proxies & Tunnels|Proxy, gateway, caching|
|CORS|Origin headers, ACAO, browser policy|
|Authentication|401, WWW-Authenticate, base64 credentials|
|Status Codes|1xx–5xx: meaning and usage|
|Entity Tags (ETag)|Conditional requests, 304 responses|

---

Would you like a **full-length mixed mock exam** compiled from all topics so far (HTML, CSS, JS, JSON, DOM, CGI, Python, WebServers, HTTP)? Or shall I continue analyzing more files if you're uploading them?**
