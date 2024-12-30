*Evaluate a News Article with Natural Language Processing - Latifa project*


#Project Overview<br/>
This project utilizes Natural Language Processing (NLP) techniques to evaluate news articles. The app integrates a sentiment analysis API to determine the sentiment and subjectivity of a given text. It demonstrates practical applications of Webpack, Sass, service workers, API usage, and unit testing.

--------------------------------------------------------------------------
#Features<br/>
•	Sentiment Analysis: Evaluate the sentiment and subjectivity of text using an external API.<br/>
•	Responsive Design: Styling with Sass for a clean and responsive user interface.<br/>
•	Unit Testing: Ensure the robustness of code with Jest tests.<br/>
•	Production Optimization: Webpack optimizations for performance and small bundle sizes.<br/>

--------------------------------------------------------------------------

#Getting Started<br/>
#Prerequisites<br/>
<b>
1- Node.js version :  v22.12.0<br>
2- npm  version : 10.9.0
</b>
<br/><br/>
#Installation
1- Clone the Repository:<br/>
<b>git clone -b refresh-2019 <repository _url></b>
<br/><br/>
2- Navigate to the Project Directory:<br/>
<b>cd <project_directory></b>
<br/><br/>
3. Install Dependencies:<br/>
<b>npm install</b>
<br/><br/>
4-Running the Development Server
To start the application in development mode:<br/>
<b>npm run start</b>
<br/><br/>
5- The app will be accessible at http://localhost:8080.
Building for Production
<br/><br/>
6- To create a production build:<br/>
<b>npm run build</b>
<br/><br/>
#Environment Setup<br/>
1-Create a .env file in the root directory.<br/>
2-Add your API credentials:API_KEY=your_api_key<br/>
3-Ensure .env is listed in .gitignore to secure sensitive data.<br/>

   
--------------------------------------------------------------------------

#Development Workflow
--Setting up Webpack and Sass
1.	Install necessary packages:
2.	npm i -D @babel/core @babel/preset-env babel-loader
3.	npm i -D style-loader node-sass css-loader sass-loader
4.	npm i -D clean-webpack-plugin html-webpack-plugin
npm i -D mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin
5.	Rename CSS files to .scss and update imports in index.js.
6.	Verify Webpack configuration supports entry points, loaders, and plugins.
API Integration
1.	Sign up for an API key:
o	MeaningCloud API
2.	Configure the server to handle API requests , use your own key .
Unit Testing
1.	Install Jest:
npm install --save-dev jest
2.	Write test cases for JavaScript files in src/client/js.
3.	Run tests:
npm run test
--------------------------------------------------------------------------
#Technologies Used<br/>
1- Development: Webpack, Babel<br/>
2- Styling: Sass<br/>
3- Backend: js<br/>
4- Testing: Jest<br/>
5- API:  using MeaningCloud <br/>



