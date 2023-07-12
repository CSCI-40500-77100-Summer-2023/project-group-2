# TaskFlow

## Overview

FOR individuals that are seeking for an efficient task management application WHO struggle to stay organized and meet deadlines, THE TaskFlow is an application THAT streamlines organization, prioritization, and tracking deadlines for increased productivity. UNLIKE other task management apps that offer basic task lists without tailored features and suggestions, OUR app provides a user-friendly interface, customizable features and reminders, and achievements for accomplishing tasks.

## Installation

1. Clone the repo with HTTPS or SSH

    ```sh
    git clone https://github.com/CSCI-40500-77100-Summer-2023/project-group-2.git
    ```

    ```sh
    git clone git@github.com:CSCI-40500-77100-Summer-2023/project-group-2.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Run the app

    ```sh
    npm run dev
    ```

## Usage

1. Fill out the form to create a new task
2. Select deadline date and check remind me button (currently true/false)
3. Click Submit
4. Select date on calendar to view tasks
5. Click ListView to see a list of all saved tasks

## Notes

Currently, tasks are not saved serverside therefore closing the tab will delete all tasks that have been made.

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/KgC_EPX5)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11310054)

## Software Product Architecture

### Important Qualities

1. Security - To ensure the security of TaskFlow, we would need to protect user data, implement proper authentication and authorization mechanisms, and securing connection and communication between TaskFlow and the client.
2. Performance - To ensure TaskFlow can perform activities quickly and efficiently, we would need to use database queries, caching frequently handled data, and have options for future scalability to handle heavy load.
3. Software Reuse - By using open-source software such as React, we can save development time and effort. However, this will constrain us to certain architectural choices.
4. Scalability - In order for TaskFlow to continue growth, we would need to consider designing the architecture in a way that allows for quikc and efficient scaling up and down. We would need to implement technologies that support horizontal scaling such as distributed databases and load balancers.
5. Software Compatability - It is important to maintain software compatability with other software systems because not every user uses the same devices and systems. Users and clients might need to import or export data between different systems.
