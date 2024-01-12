---
layout: '@/templates/BasePost.astro'
title: Supermarket’s Sales Report Dashboard
description: A tableau dashboard to monitor supermarket's sales
pubDate: 2022-12-04T00:00:00Z
imgSrc: '/src/images/dashboard-0.webp'
imgAlt: 'Image post 5'
---

Supermarket is one of the most important industries in the world. People around the world bought their essential life needs in supermarket or minimarket, hence thousands of people will buy from the supermarket. Not only for personal/family needs, another industry like restaurant, or even machinery factories buy almost everything from the supermarket. However, the number of transactions every day is growing rapidly for both offline and online transactions. This shows the needs of an **interactive dashboard** for monitoring sales, profit, quantity, region performance, and many more. Here, I will present to you my thinking from where I still haven’t even used Tableau to create dashboard, to finally have done a project and this article within 4 hours (yes, you read that right). This shows that creating dashboard is not difficult, we just need to convince ourselves to do so.

---

Supermarket has many data, while one of the most important is the transaction data. We want to know how much profit we made, how many sales have we made, what product gives us the most profit, and many more business questions can be answered. So, here is the main things that I want to show in my dashboard:

- How much sales and profit we have made in a quarter?
- How many customers have bought in our supermarket?
- Does our sales and profit increase in some quarter?
- What kind of things that brings us the most profit and sales?
- Which type of customer has the most sales?
- What region and country has the most sales?
- Does our sales increase over time?

So, I have created a interactive dashboard using Tableau and searched for some dataset in various dataset portal, and finally found one usable dataset from Kaggle called **Global Super Store Dataset**. This is a very interesting dataset because it has many informations for the dashboard, such as profit, customer type (consumer, corporate or home office), country, and many more.

After we found the suitable dataset, we can answer the questions above using data visualization. Our visualization will use quarterly period, as many companies use quarter system for reporting the performance of the company. **Examples of the visualization are made from the third quarter of 2013 (Q3 2013)**. But you can easily try another period using the link below.

---

### How much sales and profit we have made in a quarter? How many customers have bought in our supermarket?

We can calculate the amount of sales, profit, customers and transactions and also know the information about the growth of them.

![alt text](/src/images/dashboard-1.webp 'Image')

Using this kind of visualization, we can easily know about how much sales, profit, and the growth of them. In Q3 2013, we can see that our sales and profit went down, but the customer count increases by 20%.

--- 

### Does our sales and profit increase in some period?

A graph that shows the change of total sales and profit each month is suitable to answer this question.

![alt text](/src/images/dashboard-2.webp 'Image')

From the visualization above, the sales and profit of the supermarket are fluctuative, while both the sale and order have the same pattern.

--- 