# Serverless functions

Today we want you to explore serverless functions on Netlify by adding some dynamic data to your product detail pages.

You should build a serverless function that takes a product id (hint: slug) and searches a database of your choice and returns the available quantity.
This number should be displayed on the page.

1. Create your own database (of your choice) and add stock quantity data for each product. You only need to read this data, not update it. 
2. Create a Netlify function in a _functions_ folder that reads from the database and responds with the data. (This is your API).
3. Add functionality in your template to retrieve and display the data.

## Setup

Make sure to add ` npm install netlify-cli -g` in order to run ` netlify dev ` instead of ` gatsby start `.
That way you have access to the serverless functions in your development environment. 

You should also add a `netlify.toml ` file to link the functions. Just add 

```
[build]
functions = "functions"
```


Reminder: Use environment variables for your credentials. DO NOT hard code them.

## Bonus  assignment

If you have time, add a `buy` button that updates the stock quantity in the database.
You do not need to add shoppingcart functionality, unless you want to :)




