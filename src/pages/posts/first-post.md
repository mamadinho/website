---
layout: '@/templates/BasePost.astro'
title: Face Recognition 101
description: Introduction to traditional face recognition
pubDate: 2022-01-03T00:00:00Z
imgSrc: '/src/images/facerec-0.webp'
imgAlt: 'Image post'
---

At first, you may wonder:

- How can we interpret an image of someone’s face into mathematics using Linear Algebra (matrices/vectors)?
- How can a system able to recognize someone from an image containing their face?
- How can we make a computer learn about someone’s face?

It is <b>extremely okay</b> if you wonder one of the things listed above because you are curious to learn about face recognition, hence why I will give you some insights about this and hopefully you will get a grasp on what is face recognition and what is happening behind the scene.

---

## Isn’t Face Recognition is Image Classification?

They are similar, but can’t be treated equally. When you train an image classification model, usually you have a dataset contains <b>n</b> classes and for each classes, you have many images. Let’s say 100 images for each class. But, when you want to build face recognition system, <i>you may only have one picture of someone</i>. Also in image classification, you want to classify between different classes, or you can say objects. In face recognition, they are all faces. So, you need to get features that can distinguish each person’s face. But if you understand how image classification works, you will learn face recognition easily.

---

## The magic of human brain

The most common machine learning tasks, like image classification, or the-most-used-dataset such as predicting house prices, can be done using one machine learning process. You can just input your data, and the output will be given by only one process. But, things are different in face recognition.

First, you need to find all faces from an image (<b>face detection</b>). Then, you need to see unique features from the face that differs someone from other people (<b>feature extraction</b>). Lastly, you compare the features you extracted to all people that you already seen and find the person from your knowledge.

God gives us this process for <b>free</b> and we need to appreciate all the things that god has given us. Even right now, human-created machines still can’t recognize faces as good as our free-given brain.

---

## Eigenfaces (these are not pictures of ghosts)

To be able to know how we get eigenfaces from an image, first we need to know how to represent an image in math, what is eigenvalues and what is PCA. But first of all, what is eigenfaces? ([image source](https://en.wikipedia.org/wiki/Eigenface))

![alt text](/src/images/eigenfaces.webp 'Image')

### Image Representations

> Assume the face has been preprocessed as a square image

In computer, a grayscale image is represented by NxN matrix. But for easiness of operations, we will convert this matrix into an N²x1 simply by unraveling the matrix into a tall vector. But, imagine if we have a 200 by 200 pixel face image. So, if we convert the image into a vector, we will have 40000x1 vector, which when we have so many images, **we will process everything in a 40000-dimensional space**. Imagine the cost when you want to process anything. So, PCA comes to help us reducing the cost by creating a lower dimensional space.

### So, what is Eigenfaces and PCA?

To get eigenfaces, first we apply PCA to our dataset. According to [wikipedia](https://en.wikipedia.org/wiki/Principal_component_analysis), PCA is the process of computing the principal components and using them to perform a **change of basis** on the data, sometimes using only the first few principal components and ignoring the rest. So, PCA can be used if we want to **reduce the dimension** of our data.

After we apply PCA to our dataset, we got something called Principal Component (PC). The PC from the PCA is the **eigenvectors** from the covariance matrix. The eigenvectors we got from this step is the one we called **eigenfaces**. Now, we know that the name **eigen**face is derived from the process to get the features using the help of eigenvalue and eigenvector.

---

## Fisherfaces

![alt text](/src/images/fisherfaces.webp 'Image')

([image source](http://www.scholarpedia.org/article/Fisherfaces)) In 2011, Aleix Martinez proposes an alternative to eigenface that we discussed earlier, called **Fisherface**. The main difference between eigenface and fisherface is that eigenface uses PCA, while fisherface uses a different approach using LDA. After we applied LDA into our dataset creating a new subspace representation, the basis vectors creating that subspace is called fisherface. If you are interested in fisherfaces, you may read this [website](http://www.scholarpedia.org/article/Fisherfaces) that discusses everything you need to know about it.

--- 

## PCA vs LDA

In simple terms, the difference of LDA and PCA is that LDA instead of maximizing the variance, we want to minimize the variance of the projected class and finds axes that maximizes separation between class means. Also PCA is an unsupervised learning algorithm, while LDA is a supervised.

---

## Eigenface vs Fisherface

Peter N. Belhumeur, Joao~ P. Hespanha, and David J. Kriegman has published a [paper](https://cseweb.ucsd.edu/classes/wi14/cse152-a/fisherface-pami97.pdf) titled “_Eigenfaces vs. Fisherfaces: Recognition Using Class Specific Linear Projection_”. It is concluded that:

- Both eigenface and fisherface perform well if the images in test set is similar to the train set
- Fisherface is **significantly better** at extrapolating and interpolating over variation of lighting, and also at simultaneously handling variation in lighting and expressions.
- By removing the **three largest principal components**, we can improve the eigenface method, but still has higher error rate than fisherface

---

## Is it the best?

Here is the rank-1 recognition graph of both eigenface and fisherface on AT&T Facedatabase conducted by a Github User, [bytefish](https://github.com/bytefish/facerec):

![alt text](/src/images/facerec-1.webp 'Image')

By looking at the graph, we know that we have to has 7–9 images per person and the eigenfaces and fisherfaces seems to converges to the same recognition rate value. Imagine when we only have one image of someone we want to add into our knowledge.

---

## Another apporach: Local Features 

Some researcher has the idea to not look an image as a high dimensional vector, but we can describe the local features of an image. As human, we sometimes described someone’s face with the physical characteristic, such as shape of their eyes, nose, mouth, and many more aspects. Local Binary Patterns, also known as LBP, uses 2D texture analysis. The basic idea of LBP is using the summarization of the local structure of an image using comparison of each pixel with its neighbors. If the intensity of center pixel is greater-equal than its neighbor, we assign 1 to the center — otherwise 0. [image source](https://www.pyimagesearch.com/2015/12/07/local-binary-patterns-with-python-opencv/)

![alt text](/src/images/facerec-2.webp 'Image')

## LBPH vs Eigenfaces vs Fisherfaces

Qadrisa Mutiara Detila and Eri Prasetyo Wibowo released a [journal](https://ejournal.jak-stik.ac.id/index.php/komputasi/article/download/2675/61/562) at 2019 comparing between the three methods conducting face recognition on 6 faces and 4 different conditions, resulting in below table:

![alt text](/src/images/facerec-3.webp 'Image')

## Isn’t everything right now is DEEP LEARNING?

Of course there are many deep learning approaches for face recognition. After we discussed a lot on traditional methods, we will discuss one method called OpenFaces.

![alt text](/src/images/facerec-4.webp 'Image')

Florian Schroff, Dmitry Kalenichenko, and James Philbin published a paper in CVPR 2015 called [FaceNet: A Unified Embedding for Face Recognition and Clustering](http://www.cv-foundation.org/openaccess/content_cvpr_2015/app/1A_089.pdf). Like most deep learning model, this model is trained with a lot of data, containing 500k images and got 92.9% accuracy on LFW Benchmark dataset.

The advantage of deep learning approaches is that we don’t need a lot of image of one person to get good performance, even we can use only one image per person. In FaceNet, that face will be trained using three images, called **anchor image (A), positive image (P)** and **negative image (N)**.

![alt text](/src/images/facerec-5.webp 'Image')

([image source](https://m-shaeri.ir/blog/how-facenet-works-how-to-work-with-facenet/)) The anchor and positive should contain the same person, while the negative one doesn’t. The idea here is that we want the image of some person (**A**) is closer to all images **P** that belongs to the same person as **A**, while keeping the farthest distance to other images **N**.

![alt text](/src/images/facerec-6.webp 'Image')

([image source](https://m-shaeri.ir/blog/how-facenet-works-how-to-work-with-facenet/)) So, if we have one person to be added into our model, we need to do a process called **enrollment**. The idea of this process is that we want to find the location of the person in our subspace (located by the blue dot in the image above). So after we have our new person’s location, if we have an image that has the embedding near our blue vector(s), we can be sure that the image is **most probably** is the new person that was recently added. In FaceNet, we pass a persons image to get a obtain 128 dimensional feature descriptors corresponding to the image.

Notice that I used the term **most probably**, not showing any certainty because no algorithm can perfectly recognize a person’s image, hence the term most probably is used.

# References

https://docs.opencv.org/3.3.1/da/d60/tutorial_face_main.html
https://towardsdatascience.com/face-recognition-how-lbph-works-90ec258c3d6b
https://www.pyimagesearch.com/2015/12/07/local-binary-patterns-with-python-opencv/
https://towardsdatascience.com/face-recognition-how-lbph-works-90ec258c3d6b
https://m-shaeri.ir/blog/how-facenet-works-how-to-work-with-facenet/
http://cmusatyalab.github.io/openface/