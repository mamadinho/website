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

### What kind of things that brings us the most profit and sales?

We want to know about the categories and subcategories’ performance over a quarter, and how it performs compared to previous quarter. This can give us some information whether some categories are more profitable, or even give us some loss.

![alt text](/src/images/dashboard-3.webp 'Image')

The plot above has shown that most of our product went down on sales on Q3 2013, given many products even has more than -20% on sales. Even we know that the Tables category has bad performance in terms of profit.

---

### Which type of customer has the most sales?

This may be one of the most deciding factors in determining who can we analyse more to increase the profit of our supermarket. Also, we can know more about the characteristic of our customer as a whole.

![alt text](/src/images/dashboard-4.webp 'Image')

We can see that almost half of our customer is normal consumer, while the other half is either corporate or home office.

--- 

### Which type of customer has the most sales?

An interactive map that shows the sales and profit for each nation can be very helpful as we can get to know which nation/continent can be analysed more as it may have the least sales or the most sales. Also, we want to know which nations gives us the most sales, so we can bring more attention to these nations.

![alt text](/src/images/dashboard-5.webp 'Image')
![alt text](/src/images/dashboard-6.webp 'Image')

---

## Conclusion and Future Work

From the creation of the dashboard above, we can create easily using Tableau and creative minds to give information about the data we have. Starting from just showing the total sales and profit from the supermarket, to creating bar graph to know about the performance of each category and subcategory and its growth, until creating an interactive map to see each nation’s sale from our supermarket, we have created an interactive dashboard.

Extensive research on how supermarket measures its performance is needed as this analysis is only based on my knowledge on supermarket, and I still have zero experience in this domain.

You can try the dashboard by opening this [link](https://public.tableau.com/app/profile/ahmad.irfan.luthfi.tumbuan/viz/SupermarketSalesReport_16701537730630/Dashboard1?publish=yes).

*This project cannot be done without the help of Pacmann’s Sekolah Data program because I learned so much there. Kudos to them!*