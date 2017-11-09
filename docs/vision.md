# Vision

## Guiding Principles

- SOLID Principles - https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
- SemVer - https://semver.org
- Twelve Factor - https://12factor.net

## Tech

### Building Blocks

1. UI
    - One or more containers with
    - One or more web hosts with (do this now?)
    - One or more Angular single page applications with
    - One or more lazy loaded Angular modules
2. APIs
    - One or more containers with 
    - One or more web hosts with
    - One or more HAPI/Express/Koa REST HTTP services with
    - One or more API service modules
3. Data Sources
    - e.g. RDBMS's
4. Workers (name?)
    - One or more containers with
    - One or more worker hosts with
    - One or more
        1. Schedulers - kick off a message at a scheduled time)
        2. Handlers - handle a command or event message)
            a. Transactional - Only acknowledge message when handler completes. Supports retries and dead-lettering of message
            b. At most once - Acknowledge message immediately, may fail and message will not be reprocessed.
        3. Services (name? Not this!) - Run continuously until process is terminated
5. Shared
    - Contracts
    - Validators (for Contracts)
    - Routes (API and UI)

### Shared project

What can be shared:

1. Contracts
    a. API
    b. Message queue
3. Validators
4. Routes
    a. UI (maybe? for menus and security?)
    b. API

### CLI operations

Create a new

1. Web UI
    - package.json references
        - @nge/ui-core
        - @nge/web-core
        - (Optionally) @nge/ui-components
    - Web host project
    - Docker container host
2. API
    - REST API web project
    - Docker container host
    - Shared contract project
    - Client library project (optional) 
3. Database


## Organization

### What an enterprise should have for app development

#### At an enterprise level

- Standards and practices
- A shared UI design standard + core CSS
- A shared UI component library
- Shared tooling libraries
    - Data access
    - Logging
    - etc

#### At a department level

- A shared UI component library that extends the enterprise one
- A set of front end applications
- APIs to feed front end

#### At a team level

- Team may own either
    - The full stack for one or more applications
    - A single layer (UI or service) for one or more applications

### Team structures

1. Single app / Single team

2. Single app / Full stack module teams

    a. Module A team

    b. Module B team

    c. (optional) Core/architecture team

3. Horizontal teams

    a. UI team
    
    b. API team

4. Other teams

    a. Core/architecture team

    b. DevOps team

    c. UI component team

## Scenario 1: New project

### Scenario 1.1: Quick path

Developer wants to get a new functioning site with all standard features up and running as fast as possible.

Steps
1. Developer installs cli:

        /$ npm i -g @nge/cli
2. Developer creates new solution folder and initializes it
    
        /$ mkdir my-solution
        /$ ngec init
         Angular Enterprise CLI
         Creating projects for "my-solution"...
            /shared
            /ui
            /api
            /mobile
            /database
            /build
            /containers (name?)
         Done!
3. They get