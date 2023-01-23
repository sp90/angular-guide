---
title: "Getting Started with Angular: A Beginner's Guide"
description: 'Learn how to get started building your first web application with Angular, including installation, creating a new project, understanding the project structure, and creating new components.'
keywords:
  - Angular
  - web development
  - JavaScript
  - framework
  - beginners guide
published: true
slugs:
  - getting-started-with-angular-beginners-guide
---

# Getting Started with Angular: A Beginner's Guide

Are you new to Angular and looking to get started building your first web application? Look no further! This guide will walk you through the process of installing the Angular CLI, creating a new project, and familiarizing yourself with the project structure.

## Installation

To begin, you will need to install the Angular CLI (Command Line Interface) on your computer. Open a terminal and run the following command:

```shell
npm install -g @angular/cli
```

## Creating a New Project

Once the Angular CLI is installed, you can use it to create a new project. In your terminal, navigate to the directory where you want to create your project and run the following command:

```shell
ng new my-app
```

(replace "my-app" with the name of your project)

## Running the Development Server

Your new project is now created, navigate to the project directory by running

```shell
cd my-app
```

and start the development server by running

```shell
ng serve
```

This command will start a local development server and open your application in a web browser at http://localhost:4200/

## Understanding the Project Structure

The default project structure created by the CLI has a few important files and directories that you should familiarize yourself with. These include src/app, where the main components of your application are located, and src/index.html, the main HTML file that loads your application.

## Creating a New Component

Components are the building blocks of an Angular application. You can create a new component by running

```shell
ng generate component my-component

# Shorthand:
ng g c my-component
```

(replace "my-component" with the name of your component). This command will create a new directory with the same name as the component, containing all the necessary files for that component.

## Adding the Component to the App

To add the newly created component to your application, you need to import it in the src/app/app.module.ts file and add it to the declarations array.

_You are now ready to start building your first Angular application! The official Angular documentation is a great resource for learning more about the framework and its features._
