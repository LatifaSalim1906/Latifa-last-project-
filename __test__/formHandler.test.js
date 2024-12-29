
import { handleSubmitNow } from "../src/client/js/formHandler"
import { submitUrlToServer } from "../src/client/js/formHandler"
import { displayResults } from "../src/client/js/formHandler"


   // test handleSubmitNow function
describe("Testing the submit functionality", () => {
     
    test("Testing the handleSubmitNow() function", () => {
        
          expect(handleSubmitNow).toBeDefined();
    })});


    // test submitUrlToServer function
describe("Testing the submit functionality", () => {
     
      test("Testing the submitUrlToServer() function", () => {
          
            expect(submitUrlToServer).toBeDefined();
      })});


         // test displayResults function
describe("Testing the submit functionality", () => {
     
      test("Testing the displayResults() function", () => {
          
            expect(displayResults).toBeDefined();
      })});




